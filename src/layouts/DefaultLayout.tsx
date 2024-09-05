'use client'

import React, { useState, useEffect } from 'react'

import Sidebar from '@/designs/organisms/Sidebar'
import Header from '@/designs/organisms/Header'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { useUser } from '@/hooks/api-hooks/use-user'
import { useGlobalStore } from '@/store/useGlobalStore'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { width } = useWindowDimensions()
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(width >= 1280 ? true : false)
  const { data: user } = useUser()
  const setUser = useGlobalStore(state => state.setUser)

  useEffect(() => {
    if (user) {
      setUser(user.result)
    }
  }, [user, setUser])

  return (
    <div className="dark:bg-boxdark">
      <div className="flex h-screen overflow-hidden px-4 xl:px-0">
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div
          className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden transition-[padding] ${
            sidebarOpen ? 'xl:pl-[250px]' : 'xl:pl-4'
          }`}
        >
          <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <main className={`bg-white dark:bg-boxdark xl:pe-4`}>
            <div className="min-h-screen w-full rounded-3xl bg-whiter p-4 dark:bg-boxdark-2 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
