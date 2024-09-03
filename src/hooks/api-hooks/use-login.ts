import { useMutation } from '@tanstack/react-query'

import userApiService from '@/api-service/user-api-service'

export const useLogin = () => {
  return useMutation({
    mutationFn: (value: any) => userApiService.login(value.email, value.password),
  })
}
