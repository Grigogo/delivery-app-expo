import * as SplashScreen from 'expo-splash-screen';
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { View } from 'react-native';

import { IContext, TypeUserState } from './auth-privider.interfase';
import { IUser } from '@/types/user.interface';
import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper';

export const AuthContext = createContext({} as IContext);

let ignore = SplashScreen.preventAutoHideAsync;

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser);

  useEffect(() => {
    let isMounted = true;

    const checkAccesToken = async () => {
      try {
        const accesToken = await getAccessToken()

        if (accesToken) {
          const user = await getUserFromStorage()
          if (isMounted) setUser(user)
        }
      } catch {
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    let ignore = checkAccesToken();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
