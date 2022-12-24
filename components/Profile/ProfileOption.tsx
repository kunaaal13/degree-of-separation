import React from 'react'

interface Props {
  selectedOption: String
  setSelectedOption: (option: String) => void
  value: String
}

function ProfileOption({ selectedOption, setSelectedOption, value }: Props) {
  return (
    <div
      className={`p-2 ${
        selectedOption === value
          ? 'border-b-2 border-[#1876F2] text-[#1876F2]'
          : ''
      }`}
    >
      <h3
        className={`text-xl font-semibold cursor-pointer`}
        onClick={() => {
          setSelectedOption(value)
        }}
      >
        {value}
      </h3>
    </div>
  )
}

export default ProfileOption
