import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Button from '@/components/ui/button/Button'

interface IAddToCartButton {
  productId: string
}

const AddToCardButton: FC<IAddToCartButton> = ({ productId }) => {
  return (
    <Button className='mt-6'>В корзину</Button>
  )
}

export default AddToCardButton
