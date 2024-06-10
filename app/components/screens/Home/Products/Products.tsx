import { View, Text } from 'react-native'
import React from 'react'
import { useProducts } from './useProducts'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

const Products = () => {
  const { isLoading, products } = useProducts()

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title='Продукты' products={products|| []} />
  )
}

export default Products
