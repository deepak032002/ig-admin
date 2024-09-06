interface Select extends React.SelectHTMLAttributes<HTMLSelectElement> {
  type: 'select'
  options: { value: string; label: string }[]
}

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  type: Exclude<React.InputHTMLAttributes<HTMLInputElement>['type'], 'select'>
}

type InputProps = {
  label?: string
  isIcon?: boolean
  icon?: ReactNode
  wrapperClassName?: string
  labelClassName?: string
  iconClassName?: string
  error?: string
  inputBorderRadius?: string
  inputWrapperClassName?: string
  layout: 'horizontal' | 'vertical'
} & (Input | Select)
