'use client'

import Link from 'next/link'
import { Breadcrumb as FBreadCrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'

interface BreadcrumbProps {
  pageName: string
  linkList: { name: string; link: string }[]
}
const Breadcrumb = ({ linkList, pageName }: BreadcrumbProps) => {
  return (
    <>
      <h2 className="mb-2 text-title-md2 font-semibold text-black dark:text-white">{pageName}</h2>
      <FBreadCrumb aria-label="Default BreadCrumb example">
        <FBreadCrumb.Item icon={HiHome}>
          <Link href={'/'}>Home</Link>
        </FBreadCrumb.Item>

        {linkList.map((item, index) => (
          <FBreadCrumb.Item key={index}>
            <Link href={item.link}>{item.name}</Link>
          </FBreadCrumb.Item>
        ))}
      </FBreadCrumb>
    </>
  )
}

export default Breadcrumb
