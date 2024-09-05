import { useThemeMode } from 'flowbite-react'

import { MoonIcon, SunIcon } from '@/asset/icon'

const DarkModeSwitcher = () => {
  const { setMode, mode } = useThemeMode()

  return (
    <div>
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

        <span className="block h-10 w-10 rounded-full p-2 group-hover:bg-blue-100 group-hover:text-primary dark:group-hover:bg-blue-900">
          {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </span>
      </label>
    </div>
  )
}

export default DarkModeSwitcher
