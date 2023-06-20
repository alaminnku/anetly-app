import { useState, createContext, useContext } from "react";
import {
  IBasketContext,
  IContextProviderProps,
  IDish,
  IBasketItem,
} from "../types";

// Create context
const BasketContext = createContext({} as IBasketContext);

// Create hook
export const useBasket = () => useContext(BasketContext);

// Provider
export default function BasketProvider({ children }: IContextProviderProps) {
  // Hooks
  const [basket, setBasket] = useState<IBasketItem[]>([]);

  // Basket price total
  const basketPriceTotal = basket.reduce(
    (acc, dish) => acc + dish.price * dish.quantity,
    0
  );

  // Basket quantity total
  const basketQuantityTotal = basket.reduce(
    (acc, dish) => acc + dish.quantity,
    0
  );

  // Add to basket
  function addToBasket(addedDish: IDish) {
    setBasket((currState) => {
      if (currState.some((dish) => dish._id === addedDish._id)) {
        return currState.map((dish) => {
          if (dish._id === addedDish._id) {
            return {
              ...dish,
              quantity: dish.quantity + 1,
            };
          } else {
            return dish;
          }
        });
      } else {
        return [...currState, { ...addedDish, quantity: 1 }];
      }
    });
  }

  // Remove from basket
  function removeFromBasket(removedDish: IDish) {
    setBasket((currState) => {
      return currState.map((dish) => {
        if (dish._id === removedDish._id) {
          return {
            ...dish,
            quantity: dish.quantity > 0 ? dish.quantity - 1 : dish.quantity,
          };
        } else {
          return dish;
        }
      });
    });
  }

  console.log(basket);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        basketPriceTotal,
        basketQuantityTotal,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
