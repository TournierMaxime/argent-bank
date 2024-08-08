import http from "./axios"

const Login = async (data) => {
  const response = await http.post(`/user/login`, data)
  return response
}

const OneUser = (token) => {
  return http.post(`/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

const UpdateUser = (token) => {
  return http.put(`/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export { Login, OneUser, UpdateUser }
