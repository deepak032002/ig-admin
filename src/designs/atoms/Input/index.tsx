import React from 'react'

import { cn } from '@/utils/helper'

const Input: React.FC<InputProps> = ({
  disabled,
  label,
  error,
  isIcon,
  icon,
  className,
  wrapperClassName,
  labelClassName,
  iconClassName,
  inputBorderRadius = '8px',
  inputWrapperClassName,
  ...props
}) => {
  const inputClassName = cn(
    'w-full bg-transparent pr-10 text-[#000] border-0 outline-none focus:ring-0 focus:shadow-none dark:border-form-strokedark dark:text-white',
    className,
    { 'cursor-not-allowed': disabled }
  )

  return (
    <div className={cn('mb-4', wrapperClassName)}>
      <div className={error ? 'mb-1' : ''}>
        {label && (
          <label className={cn('mb-2.5 block font-medium text-[#3f2a2a] dark:text-white', labelClassName)}>
            {label}
          </label>
        )}
        <div
          className={cn(
            `flex h-10 items-center border border-neutral-1000 dark:border-neutral-400`,
            inputWrapperClassName
          )}
          style={{ borderRadius: inputBorderRadius }}
        >
          {isIcon && <span className={cn('ms-2 text-2xl text-neutral-500', iconClassName)}>{icon}</span>}
          <input className={inputClassName} disabled={disabled} {...props} />
        </div>
      </div>

      {error ? (
        <div>
          <p className="text-sm text-red-600">{error}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Input
