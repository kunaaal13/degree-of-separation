import { HomeIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface Props {
  selectedMenu: string
  setSelectedMenu: (menu: string) => void
  setSelectedUser: (user: User | null) => void
}

function Menu({ selectedMenu, setSelectedMenu, setSelectedUser }: Props) {
  return (
    <div className='h-12 bg-white dark:bg-transparent border-b shadow-md p-3 flex items-center justify-center'>
      <div className='h-full w-2/3 md:w-3/5 flex items-center justify-evenly'>
        <HomeIcon
          className={`${
            selectedMenu === 'home'
              ? 'text-[#2e89ff]'
              : 'text-[#b0b3b8] hover:text-gray-500'
          } h-8 w-8 cursor-pointer`}
          onClick={() => {
            setSelectedMenu('home')
            setSelectedUser(null)
          }}
        />

        <UserPlusIcon
          className={`${
            selectedMenu === 'new user'
              ? 'text-[#2e89ff]'
              : 'text-[#b0b3b8] hover:text-gray-500'
          } h-8 w-8 cursor-pointer`}
          onClick={() => {
            setSelectedMenu('new user')
            setSelectedUser(null)
          }}
        />
      </div>
    </div>
  )
}

export default Menu
