import React, { useEffect, useState } from 'react'

interface Props {
  user: User
  setSelectedUser: (user: User | null) => void
  setSelectedMenu: (menu: string) => void
}

function UserCard({ user, setSelectedUser, setSelectedMenu }: Props) {
  // Randomly generate active or inactive
  const [isActive, setIsActive] = useState<boolean>()

  useEffect(() => {
    // console.log('UserCard Rendered')
    setIsActive(Math.random() >= 0.5)
  }, [isActive])

  return (
    <div
      onClick={() => {
        setSelectedUser(user)
        setSelectedMenu('user')
      }}
      className='bg-gray-100 dark:bg-gray-700 dark:shadow-gray-700 rounded-md border shadow-md m-3 h-32 px-3 flex items-center'
    >
      {/* image */}
      <div className='h-20 w-20 rounded-full cursor-pointer'>
        <img
          src={user.img}
          alt={user.name}
          className='h-full w-full rounded-full'
        />
      </div>

      {/* Details */}
      <div className='ml-4 w-3/5 cursor-pointer'>
        <h1 className='text-lg md:text-xl font-semibold line-clamp-1'>
          {user.name}
        </h1>

        <p className='text-gray-500 text-sm dark:text-gray-200'>
          @{user.username}
        </p>

        <div className='flex items-center justify-between mt-2 cursor-pointer'>
          <p className=''>{user.friends.length} friends</p>

          <p className={`${isActive ? 'text-green-500' : 'text-red-500'}`}>
            {isActive ? 'Active' : 'Inactive'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
