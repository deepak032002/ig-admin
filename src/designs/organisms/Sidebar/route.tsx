import { ReactNode } from 'react'

import { GroupSidebarIcon, SidebarIcon } from '@/asset/icon'

export type AppRoutes = { title: string; path: string; icon: ReactNode; key: string; isShow: boolean } & (
  | AppRoutesWithChild
  | AppRoutesWithoutChild
)

interface AppRoutesWithChild {
  isHavechild: true
  children: Omit<AppRoutes, 'icon' | 'key'>[]
}
interface AppRoutesWithoutChild {
  isHavechild: false
}

export type AppRouteGroup = {
  id: number
  group: string
  icon: ReactNode
  routes: AppRoutes[]
}[]

const routeGroups: AppRouteGroup = [
  {
    id: 1,
    group: 'Home',
    icon: (
      <>
        <GroupSidebarIcon.HomeIcon />
      </>
    ),
    routes: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: (
          <>
            <SidebarIcon.DashboardIcon />
          </>
        ),
        isHavechild: false,
        key: 'dashboard',
        isShow: true,
      },
    ],
  },

  {
    id: 2,
    group: 'User Management',
    icon: (
      <>
        <SidebarIcon.UserServiceIcon />
      </>
    ),
    routes: [
      {
        title: 'Users List',
        path: '/users-list',
        icon: (
          <>
            <SidebarIcon.UserListIcon />
          </>
        ),
        isHavechild: false,
        key: 'users-list',
        isShow: true,
      },

      {
        title: 'Users Add',
        path: '/user-add',
        icon: (
          <>
            <SidebarIcon.UserAddIcon />
          </>
        ),
        isHavechild: false,
        key: 'user-add',
        isShow: true,
      },
    ],
  },
]

export default routeGroups
