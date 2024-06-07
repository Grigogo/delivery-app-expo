import { useNavigation } from '@react-navigation/native';
import Loader from '@/components/ui/Loader';
import Button from '@/components/ui/button/Button';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { IAuthFormData } from '@/types/auth.interface';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { View, Text, Pressable } from 'react-native';

import AuthFields from './AuthFields';
import { useAuthMutations } from './useAuthMutations';

const Auth = () => {
  const [isReg, setIsReg] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const { isLoading, loginSync, registerSync } = useAuthMutations(reset);

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    if (isReg) registerSync(data);
    else loginSync(data);
  };

  return (
    <View className='mx-2 items-center justify-center h-full'>
      <View className='w-9/12'>
        <Text className='text-center text-black text-3xl font-medium mb-8'>
          {isReg ? 'Регистрация' : 'Вход'}
        </Text>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <AuthFields control={control} />

            <Button onPress={handleSubmit(onSubmit)}>
              {isReg ? 'Зарегистрироваться' : 'Войти'}
            </Button>

            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text className='text-black text-center text-base mt-6'>
                {isReg ? 'Уже зарегистрированы? ' : 'Нет аккаунта? '}
                <Text className='text-[#47AA52]'>
                  {isReg ? 'Вход' : 'Регистрация'}
                </Text>
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Auth;
