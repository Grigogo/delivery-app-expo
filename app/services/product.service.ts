import { getProductUrl } from "@/config/api.config"
import { IProduct } from "@/types/product.interface"
import { request } from "./api/request.api"

export const ProductService = {
  async getAll(searchTerm?: string) {
    return request<IProduct[]>({
      url: getProductUrl(''),
      method: 'GET',
      params: searchTerm
        ? {
            searchTerm
        } : {}
    })
  },

  async getBySlug(slug: string) {
    return request<IProduct>({
      url: getProductUrl(`/by-slug/${slug}`),
      method: 'GET'
    })
  },

  async getByCategory(categorySlug: string) {
    return request<IProduct>({
      url: getProductUrl(`/by-category/${categorySlug}`),
      method: 'GET',
      data: { categorySlug }
    })
  }
}
