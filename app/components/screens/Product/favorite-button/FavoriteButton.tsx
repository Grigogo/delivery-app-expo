import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { useProfile } from '../../Profile/useProfile';
import { UserService } from '@/services/user.service';
import ProductButton from '../ProductButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IFavoriteButton {
  productId: string;
}

const FavoriteButton: FC<IFavoriteButton> = ({ productId }) => {
  const { profile } = useProfile();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['toggle favorite'],
    mutationFn: () => UserService.toggleFavorite(productId),

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['get profile'] })
    }
  })

  if(!profile) return null

  const isExist = profile.favorites.some(
    favorite => favorite.id === productId
  )

  return (
    <ProductButton onPress={() => mutate()}>
      {isExist ? (
        <MaterialCommunityIcons
          name='heart'
          size={22}
          color='#DC3F41'
        />
      ) : (
        <MaterialCommunityIcons
          name='heart-outline'
          size={22}
          color='#555'
        />
      )}
    </ProductButton>
  );
};

export default FavoriteButton;
