import React from 'react'
import { animate, stagger, utils } from 'animejs'
import { initialLinks } from './lib/links'
import { LinkItem } from './types/link'
import { Profile } from './components/Profile'
import { LinkGrid } from './components/LinkGrid'
import { Footer } from './components/Footer'
import { Terminal } from './components/Terminal'
import { AnimatedStats } from './components/AnimatedStats'
import { BubbleNav } from './components/BubbleNav'
import { WiseMarquee } from './components/WiseMarquee'
import { WiseBentoGrid } from './components/WiseBentoGrid'
import { ScrollProgress } from './components/ScrollProgress'
import { StatusBadge } from './components/StatusBadge'
import { EasterEgg } from './components/EasterEgg'
import { FloatingActionButton } from './components/FloatingActionButton'
import { SpotifyEmbed } from './components/SpotifyEmbed'
import { Toaster } from 'react-hot-toast'

// Floating shapes component with anime.js
function FloatingShapes() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!containerRef.current) return

    const shapes = containerRef.current.querySelectorAll('.floating-shape')

    shapes.forEach((shape, i) => {
      const randomX = Math.random() * 100
      const randomY = Math.random() * 100
      ;(shape as HTMLElement).style.left = `${randomX}%`
      ;(shape as HTMLElement).style.top = `${randomY}%`

      // Create unique floating animation for each shape
      animate(shape, {
        translateX: [{ to: utils.random(-100, 100) }, { to: utils.random(-100, 100) }, { to: 0 }],
        translateY: [{ to: utils.random(-100, 100) }, { to: utils.random(-100, 100) }, { to: 0 }],
        rotate: [{ to: utils.random(-180, 180) }, { to: 0 }],
        scale: [{ to: utils.random(0.8, 1.2) }, { to: 1 }],
        opacity: [{ to: utils.random(0.4, 0.7) }, { to: 0.3 }],
        duration: utils.random(8000, 15000),
        delay: i * 200,
        ease: 'inOutQuad',
        loop: true,
        alternate: true,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
      {/* Geometric shapes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`floating-shape absolute ${
            i % 3 === 0
              ? 'w-32 h-32 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent'
              : i % 3 === 1
              ? 'w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan/15 to-transparent rotate-45'
              : 'w-20 h-20 rounded-full border border-accent-pink/20'
          }`}
          style={{
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Glowing dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className='floating-shape absolute w-1 h-1 rounded-full bg-primary-400/60'
          style={{
            boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
          }}
        />
      ))}
    </div>
  )
}

// Animated grid lines
function GridLines() {
  const gridRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!gridRef.current) return

    const lines = gridRef.current.querySelectorAll('.grid-line')

    animate(lines, {
      opacity: [{ to: 0.15 }, { to: 0 }],
      duration: 4000,
      delay: stagger(200, { from: 'center' }),
      ease: 'inOutSine',
      loop: true,
    })
  }, [])

  return (
    <div
      ref={gridRef}
      className='fixed inset-0 pointer-events-none z-0'
      style={{
        perspective: '1000px',
        perspectiveOrigin: '50% 50%',
      }}>
      {/* Horizontal lines */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`h-${i}`}
          className='grid-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0'
          style={{ top: `${10 + i * 10}%` }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`v-${i}`}
          className='grid-line absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-cyan/20 to-transparent opacity-0'
          style={{ left: `${10 + i * 10}%` }}
        />
      ))}
    </div>
  )
}

function App() {
  const [links, setLinks] = React.useState<LinkItem[]>(() => {
    const savedViews = localStorage.getItem('linkViews')
    if (savedViews) {
      const savedLinks = JSON.parse(savedViews)
      return initialLinks.map((link) => ({
        ...link,
        views: savedLinks[link.id] || 0,
      }))
    }
    return initialLinks
  })

  const handleLinkClick = (id: string) => {
    setLinks((prevLinks) => {
      const newLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, views: link.views + 1 } : link
      )

      const viewsObject = newLinks.reduce(
        (acc, link) => ({
          ...acc,
          [link.id]: link.views,
        }),
        {}
      )
      localStorage.setItem('linkViews', JSON.stringify(viewsObject))

      return newLinks
    })
  }

  return (
    <>
      <Toaster />
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Status Badge - Available for Work */}
      <StatusBadge />
      
      {/* Easter Egg - Konami Code */}
      <EasterEgg />
      
      {/* Floating Action Button */}
      <FloatingActionButton />
      
      <div className='bg-animated-gradient min-h-screen relative overflow-hidden'>
        {/* Animated background elements */}
        <GridLines />
        <FloatingShapes />

        {/* Original orbs */}
        <div className='orb orb-1' aria-hidden='true'></div>
        <div className='orb orb-2' aria-hidden='true'></div>
        <div className='orb orb-3' aria-hidden='true'></div>

        {/* Noise texture overlay */}
        <div
          className='fixed inset-0 pointer-events-none opacity-[0.02] z-10'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden='true'
        />

        {/* Bubble Navigation */}
        <BubbleNav />

        <main className='relative z-20 min-h-screen flex flex-col' role='main'>
          {/* Profile Section */}
          <section id='profile' className='px-4 sm:px-6 pt-12 pb-8'>
            <div className='w-full max-w-2xl mx-auto'>
              <Profile
                imageUrl='https://avatars.githubusercontent.com/u/80620802?s=400&u=9932e501d5c723936e92da977ac3fb7691417f73&v=4'
                name='Burak Boduroğlu'
                bio='Full-Stack Engineer & RPA Developer'
                subtitle=''
              />
            </div>
          </section>

          {/* Wise Marquee - Inspired by wise.design */}
          <WiseMarquee />

          {/* Terminal Section */}
          <section id='terminal' className='px-4 sm:px-6 py-8'>
            <div className='w-full max-w-2xl mx-auto'>
              <Terminal />
            </div>
          </section>

          {/* Bento Grid - Wise Style */}
          <section className='px-4 sm:px-6 py-8'>
            <WiseBentoGrid />
          </section>

          {/* Links Section */}
          <section id='links' className='px-4 sm:px-6 py-8'>
            <div className='w-full max-w-2xl mx-auto'>
              <LinkGrid links={links} onLinkClick={handleLinkClick} />
            </div>
          </section>

          {/* Podcast Section */}
          <section id='podcast' className='px-4 sm:px-6 py-8'>
            <SpotifyEmbed />
          </section>

          {/* Stats Section */}
          <section id='stats' className='section-spacing px-4 sm:px-6'>
            <AnimatedStats />
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
