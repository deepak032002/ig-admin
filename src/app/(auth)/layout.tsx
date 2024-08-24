import React, { PropsWithChildren } from 'react'

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex min-h-screen items-center justify-center bg-white dark:bg-boxdark-2">{children}</div>
}

export default layout
