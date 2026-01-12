import React from 'react'

const marqueeItems = [
  { text: 'Full-Stack Developer', emoji: '💻' },
  { text: 'Spring Boot', emoji: '🍃' },
  { text: 'React & Next.js', emoji: '⚛️' },
  { text: 'TypeScript', emoji: '⚡' },
  { text: 'RPA Automation', emoji: '🤖' },
  { text: 'UiPath Expert', emoji: '🎯' },
  { text: 'Java', emoji: '☕' },
  { text: 'Open to Work', emoji: '🚀' },
]

export function WiseMarquee() {
  return (
    <div className='wise-marquee-container overflow-hidden py-4 md:py-6'>
      <div className='wise-marquee flex'>
        {/* Double the items for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-2 md:gap-3 mx-4 md:mx-8 shrink-0'>
            <span className='text-xl md:text-2xl'>{item.emoji}</span>
            <span className='text-lg md:text-2xl font-bold text-white whitespace-nowrap'>
              {item.text}
            </span>
            <span className='text-wise-green text-2xl md:text-3xl font-black'>•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
