import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { ICartItem } from '@/types/cart.interface'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { AntDesign } from '@expo/vector-icons'

interface ICartActions {
  item: ICartItem
}

const CartActions: FC<ICartActions> = ({ item }) => {
  const { removeFromCart, changeQuantity } = useActions()

  const { items } = useCart()
  const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

  return (
    <View className='mt-4 flex-row justify-between'>
      <View className='flex-row items-center gap-x-4'>
        <Pressable
          onPress={() => changeQuantity({ id: item.id, type: 'minus' })}
          disabled={quantity === 1}
        >
          <AntDesign name='minus' size={18} />
        </Pressable>
        <Text>{quantity}</Text>
        <Pressable
          onPress={() => changeQuantity({ id: item.id, type: 'plus' })}
        >
          <AntDesign name='plus' size={18} />
        </Pressable>
      </View>
      <Pressable
        onPress={() => removeFromCart({ id: item.id })}
      >
        <AntDesign name='delete' size={18} />
      </Pressable>
    </View>
  )
}

export default CartActions
