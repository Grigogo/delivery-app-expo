import { View, Text } from 'react-native'
import React from 'react'
import { useCart } from '@/hooks/useCart'
import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import { convertPrice } from '@/utils/convertPrice'
import Button from '@/components/ui/button/Button'
import CartItem from './cart-item/CartItem'
import { useCheckout } from './useCheckout'

const Cart = () => {
  const { items, total } = useCart()
  const { onCheckout } = useCheckout()

  return (
    <>
      <Layout>
      <Heading>Корзина</Heading>

      {items.length? (
        items.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <Text className='mt-2'>Корзина пуста</Text>
      )}
    </Layout>
    {items.length ? (
      <View className='bottom-8 absolute w-[90%] mx-5'>
        <Text className='font-bold text-xl'>Сумма: {convertPrice(total)}</Text>
        <Button onPress={() => onCheckout()}>Оплатить</Button>
      </View>
    ) : null}
    </>
  )
}

export default Cart
