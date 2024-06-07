import { getUserUrl } from "@/config/api.config"
import { request } from "./api/request.api"
import { IUser } from "@/types/user.interface"

export const UserService = {
  async getProfile() {
    return request<IUser>({
      url: getUserUrl('/profile'),
      method: 'GET'
    })
  },

  async toggleFavorite(productId: string) {
    return request<IUser>({
      url: getUserUrl(`/profile/favorites/${productId}`),
      method: 'PATCH'
    })
  }
}
