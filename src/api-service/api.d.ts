interface UserResponse {
  createdAt: string
  email: string
  firstName: string
  id: string
  lastName: string
  phone: string
  profilePic: string
  role: string
  updatedAt: string
}

interface UserCreateByAdminPostData {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  phone: string
  dob: string
  gender: string
  profilePic: string
  role: string
  address: {
    city: string
    state: string
    country: string
    pincode: string
  }
}
