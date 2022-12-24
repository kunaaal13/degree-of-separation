import Image from 'next/image'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

function Header() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <header className='h-16 w-full p-3 bg-[#1876F2]'>
      <div className='h-full w-full flex items-center justify-between'>
        {/* Title */}
        <div className='flex items-center space-x-3'>
          <Image
            src='/logo2.svg'
            width={40}
            height={40}
            alt=''
            className='cursor-pointer'
          />
          <h1 className='text-2xl font-bold text-white'>Social Book</h1>
        </div>

        {/* Theme Switch */}
        <div className='flex items-center justify-center'>
          {currentTheme === 'dark' ? (
            <SunIcon
              className='h-6 w-6 cursor-pointer text-yellow-500'
              onClick={() => setTheme('light')}
            />
          ) : (
            <MoonIcon
              className='h-6 w-6 cursor-pointer text-[#F0F2F5]'
              onClick={() => setTheme('dark')}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
