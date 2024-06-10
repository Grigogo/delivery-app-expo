import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';

const Banner = () => {
  const { navigate } = useTypedNavigation();

  return (
    <View className='mt-5 w-full bg-[#47AA52] px-5 py-5 rounded-2xl justify-between flex-row'>
      <View>
        <Text className='font-medium w-56 text-white text-xl'>
          Быстрая доставка - каждый день!
        </Text>

        <Pressable
          onPress={() => navigate('Explorer')}
          className='bg-black py-2 rounded-full w-28 mt-4'
        >
          <Text className='text-white font-medium text-center'>Заказать</Text>
        </Pressable>
      </View>

      <View className='absolute bottom-0 right-4 w-28 h-28'>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/Grigogo/delivery-app-expo-client/main/app/assets/images/banner.png'}}
          style={{width: 100, height: 100}}
        />
      </View>
    </View>
  );
};

export default Banner;
