'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'

import routeGroups, { AppRoutes } from './route'
import GroupSidebar from './GroupSidebar'
import SidebarOptionsRow from './SidebarOptionsRow'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()

  const [activeRoutes, setActiveRoutes] = useState<AppRoutes[]>(routeGroups[0].routes)
  const [activeGroup, setActiveGroup] = useState<number>(1)

  const [activeKey, setActiveKey] = useState<string>(() => {
    const item = activeRoutes?.find(route => route.path === pathname)
    return item?.key || 'dashboard'
  })

  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  const storedSidebarExpanded = 'true'

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  const handleRouteGroupClick = useCallback((activeGroupId: number) => {
    setActiveGroup(activeGroupId)
    const routes = routeGroups.find(group => group.id === activeGroupId)?.routes
    setActiveRoutes(routes || [])
  }, [])

  useEffect(() => {
    let activeGroup = routeGroups.findIndex(group => group.routes.some(route => route.path === pathname))
    if (activeGroup === -1) activeGroup = 0
    const activeKey = routeGroups[activeGroup]?.routes.find(route => route.path === pathname)?.key

    setActiveGroup(activeGroup + 1)
    setActiveKey(activeKey || 'dashboard')
    setActiveRoutes(routeGroups[activeGroup]?.routes || [])
  }, [pathname])

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (window.innerWidth >= 1280) return
      if (!sidebar.current || !trigger.current) return
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside className={`flex h-screen flex-row bg-white dark:bg-boxdark`}>
      <GroupSidebar
        activeGroup={activeGroup}
        handleRouteGroupClick={handleRouteGroupClick}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        trigger={trigger}
      />

      <SidebarOptionsRow
        activeKey={activeKey}
        activeRoutes={activeRoutes}
        setActiveKey={setActiveKey}
        setSidebarExpanded={setSidebarExpanded}
        sidebar={sidebar}
        sidebarExpanded={sidebarExpanded}
        sidebarOpen={sidebarOpen}
      />
    </aside>
  )
}

export default Sidebar
