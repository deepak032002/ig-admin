import { useInfiniteQuery, useQuery, useMutation } from '@tanstack/react-query'

import userApiService from '@/api-service/user-api-service'

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => userApiService.getProfile(),
  })
}

export const useUserList = (search: string) => {
  return useInfiniteQuery({
    queryKey: ['user-list', search],
    queryFn: ({ pageParam }) => userApiService.getUserListForAdmin({ page: pageParam, limit: 10, search }),
    initialPageParam: 1,
    select: res => res.pages,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.result.users === null || lastPage.result.users.length < 10) {
        return undefined
      }
      return allPages.length + 1
    },
  })
}

export const useAdminUserCreate = () => {
  return useMutation({
    mutationFn: (data: any) => userApiService.createUserByAdmin(data),
  })
}
