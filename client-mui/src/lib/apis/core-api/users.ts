import { coreApi } from '../index'

export interface User {
  id: string
  name: string
  email: string
  phone: string
  date_of_birth: string
}

export const usersCoreAPI = {
  getAll: () => coreApi.get<User[]>('/users'),
}
