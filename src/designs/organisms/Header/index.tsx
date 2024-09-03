import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useThemeMode } from 'flowbite-react'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'

import DarkModeSwitcher from './DarkModeSwitcher'
import DropdownUser from './DropdownUser'

import { MenuIcon } from '@/asset/icon'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const Header: React.FC<{
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}> = ({ sidebarOpen, setSidebarOpen }) => {
  const { mode } = useThemeMode()
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    document.documentElement.style.colorScheme = mode
  }, [mode])

  return (
    <header className={`sticky top-0 z-[97] flex w-full bg-white dark:bg-boxdark`}>
      <div className="flex w-full flex-grow items-center justify-between px-4 py-2 md:px-6 2xl:px-11">
        <div>
          <button
            className="btn flex w-full cursor-pointer justify-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon />
          </button>
        </div>

        <div>
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              alt="Logo"
              height={150}
              src={mode === 'light' ? '/images/logo.svg' : '/images/logo-dark.svg'}
              width={150}
            />
          </Link>
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <DarkModeSwitcher />
          <DropdownUser />
        </div>

        <div className="xl:hidden">
          <button
            className="rounded-full p-3 hover:bg-[#CCE5E5] hover:text-primary dark:hover:bg-[#66b0b23b]"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <BsThreeDots size={18} />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-[58px] flex w-full items-center justify-center overflow-hidden border-[#e0e6eb] bg-white transition-[height] dark:border-[#313e54] dark:bg-boxdark xl:border-t-0 ${
          dropdownOpen && width <= 1280 ? 'h-[80px] border-t' : 'h-0'
        }`}
      >
        <DarkModeSwitcher />
        <DropdownUser />
      </div>
    </header>
  )
}

export default Header
