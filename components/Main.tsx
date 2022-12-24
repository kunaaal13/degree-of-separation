import React, { useState } from 'react'
import Home from './Home/Home'
import Menu from './Menu'
import Profile from './Profile/Profile'

interface Props {
  users: [User]
  setUsers: (users: [User]) => void
}

function Main({ users, setUsers }: Props) {
  const [selectedMenu, setSelectedMenu] = useState('home')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <div className='w-full h-full'>
      <Menu
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        setSelectedUser={setSelectedUser}
      />

      <main className='w-full h-full p-2 pb-20'>
        {selectedMenu === 'home' && (
          <Home
            users={users}
            setSelectedUser={setSelectedUser}
            setSelectedMenu={setSelectedMenu}
          />
        )}

        {selectedMenu === 'new user' && <div>New User</div>}

        {selectedMenu === 'user' && (
          <Profile user={selectedUser} users={users} />
        )}
      </main>
    </div>
  )
}

export default Main
