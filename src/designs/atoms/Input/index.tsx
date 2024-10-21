'use client'

import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

import { cn } from '@/utils/helper'

const isSelect = (props: Select | Input): props is Select => {
  return props.type === 'select'
}

const Input: React.FC<InputProps> = props => {
  const inputClassName = cn(
    'w-full bg-transparent h-full text-[#000] border-0 outline-none focus:ring-0 focus:shadow-none dark:border-form-strokedark dark:text-white',
    props.className,
    { 'cursor-not-allowed': props.disabled }
  )

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  return (
    <div className={cn(props.wrapperClassName)}>
      <div
        className={cn(
          'flex',
          { 'flex-col gap-2': props.layout === 'vertical' },
          {
            'flex-col gap-2 md:flex-row md:items-center': props.layout === 'horizontal',
          }
        )}
      >
        {props.label && (
          <label className={cn('block flex-1 font-medium text-[#3f2a2a] dark:text-white', props.labelClassName)}>
            {props.label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}

        <div
          className={cn(
            `flex h-10 flex-1 items-center gap-2 rounded-md border border-neutral-1000 dark:border-neutral-400`,
            props.inputWrapperClassName
          )}
          style={{ borderRadius: props.inputBorderRadius }}
        >
          {props.isIcon && (
            <span
              className={cn(
                'flex h-full items-center justify-center ps-2 text-2xl text-neutral-500',
                props.iconClassName
              )}
            >
              {props.icon}
            </span>
          )}

          {isSelect(props) ? (
            <select className={inputClassName} {...props}>
              {props.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input className={inputClassName} {...props} type={isShowPassword ? 'text' : props.type} />
          )}

          {props.type === 'password' && (
            <button
              className={cn(
                'flex h-full items-center justify-center pe-2 text-2xl text-neutral-500',
                props.iconClassName
              )}
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <VscEyeClosed /> : <VscEye />}
            </button>
          )}
        </div>
      </div>

      {props.error ? (
        <div className="mt-1">
          <p className="text-sm text-red-600">{props.error}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Input
