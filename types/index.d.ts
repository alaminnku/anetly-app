import { AxiosError } from 'axios';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type AppStackParamList = {
  Home: undefined;
  Restaurant: IRestaurant;
  Basket: undefined;
  Order: undefined;
  Delivery: undefined;
  Login: undefined;
  Register: undefined;
};

export type AuthStackParamList = {
  Home: undefined;
  User: undefined;
  Vendor: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
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

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

type AxiosError = AxiosError<{
  message: string;
}>;

export interface IUserContext {
  token: string | null;
  user: IUser | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}
