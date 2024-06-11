import { getOrdersUrl } from "@/config/api.config"
import { IOreder } from "@/types/order.interface"
import { request } from "./api/request.api"

type TypeData = {
  items: {
    quantity: number
    price: number
    productId: string
  }[]
}

export const OrderService = {
  async getAll() {
    return request<IOreder[]>({
      url: getOrdersUrl(''),
      method: 'GET'
    })
  },

  async getByUserId() {
    return request<IOreder[]>({
      url: getOrdersUrl('/by-user'),
      method: 'GET'
    })
  },

  async place(data: TypeData) {
    return request<{ clientSecret: string }>({
      url: getOrdersUrl(''),
      method: 'POST',
      data
    })
  }
}
