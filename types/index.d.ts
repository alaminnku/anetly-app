import { AxiosError } from 'axios';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type MainParamList = {
  Root: undefined;
  Restaurant: IRestaurant;
  Basket: undefined;
  Order: undefined;
  Delivery: undefined;
  Login: undefined;
  UpdateBusiness: undefined;
  AddItem: undefined;
  UpdateItem: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  User: undefined;
  Business: undefined;
  Restaurant: undefined;
  Items: undefined;
  Favorite: undefined;
  Support: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainParamList {
      Root: undefined;
    }
  }
}

interface IDish {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export interface IRestaurant {
  _id: string;
  name: string;
  address: string;
  logo: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  category: {
    name: string;
  };
  rating: number;
  dishes: IDish[];
  latitude: number;
  longitude: number;
}

export interface ICategory {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export interface IContextProviderProps {
  children: ReactNode;
}

export interface IBasketRestaurant {
  _id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface IBasketDish extends IDish {
  quantity: number;
}

export interface IBasket {
  dishes: IBasketDish[];
  restaurant: IBasketRestaurant;
}

export interface IBasketContext {
  basket: IBasket;
  setBasket: Dispatch<SetStateAction<IBasket>>;
  addToBasket: (addedDish: IDish, restaurant: IBasketRestaurant) => void;
  removeFromBasket: (removedDish: IDish, restaurant: IBasketRestaurant) => void;
  basketPriceTotal: number;
  basketQuantityTotal: number;
}

export interface IItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface IBusiness {
  name: string;
  address: string;
  category: string;
  items?: IItem[];
  status: 'OPEN' | 'CLOSED';
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'BUSINESS' | 'CUSTOMER';
  business?: IBusiness;
}

export type CustomAxiosError = AxiosError<{
  message: string;
}>;

export interface IUserContext {
  token: string | null;
  user: IUser | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}
