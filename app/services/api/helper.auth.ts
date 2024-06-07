import { API_URL, getAuthUrl } from "app/config/api.config"
import { EnumSecureStore, IAuthResponse } from "app/types/auth.interface"
import axios from "axios"
import { getItemAsync } from "expo-secure-store"
import { saveToStorage } from "../auth/auth.helper"

export const getNewTokens = async () => {
  try {
    const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)

    const response = await axios.post<string, { data: IAuthResponse }>(
      API_URL + getAuthUrl('/login/access-token'), {refreshToken}, {
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    )

    if (response.data.accesToken) await saveToStorage(response.data)

      return response
  } catch (e) {}
}
