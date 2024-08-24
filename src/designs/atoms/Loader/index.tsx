import { cn } from '@/utils/helper'

const Loader: React.FC<{ className?: string; wrapperClassName?: string }> = ({ wrapperClassName, className }) => {
  return (
    <div className={cn('flex h-screen items-center justify-center bg-white dark:bg-boxdark', wrapperClassName)}>
      <div
        className={cn(
          'h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent',
          className
        )}
      ></div>
    </div>
  )
}

export default Loader
