interface ProfileProps {
  imageUrl: string
  name: string
  bio: string
}

export function Profile({ imageUrl, name, bio }: ProfileProps) {
  return (
    <div className='flex flex-col items-center mb-5'>
      <img
        src={imageUrl}
        alt='Profile'
        className='w-24 h-24 rounded-full mb-3 border-2 border-white'
      />
      <h1 className='text-2xl font-bold text-white mb-2'>{name}</h1>
      <p className='text-gray-400 text-center mb-4 text-lg'>{bio}</p>
    </div>
  )
}
