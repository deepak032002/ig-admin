import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useThemeMode } from 'flowbite-react'
import { usePathname } from 'next/navigation'
import { Scrollbars } from 'react-custom-scrollbars-2'

import SidebarLinkGroup from './SidebarLinkGroup'
import { AppRoutes } from './route'

interface SidebarProps {
  sidebarOpen: boolean
  activeRoutes: AppRoutes[]
  sidebar: React.RefObject<any>
  activeKey: string
  setActiveKey: React.Dispatch<React.SetStateAction<string>>
  sidebarExpanded: boolean
  setSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarOptionsRow: React.FC<SidebarProps> = ({
  sidebarOpen,
  activeRoutes,
  sidebar,
  activeKey,
  setActiveKey,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  const { mode } = useThemeMode()
  const pathname = usePathname()

  return (
    <>
      <div
        className={`absolute top-0 z-[98] h-screen min-w-[250px] bg-inherit transition-[left] ${
          sidebarOpen ? 'left-[80px]' : '-left-[250px]'
        }`}
        ref={sidebar}
      >
        <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
          <div className="flex items-center justify-between gap-2 px-6 py-4">
            <Link href="/">
              <Image
                alt="Logo"
                className="w-full"
                height={50}
                priority
                src={mode === 'light' ? '/images/logo.svg' : '/images/logo-dark.svg'}
                width={170}
              />
            </Link>
          </div>

          <div className="no-scrollbar flex flex-col overflow-y-auto">
            <nav className="px-4 pb-4 pt-3">
              <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

                <ul className="mb-6 flex flex-col">
                  {activeRoutes
                    ?.filter(route => route.isShow)
                    ?.map((route, index) => {
                      if (route.isHavechild) {
                        return (
                          <SidebarLinkGroup activeCondition={activeKey === route.key} key={index}>
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <div
                                    className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-3 text-md font-medium text-bodydark1 duration-300 ease-in-out dark:text-white-2 ${
                                      activeKey === route.key
                                        ? 'bg-primary text-white shadow-sidebar-active-btn-shadow'
                                        : 'hover:text-primary dark:hover:text-primary'
                                    }`}
                                    onClick={e => {
                                      e.preventDefault()
                                      setActiveKey(route.key)
                                      sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                    }}
                                  >
                                    <div className="h-6 w-6">{route.icon}</div>
                                    {route.title}
                                    <svg
                                      className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current duration-200 ease-in-out ${
                                        open ? 'rotate-0' : '-rotate-90'
                                      }`}
                                      fill="none"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      width="20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                        fill=""
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  {/* <!-- Dropdown Menu Start --> */}
                                  <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      {route.children
                                        ?.filter(child => child.isShow)
                                        ?.map((child, index) => {
                                          return (
                                            <li key={index}>
                                              <Link
                                                className={`group relative flex cursor-pointer items-center gap-2.5 rounded-md py-1 text-md font-medium duration-300 ease-in-out hover:text-primary ${
                                                  pathname === child.path ? 'bg-primary' : 'text-bodydark2'
                                                }`}
                                                href={child.path}
                                              >
                                                <div
                                                  className={`dot h-1.5 w-1.5 rounded-full group-hover:bg-primary ${
                                                    pathname === child.path ? 'bg-primary' : 'bg-[#98A4AE]'
                                                  }`}
                                                ></div>
                                                {child.title}
                                              </Link>
                                            </li>
                                          )
                                        })}
                                    </ul>
                                  </div>
                                </React.Fragment>
                              )
                            }}
                          </SidebarLinkGroup>
                        )
                      } else {
                        return (
                          <li key={index} onClick={() => setActiveKey(route.key)}>
                            <Link
                              className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-3 text-md font-medium text-bodydark1 duration-300 ease-in-out dark:text-white-2 ${
                                activeKey === route.key
                                  ? 'bg-primary text-white shadow-sidebar-active-btn-shadow'
                                  : 'hover:text-primary dark:hover:text-primary'
                              }`}
                              href={route.path}
                            >
                              <div className="h-6 w-6">{route.icon}</div>
                              {route.title}
                            </Link>
                          </li>
                        )
                      }
                    })}
                </ul>
              </div>
            </nav>
          </div>
        </Scrollbars>
      </div>
    </>
  )
}

export default React.memo(SidebarOptionsRow)
