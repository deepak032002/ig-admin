import { useThemeMode } from 'flowbite-react'

import { MoonIcon, SunIcon } from '@/asset/icon'

const DarkModeSwitcher = () => {
  const { setMode, mode } = useThemeMode()

  return (
    <li>
      <label className={'group'}>
        <input
          className="top-0 z-50 m-0 hidden h-full w-full cursor-pointer"
          type="checkbox"
          onChange={() => {
            if (typeof setMode === 'function') {
              const theme = mode === 'light' ? 'dark' : 'light'
              setMode(theme)
            }
          }}
        />

        <span className="block h-13 w-13 rounded-full p-3 group-hover:bg-[#CCE5E5] group-hover:text-primary dark:group-hover:bg-[#66b0b23b]">
          {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </span>
      </label>
    </li>
  )
}

export default DarkModeSwitcher
