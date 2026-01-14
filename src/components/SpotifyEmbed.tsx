import React from 'react'

export function SpotifyEmbed() {
  return (
    <section className='w-full max-w-2xl mx-auto'>
      <h2 className='text-xs font-semibold text-dark-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-3'>
        <span className='w-12 h-[1px] bg-gradient-to-r from-transparent to-wise-green/50'></span>
        Podcast
        <span className='w-12 h-[1px] bg-gradient-to-l from-transparent to-wise-green/50'></span>
      </h2>

      <div className='glass-card p-3 md:p-4 border border-wise-green/20'>
        <iframe
          data-testid='embed-iframe'
          style={{ borderRadius: 12 }}
          src='https://open.spotify.com/embed/show/5aiEpFATiyDQIlfAbEHkpH?utm_source=generator'
          width='100%'
          height='352'
          frameBorder={0}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          allowFullScreen
          loading='lazy'
          title='Spotify podcast player'
        />
      </div>
    </section>
  )
}

