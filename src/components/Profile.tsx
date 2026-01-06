import React from 'react'
import { animate, stagger } from 'animejs'

interface ProfileProps {
  imageUrl: string
  name: string
  bio: string
  subtitle: string
}

const skills = [
  // Highlighted Full-Stack Skills
  { emoji: '🍃', name: 'Spring Boot', category: 'fullstack', highlight: true },
  { emoji: '🚀', name: 'Next.js', category: 'fullstack', highlight: true },
  { emoji: '⚛️', name: 'React', category: 'fullstack', highlight: true },
  { emoji: '☕', name: 'Java', category: 'fullstack', highlight: true },
  { emoji: '⚡', name: 'TypeScript', category: 'fullstack', highlight: true },
  { emoji: '🐍', name: 'Python', category: 'backend', highlight: false },
  // RPA & AI
  { emoji: '🤖', name: 'UiPath Agentic AI', category: 'rpa', highlight: false },
  { emoji: '🧩', name: 'Copilot Studio', category: 'ai', highlight: false },
  { emoji: '🧱', name: 'Power Platform', category: 'platform', highlight: false },
  { emoji: '🧰', name: 'REFramework', category: 'rpa', highlight: false },
  { emoji: '✨', name: 'Generative AI', category: 'ai', highlight: false },
  // DevOps & Process
  { emoji: '🔗', name: 'REST APIs', category: 'backend', highlight: false },
  { emoji: '🐳', name: 'Docker', category: 'devops', highlight: false },
  { emoji: '🐱', name: 'GitHub', category: 'devops', highlight: false },
  { emoji: '🧭', name: 'Agile & Scrum', category: 'process', highlight: false },
  { emoji: '📋', name: 'JIRA', category: 'process', highlight: false },
]

export function Profile({ imageUrl, name, bio }: ProfileProps) {
  const profileRef = React.useRef<HTMLDivElement>(null)
  const skillsRef = React.useRef<HTMLDivElement>(null)
  const nameRef = React.useRef<HTMLHeadingElement>(null)
  const bioRef = React.useRef<HTMLParagraphElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)

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

    // Skills stagger animation from center
    if (skillsRef.current) {
      const badges = skillsRef.current.querySelectorAll('.skill-badge')
      animate(badges, {
        scale: [{ from: 0, to: 1 }],
        opacity: [{ from: 0, to: 1 }],
        translateY: [{ from: 20, to: 0 }],
        duration: 600,
        delay: stagger(50, { grid: [6, 3], from: 'center' }),
        ease: 'outBack',
      })
    }

    // About section slide up
    if (aboutRef.current) {
      animate(aboutRef.current, {
        translateY: [{ from: 60, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 1000,
        delay: 800,
        ease: 'outExpo',
      })
    }
  }, [])

  // Hover animation for skill badges
  const handleSkillHover = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1.1,
      duration: 300,
      ease: 'outBack',
    })
  }

  const handleSkillLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1,
      duration: 300,
      ease: 'outQuad',
    })
  }

  return (
    <section className='flex flex-col items-center text-center gap-6' aria-label='Profile Section'>
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

      {/* Skills Grid */}
      <div className='mt-4 w-full max-w-2xl'>
        <h2 className='text-sm font-semibold text-dark-400 uppercase tracking-widest mb-4 animate-fade-up delay-200'>
          Technologies & Skills
        </h2>
        <div ref={skillsRef} className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={handleSkillHover}
              onMouseLeave={handleSkillLeave}
              className={`skill-badge flex flex-col items-center p-3 cursor-default opacity-0 ${
                skill.highlight
                  ? 'bg-gradient-to-br from-primary-500/20 to-accent-cyan/10 border-primary-500/40 ring-1 ring-primary-500/20'
                  : ''
              }`}>
              <span className='text-2xl mb-1.5'>{skill.emoji}</span>
              <span
                className={`text-[10px] text-center font-medium leading-tight ${
                  skill.highlight ? 'text-primary-300' : 'text-dark-300'
                }`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className='mt-6 w-full max-w-2xl glass-card p-6 opacity-0'>
        <h2 className='text-sm font-semibold text-primary-400 uppercase tracking-widest mb-3 flex items-center gap-2'>
          <span className='w-8 h-[1px] bg-gradient-to-r from-primary-500 to-transparent'></span>
          About
          <span className='w-8 h-[1px] bg-gradient-to-l from-primary-500 to-transparent'></span>
        </h2>
        <p className='text-dark-300 text-sm md:text-base leading-relaxed'>
          Full-Stack Engineer specializing in building scalable web applications and enterprise
          solutions. I develop robust backends with{' '}
          <span className='text-accent-cyan font-medium'>Spring Boot</span> and{' '}
          <span className='text-primary-400 font-medium'>Java</span>, create performant frontends
          with <span className='text-accent-pink font-medium'>Next.js</span> and{' '}
          <span className='text-primary-400 font-medium'>React</span>, and leverage{' '}
          <span className='text-accent-cyan font-medium'>TypeScript</span> for type-safe code across
          the stack. Additionally, I build enterprise process automations using UiPath Agentic AI,
          Microsoft Copilot Studio and Power Platform, combining full-stack development with GenAI
          to deliver end-to-end solutions.
        </p>
      </div>
    </section>
  )
}
