'use client'
import 'react-toastify/dist/ReactToastify.css'

import React, { useState, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { ToastContainer, Flip } from 'react-toastify'
import { useThemeMode } from 'flowbite-react'

import QueryContext from './QueryContext'

const RootContext: React.FC<PropsWithChildren> = ({ children }) => {
  const { mode } = useThemeMode()

  const [isHydrated, setIsHydrated] = useState<boolean>(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <>
      <QueryContext>{children}</QueryContext>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover
        position="top-right"
        rtl={false}
        theme={mode === 'dark' ? 'dark' : 'light'}
        transition={Flip}
      />
    </>
  )
}

export default RootContext
