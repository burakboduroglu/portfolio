import React from 'react'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`animated-gradient-text ${className}`}>
      {children}
    </span>
  )
}

// Hero style animated text
export function AnimatedHeroText() {
  return (
    <div className='text-center mb-4'>
      <h2 className='text-lg md:text-xl font-light text-dark-400 mb-2'>
        Hello, I'm
      </h2>
      <h1 className='text-4xl md:text-6xl font-black animated-gradient-text leading-tight'>
        Burak Boduroğlu
      </h1>
      <p className='mt-4 text-dark-300 text-base md:text-lg max-w-md mx-auto'>
        Crafting digital experiences with{' '}
        <span className='text-wise-green font-semibold'>code</span> and{' '}
        <span className='text-primary-400 font-semibold'>creativity</span>
      </p>
    </div>
  )
}
