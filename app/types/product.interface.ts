import { ICategory } from "./category.types"

export interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image: string
  createdAt: string
  category: ICategory
}
