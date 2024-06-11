import { View, Text, Pressable, Image } from 'react-native'
import React, { FC } from 'react'
import { ICartItem } from '@/types/cart.interface'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { getMediaSource } from '@/utils/getMediaSource'
import { convertPrice } from '@/utils/convertPrice'
import CartActions from './CartActions'

interface ICartItemProps {
  item: ICartItem
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { navigate } = useTypedNavigation()
  return (
    <View className='flex-row mt-5 w-[100%]'>
      <Pressable
        onPress={() => navigate('Product', { slug: item.product.slug })}
        className='bg-gray-100 rounded-xl overflow-hidden py-3 px-3 items-center w-[33%]'
      >
        <Image
          source={getMediaSource(item.product.image)}
          width={80}
          height={80}
        />
      </Pressable>

      <View className='ml-5 mt-2 w-[60%]'>
        <Text className='font-semibold text-xl'>
          {item.product.name}
        </Text>
        <Text className='mt-1'>{convertPrice(item.price)}</Text>
        <CartActions item={item} />
      </View>
    </View>
  )
}

export default CartItem
