import {
  CheckBadgeIcon,
  CheckCircleIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { addFriend, getAllMutualPaths, getShortestPath } from '../../utils/map'
import { createNetwork } from '../../utils/network'

interface Props {
  suggestion: User
  user: User
  users: [User]
}

function SuggestionCard({ suggestion, user, users }: Props) {
  const network = createNetwork(users)
  const [added, setAdded] = useState<boolean>(false)

  // Get all mutual paths
  const paths = getAllMutualPaths(network, user.username, suggestion.username)

  // Sort paths by length and get the first 3
  const arr = paths.sort((a, b) => a.length - b.length).slice(0, 3)

  // Map over the paths and join them with '->'
  const pathsArr = arr.map((path) => {
    return path.join(' -> ')
  })

  const handleConnect = () => {
    addFriend(network, user.username, suggestion.username)
    console.log(network)

    // Add to users array
    user.friends.push(suggestion.username)

    // add to friends array
    suggestion.friends.push(user.username)

    console.log(user.friends)

    setAdded(true)
  }

  useEffect(() => {}, [users, users, network])

  return (
    <div className='bg-gray-100 rounded-md border shadow-md mx-2 my-2 min-h-[160px] px-3 flex items-center'>
      {/* image */}
      <div className='h-20 rounded-full'>
        <img
          src={suggestion.img}
          alt={suggestion.name}
          className='h-full w-full rounded-full cursor-pointer'
        />
      </div>

      {/* Details */}
      <div className='ml-4 flex-1'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg md:text-xl font-semibold line-clamp-1'>
            {suggestion.name}
          </h1>

          {!added ? (
            <UserPlusIcon
              onClick={() => {
                handleConnect()
              }}
              className='h-6 w-6 text-blue-500 cursor-pointer'
            />
          ) : (
            <CheckBadgeIcon className='h-6 w-6 text-green-500 cursor-pointer' />
          )}
        </div>

        <p className='text-gray-500 text-sm'>@{suggestion.username}</p>

        <div className='mt-2'>
          {pathsArr.map((path, i) => (
            <p key={i} className='text-xs text-gray-500'>
              {i + 1}. {path}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuggestionCard
