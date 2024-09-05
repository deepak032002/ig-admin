'use client'
import Link from 'next/link'
import Image from 'next/image'
import { LiaAngleDownSolid } from 'react-icons/lia'
import { Dropdown } from 'flowbite-react'

import { useGlobalStore } from '@/store/useGlobalStore'
import { UserDropDownIcon } from '@/asset/icon'

const DropdownUser = () => {
  const user = useGlobalStore(state => state.user)

  return (
    <div className="">
      <Dropdown
        className="w-[200px]"
        label="Dropdown"
        renderTrigger={() => {
          return (
            <Link className="group flex items-center gap-1" href="#">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
                {user.profilePic ? (
                  <Image
                    alt="User"
                    height={112}
                    src={user?.profilePic}
                    style={{
                      width: 'auto',
                      height: 'auto',
                    }}
                    width={112}
                  />
                ) : (
                  <>
                    {user.firstName?.[0]}
                    {user.lastName?.[0]}
                  </>
                )}
              </span>

              <span className="hidden text-left lg:block">
                <span className="flex items-center gap-1 text-md font-medium capitalize text-black dark:text-white">
                  {user?.firstName} {user?.lastName} <LiaAngleDownSolid />
                </span>
                <span className="block text-sm">{user?.email}</span>
              </span>
            </Link>
          )
        }}
      >
        <Dropdown.Item className="items-center gap-2" icon={UserDropDownIcon.ProfileIcon}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item className="items-center gap-2" icon={UserDropDownIcon.SettingIcon}>
          Settings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className="items-center gap-2" icon={UserDropDownIcon.LogoutIcon}>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default DropdownUser
