import { API_ENDPOINTS } from './api-endpoints'

import coreApiService from '@/api-service/core-api-service'

class UserApiService {
  login = (email: string, password: string) => {
    return coreApiService.post('/api/login', { email, password }, { baseURL: '' })
  }

  getProfile = () => {
    return coreApiService.get<ApiResponse<UserResponse>>(API_ENDPOINTS.AUTH.PROFILE)
  }
}

const userApiService = new UserApiService()
export default userApiService
