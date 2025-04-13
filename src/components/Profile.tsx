interface ProfileProps {
  imageUrl: string
  name: string
  bio: string
}

export function Profile({ imageUrl, name, bio }: ProfileProps) {
  return (
    <section className='flex flex-col items-center mb-4' aria-label='Profile Section'>
      <div className='relative'>
        <div
          className='absolute inset-0 bg-gradient-to-r from-[#1f1f37] via-[#2d2d5a] to-[#373777] 
                     rounded-full blur-md opacity-80 animate-pulse'
          role='presentation'
          aria-hidden='true'></div>
        <figure className='relative'>
          <div
            className='w-24 h-24 rounded-full p-[3px] bg-gradient-to-r from-[#1f1f37] via-[#2d2d5a] to-[#373777]
                       before:content-[""] before:absolute before:inset-0 
                       before:rounded-full before:p-[3px]
                       before:bg-gradient-to-r before:from-[#4a4a9c] before:via-[#6161b7] before:to-[#4a4a9c]
                       before:animate-border-glow before:blur-sm relative
                       shadow-lg shadow-[#1f1f37]'>
            <img
              src={imageUrl}
              alt={`Profile picture of ${name}`}
              className='w-full h-full rounded-full border-2 border-[#0B1925] object-cover relative z-10'
              loading='lazy'
              width='96'
              height='96'
            />
          </div>
          <figcaption className='sr-only'>Profile image of {name}</figcaption>
        </figure>
      </div>
      <header className='text-center'>
        <h1 className='text-white text-xl font-bold mb-2 mt-4'>{name}</h1>
        <p className='text-gray-400' role='doc-subtitle'>
          {bio}
        </p>
      </header>
    </section>
  )
}
