import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { LOCALES, localeLabels, useLocale, useT } from '../lib/i18n'
import { IconCheck, IconClose, IconMoon, IconSun } from './icons'
import { setTheme, useIsDark } from './theme-switch'

type Panel = 'theme' | 'language'

const CLOSE_MS = 240
const DISMISS_DISTANCE = 90

function MobileControls() {
  const t = useT()
  const { locale, setLocale } = useLocale()
  const dark = useIsDark()

  const [panel, setPanel] = useState<Panel | null>(null)
  const [visible, setVisible] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [dragY, setDragY] = useState(0)

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dragStart = useRef<number | null>(null)
  const lastTrigger = useRef<HTMLElement | null>(null)
  const sheetRef = useRef<HTMLElement | null>(null)

  const openPanel = (next: Panel, trigger: HTMLElement) => {
    lastTrigger.current = trigger
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setPanel(next)
    setDragY(0)
    setVisible(false)
    requestAnimationFrame(() => setVisible(true))
  }

  const closePanel = useCallback(() => {
    setVisible(false)
    setDragging(false)
    setDragY(0)
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }
    closeTimer.current = setTimeout(() => {
      setPanel(null)
      closeTimer.current = null
      lastTrigger.current?.focus()
    }, CLOSE_MS)
  }, [])

  useEffect(() => {
    if (!panel) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePanel()
        return
      }

      if (e.key === 'Tab') {
        const sheet = sheetRef.current
        const focusable = sheet
          ? Array.from(
              sheet.querySelectorAll<HTMLElement>(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
              )
            ).filter((element) => element.offsetParent !== null)
          : []

        if (focusable.length === 0) {
          e.preventDefault()
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement

        if (e.shiftKey && (active === first || active === sheet)) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closePanel, panel])

  useEffect(() => () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!visible) {
      return
    }
    const focusTimer = setTimeout(() => sheetRef.current?.focus(), 60)
    return () => clearTimeout(focusTimer)
  }, [visible])

  const handleDragStart = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragStart.current = e.clientY
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handleDragMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) {
      return
    }
    setDragY(Math.max(0, e.clientY - dragStart.current))
  }

  const handleDragEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) {
      return
    }
    const distance = Math.max(0, e.clientY - dragStart.current)
    dragStart.current = null
    setDragging(false)
    setDragY(0)
    if (distance > DISMISS_DISTANCE) {
      closePanel()
    }
  }

  const handleDragCancel = () => {
    dragStart.current = null
    setDragging(false)
    setDragY(0)
  }

  const sheetStyle =
    dragging || dragY > 0
      ? { transform: `translateY(${dragY}px)`, transition: dragging ? 'none' : undefined }
      : undefined

  return (
    <>
      <nav className='mobile-controls' aria-label={t.nav.mobileControlsAria}>
        <div className='mobile-controls-inner'>
          <button
            type='button'
            className='mobile-control'
            aria-haspopup='dialog'
            aria-expanded={panel === 'theme'}
            aria-controls='mobile-sheet'
            onClick={(e) => openPanel('theme', e.currentTarget)}>
            <span className='mobile-control-icon' aria-hidden='true'>
              {dark ? <IconMoon size={24} /> : <IconSun size={24} />}
            </span>
            <span className='mobile-control-text'>
              <span className='mobile-control-title'>{t.nav.themeAria}</span>
              <span className='mobile-control-value'>
                {dark ? t.nav.themeDark : t.nav.themeLight}
              </span>
            </span>
          </button>

          <span className='mobile-control-divider' aria-hidden='true' />

          <button
            type='button'
            className='mobile-control'
            aria-haspopup='dialog'
            aria-expanded={panel === 'language'}
            aria-controls='mobile-sheet'
            onClick={(e) => openPanel('language', e.currentTarget)}>
            <span className='mobile-control-icon is-code' aria-hidden='true'>
              {locale.toUpperCase()}
            </span>
            <span className='mobile-control-text'>
              <span className='mobile-control-title'>{t.nav.languageAria}</span>
              <span className='mobile-control-value'>{localeLabels[locale]}</span>
            </span>
          </button>
        </div>
      </nav>

      {panel ? (
        <div className='mobile-sheet-layer' data-visible={visible ? 'true' : undefined}>
          <button
            type='button'
            className='mobile-sheet-backdrop'
            aria-label={t.nav.close}
            tabIndex={-1}
            onClick={closePanel}
          />

          <section
            id='mobile-sheet'
            ref={sheetRef}
            className='mobile-sheet'
            role='dialog'
            aria-modal='true'
            aria-labelledby='mobile-sheet-title'
            tabIndex={-1}
            style={sheetStyle}>
            <div
              className='mobile-sheet-grip'
              aria-hidden='true'
              onPointerDown={handleDragStart}
              onPointerMove={handleDragMove}
              onPointerUp={handleDragEnd}
              onPointerCancel={handleDragCancel}>
              <span />
            </div>

            <header className='mobile-sheet-header'>
              <h2 id='mobile-sheet-title' className='mobile-sheet-title'>
                {panel === 'theme' ? t.nav.themeAria : t.nav.languageAria}
              </h2>
              <button
                type='button'
                className='mobile-sheet-close'
                aria-label={t.nav.close}
                onClick={closePanel}>
                <IconClose size={24} />
              </button>
            </header>

            {panel === 'theme' ? (
              <div className='mobile-sheet-options'>
                <button
                  type='button'
                  className='mobile-sheet-option'
                  aria-pressed={!dark}
                  onClick={() => setTheme(false)}>
                  <span className='mobile-sheet-option-icon' aria-hidden='true'>
                    <IconSun size={24} />
                  </span>
                  <span className='mobile-sheet-option-label'>{t.nav.themeLight}</span>
                  <span className='mobile-sheet-option-check' aria-hidden='true'>
                    <IconCheck size={24} />
                  </span>
                </button>
                <button
                  type='button'
                  className='mobile-sheet-option'
                  aria-pressed={dark}
                  onClick={() => setTheme(true)}>
                  <span className='mobile-sheet-option-icon' aria-hidden='true'>
                    <IconMoon size={24} />
                  </span>
                  <span className='mobile-sheet-option-label'>{t.nav.themeDark}</span>
                  <span className='mobile-sheet-option-check' aria-hidden='true'>
                    <IconCheck size={24} />
                  </span>
                </button>
              </div>
            ) : (
              <div className='mobile-sheet-options'>
                {LOCALES.map((option) => {
                  const selected = option === locale
                  return (
                    <button
                      key={option}
                      type='button'
                      className='mobile-sheet-option'
                      aria-pressed={selected}
                      onClick={() => setLocale(option)}>
                      <span className='mobile-sheet-option-icon is-code' aria-hidden='true'>
                        {option.toUpperCase()}
                      </span>
                      <span className='mobile-sheet-option-label'>{localeLabels[option]}</span>
                      <span className='mobile-sheet-option-check' aria-hidden='true'>
                        <IconCheck size={24} />
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </section>
        </div>
      ) : null}
    </>
  )
}

export default MobileControls
