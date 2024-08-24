'use client'

import React from 'react'
import { Card as FlowbiteCard } from 'flowbite-react'

import { cn } from '@/utils/helper'

interface CardProps extends React.PropsWithChildren {
  className?: string
  innerClassName?: string
}

const Card: React.FC<CardProps> = ({ children, className, innerClassName }) => {
  return (
    <FlowbiteCard
      className={cn('shadow-card', className)}
      theme={{
        root: {
          children: cn('flex h-full flex-col justify-center gap-4 py-8 px-6', innerClassName),
        },
      }}
    >
      {children}
    </FlowbiteCard>
  )
}

export default Card
