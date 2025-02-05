interface ProfileProps {
  imageUrl: string
  name: string
  bio: string
}

export function Profile({ imageUrl, name, bio }: ProfileProps) {
  return (
    <div className='flex flex-col items-center mb-4'>
      <div className='relative'>
        <div
          className='absolute inset-0 bg-gradient-to-r from-[#1f1f37] via-[#2d2d5a] to-[#373777] 
                       rounded-full blur-md opacity-70 animate-pulse'></div>
        <div className='relative'>
          <div className='w-24 h-24 rounded-full p-[2px] bg-gradient-to-r from-[#1f1f37] via-[#2d2d5a] to-[#373777]'>
            <img
              src={imageUrl}
              alt={name}
              className='w-full h-full rounded-full border-2 border-[#0B1925] object-cover'
            />
          </div>
        </div>
      </div>
      <h1 className='text-white text-xl font-bold mb-2 mt-4'>{name}</h1>
      <p className='text-gray-400 text-center'>{bio}</p>
    </div>
  )
}
