import { useMutation } from '@tanstack/react-query'

export const useLogin = () => {
  return useMutation({
    mutationFn: (value: any) => Promise.resolve(value),
  })
}
