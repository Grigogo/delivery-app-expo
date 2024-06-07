import { TypeRootStackParamList } from "app/navigation/navigation.types";
import { TypeFeatherIconNames } from "app/types/icon.interface";

export interface IMenuItem {
  icon: TypeFeatherIconNames,
  path: keyof TypeRootStackParamList
}

export type TypeNavigate = (screenNAme: keyof TypeRootStackParamList) => void
