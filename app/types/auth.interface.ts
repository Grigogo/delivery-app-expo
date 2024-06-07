import { IUser } from "./user.interface";

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}

export enum EnumSecureStore {
  ACCESS_TOKEN = 'accesToken',
  REFRESH_TOKEN = 'refreshToken'
}

export enum EnumAsyncStorage {
  USER = 'user'
}

export interface ITokens {
  accesToken: string
  refreshToken: string
}

export interface IAuthResponse extends ITokens {
  user: IUser
}
