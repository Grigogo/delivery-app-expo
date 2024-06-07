import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import { useAuth } from '@/hooks/useAuth'
import Auth from '@/components/screens/Auth/Auth'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator = () => {
  const { user } = useAuth()

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#fff'
      }
    }}>
      {user ? (
        routes.map(route => (
          <Stack.Screen key={route.name} {...route} />
        ))
      ) : (
        <Stack.Screen name='Auth' component={Auth} />
      )}
    </Stack.Navigator>
  )
}

export default PrivateNavigator
