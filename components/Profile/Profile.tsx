import React, { useState } from 'react'
import Friends from './Friends'
import ProfileOption from './ProfileOption'
import Suggestions from './Suggestions'
import UserProfile from './UserProfile'

interface Props {
  user: User | null
  users: [User]
}

function Profile({ user, users }: Props) {
  const [selectedOption, setSelectedOption] = useState<String>('Friends')

  if (!user) return null

  return (
    <div className='h-full w-full overflow-scroll p-3 pb-10'>
      {/* User Profile */}
      <UserProfile user={user} />

      <div className='my-5'>
        {/* Options */}
        <div className='flex items-center space-x-3'>
          {/* Friends */}
          <ProfileOption
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            value='Friends'
          />
          <ProfileOption
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            value='Suggestions'
          />
        </div>

        {selectedOption === 'Friends' && <Friends user={user} users={users} />}

        {selectedOption === 'Suggestions' && (
          <Suggestions user={user} users={users} />
        )}
      </div>
    </div>
  )
}

export default Profile
