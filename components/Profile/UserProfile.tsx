import React from 'react'

interface Props {
  user: User | null
}

function UserProfile({ user }: Props) {
  if (!user) return null

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full md:w-2/3 h-36 bg-gray-100 rounded-md shadow-md p-4 flex items-center'>
        {/* Image */}
        <div className='h-24 w-24 rounded-full'>
          <img
            src={user.img}
            alt={user.name}
            className='h-full w-full rounded-full cursor-pointer'
          />
        </div>

        {/* Details */}
        <div className='ml-10 flex-1'>
          <h1 className='text-lg md:text-xl font-semibold line-clamp-1'>
            {user.name}
          </h1>

          <p className='text-gray-500 text-xs'>@{user.username}</p>

          <p className='line-clamp-1 md:line-clamp-2 text-sm mt-1'>
            {user.bio}
          </p>

          <div className='flex items-center justify-between mt-2'>
            <p className=''>{user.friends.length} friends</p>

            <p className='text-green-500'>Active</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
