import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { IAuthFormData } from '@/types/auth.interface'
import { Control } from 'react-hook-form'
import Field from '@/components/ui/field/Field'
import { validEmail } from './email.regex'

interface IAuthFields {
  control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({control}) => {
  return (
    <>
      <Field<IAuthFormData>
        placeholder='Введите email'
        control={control}
        name='email'
        rules={{
          required: 'Некорректный Email',
          pattern: {
            value: validEmail,
            message: 'Введите корректный email'
          }
        }}
        keyboardType='email-address'
      />
      <Field<IAuthFormData>
        placeholder='Введите пароль'
        control={control}
        name='password'
        secureTextEntry
        rules={{
          required: 'Некорректный пароль',
          minLength: {
            value: 6,
            message: 'Введите пароль не менее 6 символов'
          }
        }}
      />
    </>
  )
}

export default AuthFields
