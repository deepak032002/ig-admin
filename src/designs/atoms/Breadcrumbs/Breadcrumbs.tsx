'use client'

import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

interface BreadcrumbProps {
  pageName: string
  linkList?: { name: string; link: string }[]
  isBack?: boolean
}
const Breadcrumb = ({ pageName, linkList, isBack }: BreadcrumbProps) => {
  const router = useRouter()

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 bg-center">
        {isBack && (
          <span className="cursor-pointer" onClick={() => router.back()}>
            <IoArrowBack className="text-lg" />
          </span>
        )}
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">{pageName}</h2>
      </div>

      {/* <nav>
        {linkList && linkList.length > 0 ? (
          <ol>
            <li>
              <Link className="font-medium" href="/">
                Dashboard /
              </Link>
            </li>
            {linkList.map((link, index) => (
              <li key={index}>
                <Link className="font-medium" href={link.link}>
                  {link.name}
                </Link>{' '}
                {index !== linkList.length - 1 && ' / '}
              </li>
            ))}
          </ol>
        ) : (
          <ol className="flex items-center gap-2">
            <li>
              <Link className="font-medium" href="/">
                Dashboard /
              </Link>
            </li>
            <li className="font-medium text-primary">{pageName}</li>
          </ol>
        )}
      </nav> */}
    </div>
  )
}

export default Breadcrumb
