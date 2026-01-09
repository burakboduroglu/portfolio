import React from 'react'
import { animate, stagger } from 'animejs'
import {
  SpringBootIcon,
  NextJsIcon,
  ReactIcon,
  JavaIcon,
  TypeScriptIcon,
  PythonIcon,
  DockerIcon,
  PostgreSQLIcon,
  GitHubIcon,
  UiPathIcon,
  MicrosoftIcon,
  JiraIcon,
  AgileIcon,
  ApiIcon,
  AIIcon,
  PowerPlatformIcon,
} from './TechIcons'

interface ProfileProps {
  imageUrl: string
  name: string
  bio: string
  subtitle: string
  children?: React.ReactNode
}

// Skills with real technology SVG icons - organized in rows of 4 for symmetry
const skillRows = [
  // Row 1 - Full-Stack Highlighted
  [
    { name: 'Spring Boot', Icon: SpringBootIcon, highlight: true, color: 'text-green-500' },
    { name: 'Next.js', Icon: NextJsIcon, highlight: true, color: 'text-white' },
    { name: 'React', Icon: ReactIcon, highlight: true, color: 'text-cyan-400' },
    { name: 'Java', Icon: JavaIcon, highlight: true, color: 'text-red-500' },
  ],
  // Row 2 - Full-Stack Highlighted
  [
    { name: 'TypeScript', Icon: TypeScriptIcon, highlight: true, color: 'text-blue-500' },
    { name: 'Python', Icon: PythonIcon, highlight: false, color: 'text-yellow-400' },
    { name: 'REST APIs', Icon: ApiIcon, highlight: false, color: 'text-purple-400' },
    { name: 'Docker', Icon: DockerIcon, highlight: false, color: 'text-blue-400' },
  ],
  // Row 3 - RPA & AI
  [
    { name: 'UiPath', Icon: UiPathIcon, highlight: false, color: 'text-orange-500' },
    { name: 'Copilot Studio', Icon: MicrosoftIcon, highlight: false, color: 'text-cyan-400' },
    { name: 'Power Platform', Icon: PowerPlatformIcon, highlight: false, color: 'text-purple-500' },
    { name: 'Generative AI', Icon: AIIcon, highlight: false, color: 'text-pink-400' },
  ],
  // Row 4 - DevOps & Process
  [
    { name: 'PostgreSQL', Icon: PostgreSQLIcon, highlight: false, color: 'text-sky-400' },
    { name: 'GitHub', Icon: GitHubIcon, highlight: false, color: 'text-white' },
    { name: 'Agile', Icon: AgileIcon, highlight: false, color: 'text-green-500' },
    { name: 'JIRA', Icon: JiraIcon, highlight: false, color: 'text-blue-500' },
  ],
]

