'use client'

import Link from 'next/link'
import Image from 'next/image'

import Typography from '@/designs/atoms/Typography'

export default function NotFound() {
  return (
    <div className="bg-gray-100">
      <div className="flex h-screen items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center px-2 lg:w-1/2">
          <Image alt="404 not found" className="h-auto w-full md:w-3/4" height={500} src="/not-found.svg" width={500} />
          <Typography className="mt-5 text-center text-lg font-bold text-black dark:text-white md:text-3xl">
            Sorry, the page can’t be found
          </Typography>
          <Typography className="mt-1 text-center xl:px-[210px]" size="paragraph">
            he page you were looking for appears to have been moved, deleted or does not exist.
          </Typography>
          <Link className="mt-4 text-lg text-blue-600 hover:underline" href="/" replace>
            <button
              className="font-sans group relative h-14 w-[200px] rounded-2xl bg-white text-center text-xl font-semibold text-black"
              type="button"
            >
              <div className="absolute left-1 top-[4px] z-10 flex h-12 w-1/4 items-center justify-center rounded-xl bg-blue-600 duration-500 group-hover:w-[200px]">
                <svg height="25px" viewBox="0 0 1024 1024" width="25px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="currentColor"></path>
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
              <Typography className="translate-x-6 text-base">Go Back Home</Typography>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
