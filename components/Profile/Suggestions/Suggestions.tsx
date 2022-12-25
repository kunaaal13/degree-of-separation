import React, { useEffect } from 'react'
import SuggestionCard from './SuggestionCard'

interface Props {
  user: User
  users: [User]
}

function Suggestions({ user, users }: Props) {
  // create a set of friends
  const set: Set<String> = new Set(user.friends)

  // Filter out suggestions i.e users who are not friends and not the user
  const suggestions = users.filter((u) => {
    return !set.has(u.username) && u.username !== user.username
  })

  return (
    <div className='py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {suggestions.map((suggestion, i) => (
        <SuggestionCard
          key={i}
          suggestion={suggestion}
          user={user}
          users={users}
        />
      ))}
    </div>
  )
}

export default Suggestions
