import { CheckBadgeIcon, TrashIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { removeFriend } from '../../../utils/map'
import { createNetwork } from '../../../utils/network'

interface Props {
  name: string
  users: [User]
  profile: User
}

function FriendsCard({ name, users, profile }: Props) {
  // state to manage the user
  const [user, setUser] = useState<User | null>(null)

  // state to manage the user index
  const [userIndex, setUserIndex] = useState<number>(-1)

  // state to manage if the friend is removed
  const [deleted, setDeleted] = useState<boolean>(false)

  // handle delete friend
  const handleDelete = () => {
    // Create the network of the users
    const network = createNetwork(users)

    // Remove the user from the network
    removeFriend(network, name, profile.username)

    // Update the users
    let index = -1
    users.forEach((user, i) => {
      if (user.username === profile.username) {
        index = i
      }
    })

    if (index !== -1) {
      let newUser = users[index]

      // Remove the friend from the user
      let newFriends = newUser.friends.filter((friend) => friend !== name)
      users[index].friends = newFriends

      // Update the user
      newUser = users[userIndex]
      newFriends = newUser.friends.filter(
        (friend) => friend !== profile.username
      )
      users[userIndex].friends = newFriends

      setDeleted(true)
    }
  }

  // Get the user on initial render and on changes
  useEffect(() => {
    let index = -1
    users.forEach((user, i) => {
      if (user.username === name) {
        index = i
      }
    })

    if (index !== -1) {
      setUser(users[index])
      setUserIndex(index)
    }
  }, [user, name, users])

  if (!user) return null

  return (
    <div className='bg-gray-100 dark:bg-gray-700 dark:shadow-gray-700 rounded-md border shadow-md m-3 h-32 px-3 flex items-center'>
      {/* image */}
      <div className='h-20 rounded-full'>
        <img
          src={user.img}
          alt={user.name}
          className='h-full w-full rounded-full cursor-pointer'
        />
      </div>

      {/* Details */}
      <div className='ml-4 flex-1'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg md:text-xl font-semibold line-clamp-1'>
            {user.name}
          </h1>

          {!deleted ? (
            <TrashIcon
              onClick={() => {
                handleDelete()
              }}
              className='h-5 text-red-500 cursor-pointer'
            />
          ) : (
            <CheckBadgeIcon className='h-5 text-green-400 cursor-pointer' />
          )}
        </div>

        <p className='text-gray-500 dark:text-gray-200 text-sm'>
          @{user.username}
        </p>

        <div className='flex items-center justify-between mt-2'>
          <p className=''>{user.friends.length} friends</p>
        </div>
      </div>
    </div>
  )
}

export default FriendsCard
