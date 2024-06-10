import { View, Text, Image } from 'react-native'
import React from 'react'
import { useProduct } from './useProduct'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/layout/Layout'
import { getMediaSource } from '@/utils/getMediaSource'
import ProductHeader from './ProductHeader'
import ProductInfo from './product-info/ProductInfo'
import AddToCardButton from './product-info/AddToCardButton'

const Product = () => {
  const { isLoading, product } = useProduct()

  if(isLoading) return <Loader />
  if(!product) return null

  return (
    <Layout>
      <ProductHeader product={product} />
      <View className='items-center justify-center mt-4'>
        <Image source={getMediaSource(product.image)} width={260} height={260} />
      </View>
      <ProductInfo product={product} />
      <AddToCardButton productId={product.id} />
    </Layout>
  )
}

export default Product
