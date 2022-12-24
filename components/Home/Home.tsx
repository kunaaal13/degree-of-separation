import React from 'react'
import UserCard from './UserCard'

interface Props {
  users: [User]
  setSelectedUser: (user: User | null) => void
  setSelectedMenu: (menu: string) => void
}

function Home({ users, setSelectedUser, setSelectedMenu }: Props) {
  return (
    <div className='h-full w-full overflow-scroll p-3 pb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {users.map((user) => (
          <UserCard
            key={user.username}
            user={user}
            setSelectedUser={setSelectedUser}
            setSelectedMenu={setSelectedMenu}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
