import Auth from "app/components/screens/Auth/Auth";
import { IRoute } from "./navigation.types";
import Home from "app/components/screens/Home/Home";
import Favorites from "app/components/screens/Favorites/Favorites";
import Search from "app/components/screens/Search/Search";
import Explorer from "app/components/screens/Explorer/Explorer";
import Profile from "app/components/screens/Profile/Profile";
import Cart from "@/components/screens/Cart/Cart";
import Category from "@/components/screens/Category/Category";
import Product from "@/components/screens/Product/Product";

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Favorites',
    component: Favorites
  },
  {
    name: 'Search',
    component: Search
  },
  {
    name: 'Explorer',
    component: Explorer
  },
  {
    name: 'Profile',
    component: Profile
  },
  {
    name: 'Cart',
    component: Cart
  },
  {
    name: 'Category',
    component: Category
  },
  {
    name: 'Product',
    component: Product
  }
]
