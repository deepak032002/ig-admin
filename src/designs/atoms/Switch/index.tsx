import React, { useState } from 'react'
import ReactSwitch from 'react-switch'

import { cn } from '@/utils/helper'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  labelClassName?: string
}

const Switch: React.FC<SwitchProps> = ({ onChange, checked, labelClassName, label = '' }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  React.useEffect(() => {
    checked && setIsChecked(checked)
  }, [checked])

  return (
    <div>
      {label && (
        <label className={cn('mb-2.5 block font-medium text-black dark:text-white', labelClassName)}>{label}</label>
      )}
      <ReactSwitch
        checked={isChecked}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={() => {
          setIsChecked(!isChecked)
          onChange?.(!isChecked)
        }}
      />
    </div>
  )
}

export default Switch
