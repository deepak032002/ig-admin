import React from 'react'
import Multiselect from 'multiselect-react-dropdown'

import { cn } from '@/utils/helper'

interface SelectProps {
  options: { value: number | string; label: string }[] | undefined
  selectedValues: { value: string; label: string }[] | { value: string; label: string } | undefined
  label?: string
  labelClassName?: string
  onChange?: (value: { value: string; label: string }[]) => void
  singleSelect?: boolean
  className?: string
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedValues,
  label,
  labelClassName,
  onChange,
  singleSelect = false,
  className = '',
}) => {
  return (
    <div className={cn('mb-4 flex-1', className)}>
      {label && (
        <label className={cn('mb-2.5 block font-medium text-black dark:text-white', labelClassName)}>{label}</label>
      )}
      <Multiselect
        className="h-10 w-full text-base dark:text-white"
        displayValue="label"
        options={options}
        selectedValues={selectedValues}
        singleSelect={singleSelect}
        style={{
          searchBox: {
            padding: '0 20px',
            borderRadius: '8px',
            height: '100%',
          },
          chips: {
            height: '100%',
            margin: '0',
            fontSize: '16px',
            color: '#000',
          },
        }}
        onRemove={item => {
          onChange?.(item)
        }}
        onSelect={item => {
          onChange?.(item)
        }}
      />
    </div>
  )
}

export default Select
