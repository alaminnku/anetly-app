import { ReactNode } from "react";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: IRestaurant;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
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

export interface IBasketContext {
  basket: IBasketItem[];
  addToBasket: (addedDish: IDish) => void;
  removeFromBasket: (removedDish: IDish) => void;
  basketPriceTotal: number;
  basketQuantityTotal: number;
}

export interface IBasketItem extends IDish {
  quantity: number;
}
