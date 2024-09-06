import coreApiService from '@/api-service/core-api-service'
import { getQueries } from '@/utils/helper'
import { API_ENDPOINTS } from '@/api-service/api-endpoints'

class UserApiService {
  login = (email: string, password: string) => {
    return coreApiService.post('/api/login', { email, password }, { baseURL: '' })
  }

  getProfile = () => {
    return coreApiService.get<ApiResponse<UserResponse>>(API_ENDPOINTS.AUTH.PROFILE)
  }

  getUserListForAdmin = (query: QueryType) => {
    return coreApiService.get<ApiResponse<{ total: number; users: UserResponse[] }>>(
      `${API_ENDPOINTS.AUTH.USER_LIST_ADMIN}?${getQueries(query)}`
    )
  }

  createUserByAdmin = (data: any) => {
    return coreApiService.post(API_ENDPOINTS.AUTH.USER_LIST_ADMIN, data)
  }
}

const userApiService = new UserApiService()
export default userApiService
