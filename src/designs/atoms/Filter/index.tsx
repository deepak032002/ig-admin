import React from 'react'
import { Tooltip } from 'flowbite-react'

interface FilterProps {
  items: { title: string; value: string; hint?: string }[]
  activeItem: string
  onChange?: (value: string) => void
}

const WithHint: React.FC<{ hint?: string; children: React.ReactNode }> = ({ children, hint }) => {
  return hint ? <Tooltip content={hint}>{children}</Tooltip> : <>{children}</>
}

const Filter: React.FC<FilterProps> = ({ items, activeItem, onChange }) => {
  return (
    <div className="flex gap-2 text-base">
      {items.map(item => (
        <WithHint hint={item.hint} key={item.value}>
          <button
            className={`h-8 w-8 font-medium ${
              item.value === activeItem ? 'rounded bg-white text-primary shadow-card' : 'text-black dark:text-white'
            }`}
            onClick={() => onChange && onChange(item.value)}
          >
            {item.title}
          </button>
        </WithHint>
      ))}
    </div>
  )
}

export default Filter
