import { useQuery } from '@tanstack/react-query'

import userApiService from '@/api-service/user-api-service'

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => userApiService.getProfile(),
  })
}
