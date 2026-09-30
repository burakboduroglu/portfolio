import { useEffect, useRef, useState } from 'react'
import { IconHeart } from './icons'
import './penguin.css'

/**
 * A pixel penguin that stays centered on the footer line. Hand-drawn, 16×16 cells,
 * in the same bitmap idiom as the brand marks in ./icons — `k` body, `w` belly,
 * `o` beak and feet, `e` eyes. Each frame compiles to one path per colour.
 *
 * Purely decorative: aria-hidden, not focusable. A click makes it hop and send
 * up a heart. It stops ticking while off screen or in a background tab, and
 * stands still for anyone who prefers reduced motion.
 */

const IDLE = [
  '................',
  '......kkkk......',
  '....kkkkkkkk....',
  '...kkkkkkkkkk...',
  '...kkwwkkwwkk...',
  '..kkwewwwwewkk..',
  '..kkwwwoowwwkk..',
  '..kkkwwwwwwkkk..',
  '.kkkwwwwwwwwkkk.',
  'kk.kwwwwwwwwk.kk',
  'k..kwwwwwwwwk..k',
  '...kwwwwwwwwk...',
  '...kkwwwwwwkk...',
  '....kkkkkkkk....',
  '...oooo..oooo...',
  '................',
]

const FRAMES = {
  idle: IDLE,
  blink: IDLE.map((row, y) => (y === 5 ? row.replace(/e/g, 'w') : row)),
  hop: [
    '......kkkk......',
    '....kkkkkkkk....',
    '...kkkkkkkkkk...',
    '...kkwwkkwwkk...',
    '..kkwewwwwewkk..',
    'k.kkwwwoowwwkk.k',
    'kkkkkwwwwwwkkkkk',
    '.kkkwwwwwwwwkkk.',
    '...kwwwwwwwwk...',
    '...kwwwwwwwwk...',
    '...kwwwwwwwwk...',
    '...kkwwwwwwkk...',
    '....kkkkkkkk....',
    '....ooo..ooo....',
    '................',
    '................',
  ],
} satisfies Record<string, string[]>

type Frame = keyof typeof FRAMES

const INKS = ['k', 'w', 'o', 'e'] as const

/** One `M…z` run per horizontal stretch of a colour, grouped by colour */
function compile(rows: string[]): Record<(typeof INKS)[number], string> {
  const out = { k: '', w: '', o: '', e: '' }
  rows.forEach((row, y) => {
    for (const run of row.matchAll(/([kwoe])\1*/g)) {
      const w = run[0].length
      out[run[1] as keyof typeof out] += `M${run.index ?? 0} ${y}h${w}v1h-${w}z`
    }
  })
  return out
}

const PATHS = Object.fromEntries(
  Object.entries(FRAMES).map(([name, rows]) => [name, compile(rows)])
) as Record<Frame, ReturnType<typeof compile>>

/** One screen pixel per cell times this — 16 cells at 3px is a 48px penguin */
const CELL = 3
const SIZE = 16 * CELL
const TICK_MS = 160
const HOP_TICKS = 4

type State = {
  frame: Frame
  hop: number
}

function next(state: State): State {
  if (state.hop > 0) {
    return { hop: state.hop - 1, frame: state.hop > 1 ? 'hop' : 'idle' }
  }

  return { ...state, frame: Math.random() < 0.08 ? 'blink' : 'idle' }
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  )

  useEffect(() => {
    const query = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!query) return
    const update = () => setReduced(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return reduced
}

function Penguin() {
  const stripRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)
  const [hearts, setHearts] = useState<number[]>([])
  const [state, setState] = useState<State>({
    frame: 'idle',
    hop: 0,
  })

  // Pause decorative blinking and hopping whenever the footer is off screen.
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const seen = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    seen.observe(strip)

    return () => seen.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || reduced) return

    const id = window.setInterval(() => {
      if (document.hidden) return
      setState((s) => next(s))
    }, TICK_MS)

    return () => window.clearInterval(id)
  }, [visible, reduced])

  const hop = () => {
    if (reduced) return
    setState((s) => ({ ...s, hop: HOP_TICKS, frame: 'hop' }))
    const id = Date.now()
    setHearts((list) => [...list.slice(-4), id])
    window.setTimeout(() => setHearts((list) => list.filter((h) => h !== id)), 1200)
  }

  const paths = PATHS[state.frame]
  const lift = state.frame === 'hop' ? -2 * CELL : 0

  return (
    <div ref={stripRef} className='penguin-strip' aria-hidden='true'>
      {hearts.map((heart) => (
        <span key={heart} className='penguin-heart'>
          <IconHeart />
        </span>
      ))}
      <svg
        className='penguin'
        viewBox='0 0 16 16'
        width={SIZE}
        height={SIZE}
        shapeRendering='crispEdges'
        style={{ transform: `translate(-50%, ${lift}px)` }}
        onClick={hop}>
        <path className='penguin-body' d={paths.k} />
        <path className='penguin-belly' d={paths.w} />
        <path className='penguin-beak' d={paths.o} />
        <path className='penguin-eye' d={paths.e} />
      </svg>
    </div>
  )
}

export default Penguin
