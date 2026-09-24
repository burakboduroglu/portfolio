import type { ComponentType, SVGProps } from 'react'
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Close,
  Code,
  Copy,
  ExternalLink,
  Figma,
  GitBranch,
  Github,
  Globe,
  Google,
  Grid2x22,
  Heart,
  InfoBox,
  Linkedin,
  Mail,
  Monitor,
  Moon,
  Npm,
  Star,
  Sun,
  Terminal,
  X,
  Youtube,
  ZoomIn,
} from 'pixelarticons/react'

/**
 * Every icon on the site is pixel art on a 24-unit grid drawn in 2-unit cells.
 * Render at multiples of 12px — anything else puts a cell edge mid-pixel and
 * the icon smears, which crispEdges only hides by making the rows uneven.
 */

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & { size?: number }
export type Icon = ComponentType<IconProps>

type SvgComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element

function pixel(Svg: SvgComponent): Icon {
  function PixelIcon({ size = 12, ...props }: IconProps) {
    return (
      <Svg
        width={size}
        height={size}
        shapeRendering='crispEdges'
        aria-hidden
        focusable='false'
        {...props}
      />
    )
  }
  return PixelIcon
}

export const IconArrowLeft = pixel(ArrowLeft)
export const IconCheck = pixel(Check)
export const IconChevronLeft = pixel(ChevronLeft)
export const IconChevronRight = pixel(ChevronRight)
export const IconClose = pixel(Close)
export const IconCode = pixel(Code)
export const IconCopy = pixel(Copy)
export const IconExternal = pixel(ExternalLink)
export const IconFork = pixel(GitBranch)
export const IconGlobe = pixel(Globe)
export const IconGrid = pixel(Grid2x22)
export const IconHeart = pixel(Heart)
export const IconInfo = pixel(InfoBox)
export const IconMail = pixel(Mail)
export const IconMonitor = pixel(Monitor)
export const IconMoon = pixel(Moon)
export const IconStar = pixel(Star)
export const IconSun = pixel(Sun)
export const IconTerminal = pixel(Terminal)
export const IconZoom = pixel(ZoomIn)

/**
 * Brand marks pixelarticons does not ship. Each row is one line of 2-unit
 * cells, `#` filled — hand-drawn from the brand's own logo at 12×12.
 */
const brandBitmaps = {
  aws: [
    '............',
    '............',
    '##..#...#.##',
    '.##.#...#.#.',
    '#.#.#.#.#..#',
    '.##..#.#..##',
    '............',
    '#.........##',
    '.##......#.#',
    '...######...',
    '............',
    '............',
  ],
  devto: [
    '............',
    '............',
    '............',
    '.##########.',
    '#..##..#.#.#',
    '#.#.#.##.#.#',
    '#.#.#..#.#.#',
    '#.#.#.###.##',
    '#..##..##.##',
    '.##########.',
    '............',
    '............',
  ],
  framer: [
    '..########..',
    '...#######..',
    '....######..',
    '.....#####..',
    '..#####.....',
    '..######....',
    '..#######...',
    '..########..',
    '..####......',
    '...###......',
    '....##......',
    '.....#......',
  ],
  higgsfield: [
    '............',
    '..###.......',
    '.#...#......',
    '.....#..##..',
    '....#..#..#.',
    '...#..#..#..',
    '..#..#..#...',
    '..#..#.#....',
    '...##..#.##.',
    '.......#.#.#',
    '........#...',
    '............',
  ],
  huggingface: [
    '............',
    '...######...',
    '..#......#..',
    '.#..#..#..#.',
    '.#........#.',
    '.#.######.#.',
    '.#..####..#.',
    '..#......#..',
    '#..######..#',
    '##........##',
    '.##......##.',
    '............',
  ],
  kick: [
    '............',
    '.###....###.',
    '.###...###..',
    '.###..###...',
    '.###.###....',
    '.######.....',
    '.######.....',
    '.###.###....',
    '.###..###...',
    '.###...###..',
    '.###....###.',
    '............',
  ],
  medium: [
    '............',
    '............',
    '............',
    '.###..##..#.',
    '#####.##..#.',
    '#####.##..#.',
    '#####.##..#.',
    '#####.##..#.',
    '.###..##..#.',
    '............',
    '............',
    '............',
  ],
  microsoft: [
    '............',
    '............',
    '.####.####..',
    '.####.####..',
    '.####.####..',
    '.####.####..',
    '............',
    '.####.####..',
    '.####.####..',
    '.####.####..',
    '.####.####..',
    '............',
  ],
  reddit: [
    '............',
    '.......##.#.',
    '.......#....',
    '....####....',
    '.##########.',
    '############',
    '###.####.###',
    '############',
    '.###....###.',
    '..########..',
    '....####....',
    '............',
  ],
  substack: [
    '............',
    '.##########.',
    '............',
    '.##########.',
    '............',
    '.##########.',
    '.##########.',
    '.##########.',
    '.##########.',
    '.####..####.',
    '.##......##.',
    '............',
  ],
  suno: [
    '............',
    '......###...',
    '.....#####..',
    '....#######.',
    '....#######.',
    '############',
    '############',
    '.#######....',
    '.#######....',
    '..#####.....',
    '...###......',
    '............',
  ],
} satisfies Record<string, string[]>

/** One `M…z` rectangle per horizontal run of filled cells */
function bitmapPath(rows: string[]): string {
  let d = ''
  rows.forEach((row, y) => {
    for (const run of row.matchAll(/#+/g)) {
      const w = run[0].length * 2
      d += `M${(run.index ?? 0) * 2} ${y * 2}h${w}v2h-${w}z`
    }
  })
  return d
}

function bitmap(rows: string[]): Icon {
  const d = bitmapPath(rows)
  function BitmapIcon({ size = 12, ...props }: IconProps) {
    return (
      <svg
        viewBox='0 0 24 24'
        width={size}
        height={size}
        fill='currentColor'
        shapeRendering='crispEdges'
        aria-hidden
        focusable='false'
        {...props}>
        <path d={d} />
      </svg>
    )
  }
  return BitmapIcon
}

const brandIcons: Record<string, Icon> = {
  mail: IconMail,
  github: pixel(Github),
  linkedin: pixel(Linkedin),
  x: pixel(X),
  youtube: pixel(Youtube),
  figma: pixel(Figma),
  npm: pixel(Npm),
  gdev: pixel(Google),
  aws: bitmap(brandBitmaps.aws),
  devto: bitmap(brandBitmaps.devto),
  framer: bitmap(brandBitmaps.framer),
  higgsfield: bitmap(brandBitmaps.higgsfield),
  huggingface: bitmap(brandBitmaps.huggingface),
  kick: bitmap(brandBitmaps.kick),
  medium: bitmap(brandBitmaps.medium),
  microsoft: bitmap(brandBitmaps.microsoft),
  reddit: bitmap(brandBitmaps.reddit),
  substack: bitmap(brandBitmaps.substack),
  suno: bitmap(brandBitmaps.suno),
}

/** Contact and developer-profile marks, looked up by the `icon` in profile.ts */
export function BrandIcon({ name, ...props }: IconProps & { name: string }) {
  const Component = brandIcons[name]
  return Component ? <Component {...props} /> : null
}
