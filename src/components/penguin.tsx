import { useEffect, useRef, useState } from 'react'
import { IconHeart } from './icons'
import './penguin.css'

/**
 * A pixel penguin that waddles along the footer line. Hand-drawn, 16×16 cells,
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

/** Waddle: the upper body leans one cell, the far foot lifts against the belly */
function waddle(lean: -1 | 1): string[] {
  const shift = (row: string) =>
    lean > 0 ? `.${row.slice(0, -1)}` : `${row.slice(1)}.`
  return IDLE.map((row, y) => {
    if (y <= 7) return shift(row)
    if (y === 13) return lean > 0 ? '...ooookkkkk....' : '....kkkkkoooo...'
    if (y === 14) return lean > 0 ? '.........oooo...' : '...oooo.........'
    return row
  })
}

const FRAMES = {
  idle: IDLE,
  blink: IDLE.map((row, y) => (y === 5 ? row.replace(/e/g, 'w') : row)),
  left: waddle(-1),
  right: waddle(1),
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
  x: number
  dir: -1 | 1
  frame: Frame
  /** Ticks left standing still; 0 means walking */
  rest: number
  hop: number
  step: number
}

function next(state: State, maxX: number): State {
  if (state.hop > 0) {
    return { ...state, hop: state.hop - 1, frame: state.hop > 1 ? 'hop' : 'idle' }
  }

  if (state.rest > 0) {
    // Blink now and then while standing
    const frame: Frame = Math.random() < 0.08 ? 'blink' : 'idle'
    return { ...state, rest: state.rest - 1, frame }
  }

  const x = state.x + state.dir * CELL
  if (x <= 0 || x >= maxX) {
    // Reached an edge: stand a while, then turn back
    return {
      ...state,
      x: Math.max(0, Math.min(x, maxX)),
      dir: state.dir === 1 ? -1 : 1,
      rest: 18 + Math.floor(Math.random() * 24),
      frame: 'idle',
    }
  }

  // An occasional stop mid-walk reads as curiosity rather than a patrol route
  if (Math.random() < 0.012) {
    return { ...state, x, rest: 10 + Math.floor(Math.random() * 16), frame: 'idle' }
  }

  const step = state.step + 1
  return { ...state, x, step, frame: step % 2 === 0 ? 'left' : 'right' }
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
  const maxX = useRef(0)
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([])
  const [state, setState] = useState<State>({
    x: 0,
    dir: 1,
    frame: 'idle',
    rest: 12,
    hop: 0,
    step: 0,
  })

  // Track the walkable width, and start in the middle once it is known
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const measure = () => {
      const width = Math.max(0, strip.clientWidth - SIZE)
      maxX.current = width - (width % CELL)
      setState((s) => ({ ...s, x: Math.min(s.x, maxX.current) }))
    }

    measure()
    const middle = Math.round(maxX.current / 2 / CELL) * CELL
    setState((s) => ({ ...s, x: middle }))
    const resize = new ResizeObserver(measure)
    resize.observe(strip)

    const seen = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    seen.observe(strip)

    return () => {
      resize.disconnect()
      seen.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!visible || reduced) return

    const id = window.setInterval(() => {
      if (document.hidden) return
      setState((s) => next(s, maxX.current))
    }, TICK_MS)

    return () => window.clearInterval(id)
  }, [visible, reduced])

  const hop = () => {
    if (reduced) return
    setState((s) => ({ ...s, hop: HOP_TICKS, frame: 'hop' }))
    const id = Date.now()
    setHearts((list) => [...list.slice(-4), { id, x: state.x }])
    window.setTimeout(() => setHearts((list) => list.filter((h) => h.id !== id)), 1200)
  }

  const paths = PATHS[state.frame]
  const lift = state.frame === 'hop' ? -2 * CELL : 0

  return (
    <div ref={stripRef} className='penguin-strip' aria-hidden='true'>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className='penguin-heart'
          style={{ transform: `translateX(${heart.x + SIZE / 2 - 6}px)` }}>
          <IconHeart />
        </span>
      ))}
      <svg
        className='penguin'
        viewBox='0 0 16 16'
        width={SIZE}
        height={SIZE}
        shapeRendering='crispEdges'
        style={{ transform: `translate(${state.x}px, ${lift}px)` }}
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
