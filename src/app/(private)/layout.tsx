import React, { PropsWithChildren } from 'react'

import DefaultLayout from '@/layouts/DefaultLayout'

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

export default layout
