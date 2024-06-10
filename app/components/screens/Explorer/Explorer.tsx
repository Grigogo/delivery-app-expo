import { View, Text } from 'react-native'
import React from 'react'
import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import { useGetAllProducts } from './useGetAllProducts'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

const Explorer = () => {
  const { products, isLoading } = useGetAllProducts()

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <Catalog title='Все товары' products={products || []} />
      )}
    </Layout>
  )
}

export default Explorer
