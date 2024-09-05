'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useThemeMode } from 'flowbite-react'

import Typography from '@/designs/atoms/Typography'

export default function NotFound() {
  const { mode } = useThemeMode()

  return (
    <div className="h-screen overflow-auto bg-gray-100 dark:bg-boxdark">
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center px-2 lg:w-1/2">
          <Image
            alt="404 not found"
            className="h-[320px] w-[320px] md:h-[450px] md:w-[450px]"
            height={500}
            src={mode === 'light' ? '/not-found.svg' : '/not-found-dark.svg'}
            width={500}
          />
          <Typography className="mt-5 text-center text-lg font-bold text-black dark:text-white md:text-3xl">
            Sorry, the page can’t be found
          </Typography>
          <Typography className="mt-1 text-center text-neutral-500 xl:px-[210px]" size="paragraph">
            The page you were looking for appears to have been moved, deleted or does not exist.
          </Typography>
          <Link className="mt-4 text-lg text-blue-600 hover:underline" href="/" replace>
            <button
              className="font-sans group relative h-14 w-[200px] rounded-2xl bg-white text-center text-xl font-semibold text-black dark:bg-black"
              type="button"
            >
              <div className="absolute left-1 top-[4px] z-10 flex h-12 w-1/4 items-center justify-center rounded-xl bg-blue-500 duration-500 group-hover:w-[200px] dark:text-white">
                <svg height="25px" viewBox="0 0 1024 1024" width="25px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="currentColor"></path>
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <Typography className="translate-x-6 text-base dark:text-white">Go Back Home</Typography>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
