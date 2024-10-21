'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Breadcrumb from '@/designs/atoms/Breadcrumb'
import Table from '@/designs/atoms/Table'
import ActionBtn from '@/designs/atoms/ActionBtn'
import { useUserList } from '@/hooks/api-hooks/use-user'

const UsersListTemplate: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const { data: users, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useUserList(search)

  return (
    <div>
      <Breadcrumb
        linkList={[
          {
            name: 'Users List',
            link: '/users-list',
          },
        ]}
        pageName="Users List"
      />

      <Table
        activePagination={true}
        className="w-[900px]"
        columns={[
          {
            name: 'Image',
            align: 'center',
            selector: item => (
              <div className={'h-12 w-12 rounded-full bg-neutral-200 dark:bg-slate-800'}>
                <Image
                  alt="profile"
                  className="rounded-full object-cover"
                  height={48}
                  src={item.profilePic ? item.profilePic : '/dummy-table.png'}
                  width={48}
                />
              </div>
            ),
          },
          {
            name: 'Name',
            align: 'center',
            selector: item => <div className="flex items-center gap-2">{`${item.firstName} ${item.lastName}`}</div>,
            sort: true,
            dataKey: 'firstName',
          },
          {
            name: 'Email',
            align: 'center',
            selector: item => item.email,
            itemClassName: 'lowercase',
          },

          {
            name: 'Mobile',
            align: 'center',
            selector: item => item.phone,
          },

          {
            name: 'Role',
            align: 'center',
            selector: item => item.role,
          },

          {
            name: 'Action',
            align: 'center',
            selector: () => (
              <>
                <ActionBtn viewAction />
              </>
            ),
          },
        ]}
        data={users?.map(item => item.result.users).flat() || []}
        href={item => `/users-list/${item.id}`}
        isLink
        isLoading={isLoading}
        isSearch
        isSortBy={false}
        pagination={{
          fetchNextPage,
          hasNextPage,
          isFetching,
          isFetchingNextPage,
        }}
        onSearch={value => {
          setSearch(value)
        }}
      />
    </div>
  )
}

export default UsersListTemplate
