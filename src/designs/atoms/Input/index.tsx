import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

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
  type,
  ...props
}) => {
  const inputClassName = cn(
    'w-full bg-transparent h-full text-[#000] border-0 outline-none focus:ring-0 focus:shadow-none dark:border-form-strokedark dark:text-white',
    className,
    { 'cursor-not-allowed': disabled }
  )

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

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
            `flex h-10 items-center gap-2 border border-neutral-1000 px-2 dark:border-neutral-400`,
            inputWrapperClassName
          )}
          style={{ borderRadius: inputBorderRadius }}
        >
          {isIcon && (
            <span className={cn('flex h-full items-center justify-center text-2xl text-neutral-500', iconClassName)}>
              {icon}
            </span>
          )}
          <input className={inputClassName} disabled={disabled} type={isShowPassword ? 'text' : type} {...props} />
          {type === 'password' && (
            <button
              className={cn('flex h-full items-center justify-center text-2xl text-neutral-500', iconClassName)}
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <VscEyeClosed /> : <VscEye />}
            </button>
          )}
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
