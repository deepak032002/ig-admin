'use client'

import React from 'react'
import { Tooltip } from 'flowbite-react'
import Image from 'next/image'

import routeGroups from './route'

import useWindowDimensions from '@/hooks/useWindowDimensions'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
  handleRouteGroupClick: (activeGroupId: number) => void
  activeGroup: number
  trigger: React.RefObject<any>
}

const GroupSidebar: React.FC<SidebarProps> = ({ activeGroup, sidebarOpen, handleRouteGroupClick, trigger }) => {
  const { width } = useWindowDimensions()

  return (
    <div
      className={`absolute z-99 h-screen w-[80px] border-r border-strokedark bg-whiter dark:bg-boxdark xl:relative ${
        sidebarOpen || width >= 1280 ? 'left-0' : '-left-[80px]'
      }`}
    >
      <button aria-controls="sidebar" className="btn flex w-full cursor-pointer justify-center pb-6 pt-3" ref={trigger}>
        <div className="h-[45px] w-[45px] rounded-full bg-blue-100 p-2  dark:bg-blue-900">
          <Image alt="logo" height={50} src="/images/small-logo.svg" width={50} />
        </div>
      </button>

      <ul className="flex flex-col items-center gap-y-2">
        {routeGroups.map(group => {
          return (
            <Tooltip content={group.group} key={group.id} placement="right">
              <li
                className={`cursor-pointer rounded-xl p-3 ${
                  activeGroup === group.id
                    ? 'active-group-sidebar'
                    : 'hover:bg-[#CCE5E5] hover:text-primary dark:hover:bg-[#66b0b23b]'
                }`}
                onClick={() => handleRouteGroupClick(group.id)}
              >
                {group.icon}
              </li>
            </Tooltip>
          )
        })}
      </ul>
    </div>
  )
}

export default React.memo(GroupSidebar)
