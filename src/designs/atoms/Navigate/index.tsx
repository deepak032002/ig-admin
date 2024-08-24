'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Navigate: React.FC<{ href: string; isToast?: boolean; message?: string; type?: 'success' | 'error' }> = ({
  href,
  isToast,
  message,
  type,
}) => {
  const router = useRouter()

  useEffect(() => {
    router.push(href)
    if (isToast) toast(message, { type: type })
  }, [router, href, isToast, message, type])

  return <></>
}

export default Navigate
