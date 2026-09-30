import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent, MouseEvent, PointerEvent } from 'react'
import screenshots from '../../lib/data/screenshots'
import { useLocale, useT } from '../../lib/i18n'
import type { AppCard } from '../../lib/types/app'
import { IconChevronLeft, IconChevronRight, IconClose, IconZoom } from '../icons'

/** A horizontal drag shorter than this is a tap, not a swipe */
const SWIPE_THRESHOLD = 40

/**
 * Zooming in the full-size view goes to the file's own resolution, or to this
 * multiple of the fitted size when the file is barely larger than the screen —
 * a zoom that grows the image by 5% reads as a click that did nothing.
 */
const MIN_ZOOM = 1.75

/** Width to zoom to, and the clicked point as a fraction of the image */
type Zoom = { width: number; fx: number; fy: number }

/**
 * Screenshots for one project: a stage with previous/next controls, a counter
 * and a thumbnail strip, plus a full-size view in a native <dialog> — which
 * brings focus trapping and Escape-to-close for free.
 *
 * Renders nothing when the project has no screenshots, and drops any image
 * that fails to load, so a missing file costs a slide rather than a broken box.
 * Mount it with `key={app.id}` so a different project starts at its first slide.
 */
function ScreenshotGallery({ app }: { app: AppCard }) {
  const t = useT()
  const { locale } = useLocale()
  const [failed, setFailed] = useState<ReadonlySet<string>>(() => new Set())
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState<Zoom | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const swipeStart = useRef<number | null>(null)

  const shots = useMemo(
    () => (screenshots[app.id] ?? []).filter((shot) => !failed.has(shot.src)),
    [app.id, failed]
  )

  // Keep the clicked point under the cursor: scroll the zoomed image so that
  // point lands where the click was, before the browser paints. Unzooming
  // (or switching slides, which also clears zoom) resets the scroll so the
  // next zoom-in — or the fitted view itself — doesn't start mid-scroll.
  useLayoutEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    if (!zoom) {
      viewport.scrollLeft = 0
      viewport.scrollTop = 0
      return
    }
    const img = viewport.querySelector('img')
    if (!img) return
    viewport.scrollLeft = img.offsetLeft + zoom.fx * img.offsetWidth - viewport.clientWidth / 2
    viewport.scrollTop = img.offsetTop + zoom.fy * img.offsetHeight - viewport.clientHeight / 2
  }, [zoom])

  if (shots.length === 0) {
    return null
  }

  const count = shots.length
  const current = Math.min(index, count - 1)
  const shot = shots[current]
  const hasMany = count > 1
  const shotRatio = { '--shot-ratio': `${shot.width} / ${shot.height}` } as CSSProperties

  const go = (next: number) => {
    setZoom(null)
    setIndex((next + count) % count)
  }

  /** Zooms around a point given as a fraction of the fitted image */
  const zoomIn = (fx: number, fy: number) => {
    const fitted = viewportRef.current?.querySelector('img')?.getBoundingClientRect().width
    if (!fitted) return
    setZoom({ width: Math.round(Math.max(shot.width, fitted * MIN_ZOOM)), fx, fy })
  }

  const toggleZoom = (event: MouseEvent<HTMLImageElement>) => {
    if (zoom) {
      setZoom(null)
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    zoomIn((event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.height)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!hasMany) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(current - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(current + 1)
    }
  }

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    // A zoomed image pans with the finger instead of changing slides
    swipeStart.current = event.pointerType === 'mouse' || zoom ? null : event.clientX
  }

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (swipeStart.current === null || !hasMany) return
    const delta = event.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      go(delta < 0 ? current + 1 : current - 1)
    }
  }

  const markFailed = (src: string) => {
    setFailed((previous) => new Set(previous).add(src))
  }

  const controls = hasMany ? (
    <>
      <button
        type='button'
        className='gallery-nav prev'
        onClick={() => go(current - 1)}
        aria-label={t.apps.prevShot}>
        <IconChevronLeft size={24} />
      </button>
      <button
        type='button'
        className='gallery-nav next'
        onClick={() => go(current + 1)}
        aria-label={t.apps.nextShot}>
        <IconChevronRight size={24} />
      </button>
    </>
  ) : null

  return (
    <section
      className={`project-section gallery ${app.accent}`}
      aria-roledescription='carousel'
      aria-label={t.apps.galleryAria(app.title)}
      onKeyDown={handleKeyDown}>
      <div className='gallery-head'>
        <h2>{t.apps.screenshots}</h2>
        {hasMany ? (
          <span className='gallery-count' aria-live='polite'>
            {t.apps.shotOf(current + 1, count)}
          </span>
        ) : null}
      </div>

      <div
        className='gallery-stage'
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}>
        <button
          type='button'
          className='gallery-open'
          onClick={() => dialogRef.current?.showModal()}
          aria-label={`${t.apps.enlargeShot}: ${shot.alt[locale]}`}>
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt[locale]}
            width={shot.width}
            height={shot.height}
            style={shotRatio}
            decoding='async'
            draggable={false}
            onError={() => markFailed(shot.src)}
          />
          <span className='gallery-zoom' aria-hidden='true'>
            <IconZoom />
          </span>
        </button>
        {controls}
      </div>

      {hasMany ? (
        <ul className='gallery-thumbs'>
          {shots.map((item, i) => (
            <li key={item.src}>
              <button
                type='button'
                className='gallery-thumb'
                onClick={() => setIndex(i)}
                aria-label={t.apps.showShot(i + 1)}
                aria-current={i === current ? 'true' : undefined}>
                <img
                  src={item.src}
                  alt=''
                  width={item.width}
                  height={item.height}
                  loading='lazy'
                  decoding='async'
                  onError={() => markFailed(item.src)}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <dialog
        ref={dialogRef}
        className='gallery-dialog'
        aria-label={t.apps.galleryAria(app.title)}
        onKeyDown={handleKeyDown}
        onClose={() => setZoom(null)}>
        <div
          ref={viewportRef}
          className={`gallery-dialog-viewport ${zoom ? 'zoomed' : ''}`}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onClick={(event) => {
            // The dark area around the image closes the view, like a backdrop
            if (event.target === event.currentTarget) {
              dialogRef.current?.close()
            }
          }}>
          <img
            src={shot.src}
            alt={shot.alt[locale]}
            width={shot.width}
            height={shot.height}
            decoding='async'
            draggable={false}
            style={zoom ? { ...shotRatio, width: zoom.width } : shotRatio}
            onClick={toggleZoom}
          />
        </div>
        <p className='gallery-dialog-caption'>
          {hasMany ? <span>{t.apps.shotOf(current + 1, count)}</span> : null}
          {shot.alt[locale]}
        </p>
        {controls}
        <div className='gallery-dialog-tools'>
          <button
            type='button'
            className='gallery-tool'
            onClick={() => (zoom ? setZoom(null) : zoomIn(0.5, 0.5))}
            aria-label={t.apps.enlargeShot}
            aria-pressed={zoom ? 'true' : 'false'}>
            <IconZoom size={24} />
          </button>
          <button
            type='button'
            className='gallery-tool'
            onClick={() => dialogRef.current?.close()}
            aria-label={t.apps.closeShot}>
            <IconClose size={24} />
          </button>
        </div>
      </dialog>
    </section>
  )
}

export default ScreenshotGallery
