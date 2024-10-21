import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getQueries = (obj: AnyObject): string => {
  return Object.keys(obj ?? {})
    .map(item => `${item}=${obj[item]}`)
    .join('&')
}

export const removeEmptyKey = <T extends AnyObject>(data: T): Partial<T> => {
  const params: Partial<T> = {}

  Object.keys(data).forEach(key => {
    const value = data[key]

    if (value && typeof value === 'object') {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          ;(params as AnyObject)[key] = value
        }
      } else {
        const nested = removeEmptyKey(value)
        if (Object.keys(nested).length > 0) {
          ;(params as AnyObject)[key] = nested
        }
      }
    } else if (value) {
      ;(params as AnyObject)[key] = value
    }
  })

  return params
}
