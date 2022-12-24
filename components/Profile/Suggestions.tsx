import React, { useEffect } from 'react'
import SuggestionCard from './SuggestionCard'

interface Props {
  user: User
  users: [User]
}

function Suggestions({ user, users }: Props) {
  const set: Set<String> = new Set(user.friends)

  const suggestions = users.filter((u) => {
    return !set.has(u.username) && u.username !== user.username
  })

  console.log(suggestions)

  function handleConnectParent(friend: String) {}

  useEffect(() => {}, [users])

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
