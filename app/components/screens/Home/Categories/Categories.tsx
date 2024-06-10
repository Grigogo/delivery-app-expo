import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import Heading from '@/components/ui/Heading';
import Loader from '@/components/ui/Loader';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';

import { getMediaSource } from '@/utils/getMediaSource';

import { useGetAllCategories } from './useGetAllCategories';

const Categories = () => {
  const { categories, isLoading } = useGetAllCategories();

  const { navigate } = useTypedNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <View className='flex flex-col mt-5 mb-4'>
      <Heading>Категории</Heading>

      <View className='flex-row justify-center mt-5'>
        {categories?.map(category => (
          <Pressable
            onPress={() => navigate('Category', { slug: category.slug })}
            key={category.id}
            className='rounded-xl bg-gray-100 p-5 mx-1'
          >
            <Image
              source={getMediaSource(category.image)}
              className='w-8 h-8 mb-2 p-3'
              style={{ resizeMode: 'cover' }}
            />
            <Text className='font-normal text-xs text-center'>{category.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Categories;
