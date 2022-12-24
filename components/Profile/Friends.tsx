import React from 'react'
import FriendsCard from './FriendsCard'

interface Props {
  user: User
  users: [User]
}

function Friends({ user, users }: Props) {
  return (
    <div className='py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {user.friends.map((friend, i) => (
        <FriendsCard key={i} name={friend} users={users} profile={user} />
      ))}
    </div>
  )
}

export default Friends