export function Profile({ imageUrl, name, bio, children }: ProfileProps) {
  const profileRef = React.useRef<HTMLDivElement>(null)
  const skillsRef = React.useRef<HTMLDivElement>(null)
  const nameRef = React.useRef<HTMLHeadingElement>(null)
  const bioRef = React.useRef<HTMLParagraphElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const terminalRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    // Profile image entrance animation
    if (profileRef.current) {
      animate(profileRef.current, {
        scale: [{ from: 0, to: 1 }],
        rotate: [{ from: '-10deg', to: '0deg' }],
        opacity: [{ from: 0, to: 1 }],
        duration: 1200,
        ease: 'outElastic(1, 0.6)',
      })
    }

    // Name text reveal animation
    if (nameRef.current) {
      animate(nameRef.current, {
        translateY: [{ from: 30, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 1000,
        delay: 300,
        ease: 'outExpo',
      })
    }

    // Bio animation
    if (bioRef.current) {
      animate(bioRef.current, {
        translateY: [{ from: 20, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 800,
        delay: 600,
        ease: 'outExpo',
      })
    }

    // Skills stagger animation - row by row
    if (skillsRef.current) {
      const badges = skillsRef.current.querySelectorAll('.skill-badge')
      animate(badges, {
        scale: [{ from: 0.8, to: 1 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 500,
        delay: stagger(60, { start: 400 }),
        ease: 'outBack',
      })
    }

    // Terminal animation
    if (terminalRef.current) {
      animate(terminalRef.current, {
        translateY: [{ from: 40, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 800,
        delay: 700,
        ease: 'outExpo',
      })
    }

    // About section slide up
    if (aboutRef.current) {
      animate(aboutRef.current, {
        translateY: [{ from: 60, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 1000,
        delay: 900,
        ease: 'outExpo',
      })
    }
  }, [])

  // Hover animation for skill badges
  const handleSkillHover = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1.08,
      translateY: -4,
      duration: 250,
      ease: 'outBack',
    })
  }

  const handleSkillLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1,
      translateY: 0,
      duration: 250,
      ease: 'outQuad',
    })
  }

  return (
    <section className='flex flex-col items-center text-center gap-8' aria-label='Profile Section'>
      {/* Profile Image with Animated Gradient Border */}
      <div ref={profileRef} className='opacity-0'>
        <div className='gradient-border profile-glow'>
          <div className='gradient-border-inner'>
            <img
              src={imageUrl}
              alt={`Profile picture of ${name}`}
              className='w-28 h-28 rounded-full object-cover'
              loading='lazy'
              width='112'
              height='112'
            />
          </div>
        </div>
      </div>

      {/* Name and Bio */}
      <div>
        <h1
          ref={nameRef}
          className='text-3xl md:text-4xl font-bold text-gradient-primary mb-2 opacity-0'>
          {name}
        </h1>
        <p ref={bioRef} className='text-dark-300 text-lg font-light tracking-wide opacity-0'>
          {bio}
        </p>
      </div>

      {/* Skills Grid - Symmetric 4x4 Layout with Real Logos */}
      <div className='w-full max-w-xl'>
        <h2 className='text-xs font-semibold text-dark-400 uppercase tracking-widest mb-5 flex items-center justify-center gap-3'>
          <span className='w-12 h-[1px] bg-gradient-to-r from-transparent to-primary-500/50'></span>
          Tech Stack
          <span className='w-12 h-[1px] bg-gradient-to-l from-transparent to-primary-500/50'></span>
        </h2>
        <div ref={skillsRef} className='space-y-3'>
          {skillRows.map((row, rowIndex) => (
            <div key={rowIndex} className='grid grid-cols-4 gap-3'>
              {row.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={handleSkillHover}
                  onMouseLeave={handleSkillLeave}
                  className={`skill-badge flex flex-col items-center justify-center p-3 cursor-default opacity-0 rounded-xl transition-colors ${
                    skill.highlight
                      ? 'bg-gradient-to-br from-primary-500/15 to-accent-cyan/10 border border-primary-500/30'
                      : 'bg-dark-800/40 border border-dark-700/50 hover:border-dark-600/70'
                  }`}>
                  <skill.Icon className={`w-6 h-6 mb-2 ${skill.color}`} />
                  <span
                    className={`text-[10px] font-medium leading-tight ${
                      skill.highlight ? 'text-dark-200' : 'text-dark-400'
                    }`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Children (Terminal) - Centered and Larger */}
      {children && (
        <div ref={terminalRef} className='w-full max-w-2xl opacity-0'>
          {children}
        </div>
      )}

      {/* About Section */}
      <div ref={aboutRef} className='w-full max-w-2xl glass-card p-6 md:p-8 opacity-0'>
        <h2 className='text-xs font-semibold text-primary-400 uppercase tracking-widest mb-5 flex items-center justify-center gap-3'>
          <span className='w-12 h-[1px] bg-gradient-to-r from-transparent to-primary-500'></span>
          About
          <span className='w-12 h-[1px] bg-gradient-to-l from-transparent to-primary-500'></span>
        </h2>
        <div className='text-dark-300 text-sm md:text-base leading-relaxed space-y-3'>
          <p>
            Full-Stack Engineer specializing in building scalable web applications and enterprise
            solutions.
          </p>
          <p>
            I develop robust backends with{' '}
            <span className='text-green-400 font-medium'>Spring Boot</span> &{' '}
            <span className='text-orange-400 font-medium'>Java</span>, create performant frontends
            with <span className='text-white font-medium'>Next.js</span> &{' '}
            <span className='text-cyan-400 font-medium'>React</span>, and leverage{' '}
            <span className='text-blue-400 font-medium'>TypeScript</span> for type-safe code.
          </p>
          <p>
            I also build enterprise automations using{' '}
            <span className='text-orange-500 font-medium'>UiPath</span>,{' '}
            <span className='text-cyan-400 font-medium'>Microsoft Copilot Studio</span> &{' '}
            <span className='text-purple-400 font-medium'>Power Platform</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
