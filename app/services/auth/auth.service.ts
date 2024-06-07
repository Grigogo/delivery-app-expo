import { getAuthUrl } from "app/config/api.config"
import { EnumAsyncStorage, IAuthResponse } from "app/types/auth.interface"
import { request } from "../api/request.api"
import { deleteTokensStorage, saveToStorage } from "./auth.helper"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthService = {
  async main(variant: 'reg' | 'login', email: string, password: string) {
    const response = await request<IAuthResponse>({
      url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
      method: 'POST',
      data: { email, password }
    })

    if (response.accesToken) await saveToStorage(response)

    return response
  },

  async logout() {
    await deleteTokensStorage()
    await AsyncStorage.removeItem(EnumAsyncStorage.USER)
  }
}
