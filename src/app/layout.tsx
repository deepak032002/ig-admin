import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Flowbite, ThemeModeScript } from 'flowbite-react'

import './globals.css'
import { customFlowbiteThemeConfig } from '@/utils/flowbite-theme'
import RootContext from '@/context'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'IG - Admin',
  description: 'Welcome Admin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`overflow-hidden ${poppins.className}`}>
        <RootContext>
          <Flowbite theme={{ theme: customFlowbiteThemeConfig }}>{children}</Flowbite>
        </RootContext>
      </body>
    </html>
  )
}
