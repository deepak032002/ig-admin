import { ReactNode } from 'react'

import { GroupSidebarIcon, SidebarIcon } from '@/asset/icon'
import { Role } from '@/utils/constant'

export type AppRoutes = {
  title: string
  path: string
  icon: ReactNode
  key: string
  isShow: boolean
  accessBy: string[]
} & (AppRoutesWithChild | AppRoutesWithoutChild)

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
        accessBy: [...Object.values(Role)],
        isShow: true,
      },
    ],
  },

  {
    id: 2,
    group: 'User Management',
    icon: (
      <>
        <GroupSidebarIcon.UserServiceIcon />
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
        accessBy: [Role.ADMIN, Role.SUPER_ADMIN],
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
        accessBy: [Role.ADMIN, Role.SUPER_ADMIN],
        isShow: true,
      },
    ],
  },

  {
    id: 3,
    group: 'Article Management',
    icon: (
      <>
        <GroupSidebarIcon.ArticleSectionIcon />
      </>
    ),
    routes: [
      {
        title: 'Article List',
        path: '/articles-list',
        icon: (
          <>
            <SidebarIcon.ArticleListIcon />
          </>
        ),
        isHavechild: false,
        key: 'users-list',
        accessBy: [Role.ADMIN, Role.SUPER_ADMIN, Role.AUTHOR],
        isShow: true,
      },
      {
        title: 'Add Article',
        path: '/add-article',
        icon: (
          <>
            <SidebarIcon.ArticleAddIcon />
          </>
        ),
        isHavechild: false,
        key: 'add-article',
        accessBy: [Role.ADMIN, Role.SUPER_ADMIN, Role.AUTHOR],
        isShow: true,
      },
    ],
  },
]

export default routeGroups
