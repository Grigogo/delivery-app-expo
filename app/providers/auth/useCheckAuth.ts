import { useAuth } from "app/hooks/useAuth"
import { errorCatch } from "app/services/api/error.api"
import { getNewTokens } from "app/services/api/helper.auth"
import { getAccessToken } from "app/services/auth/auth.helper"
import { AuthService } from "app/services/auth/auth.service"
import { EnumSecureStore } from "app/types/auth.interface"
import { getItemAsync } from "expo-secure-store"
import { useEffect } from "react"

export const useCheckAuth = (routeName?: string) => {
  const { user, setUser } = useAuth()

  useEffect(() => {
    const checkAccessToken = async () => {
      const accesToken = await getAccessToken()
      if (accesToken) {
        try {
          await getNewTokens()
        } catch (e) {
          if(errorCatch(e) === 'jwt expired') {
            await AuthService.logout()
            setUser(null)
          }
        }
      }

      let ignore = checkAccessToken()
    }
  }, [])

  useEffect(() => {
    const checkRefreshToken = async () => {
      const refreshToken = await getItemAsync(
        EnumSecureStore.REFRESH_TOKEN
      )
      if (!refreshToken && user) {
        await AuthService.logout()
        setUser(null)
      }
    }

    let ignore = checkRefreshToken()
  }, [routeName])
}
