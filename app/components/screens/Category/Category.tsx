import { View, Text } from 'react-native'
import React from 'react'
import { useCategory } from './useCategory'
import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

const Category = () => {
  const { category, products, isLoading } = useCategory()

  if(isLoading) return <Loader />

  return (
    <Layout>
      {category ?
        (<Catalog title={category.name} products={products || []} />
      ) : (
        <Text>Категоря не найдена</Text>
      )}
    </Layout>
  )
}

export default Category
