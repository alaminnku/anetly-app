import { useState, createContext, useContext } from "react";
import {
  IBasketContext,
  IContextProviderProps,
  IDish,
  IBasket,
  IBasketRestaurant,
} from "../types";

// Create context
const BasketContext = createContext({} as IBasketContext);

// Create hook
export const useBasket = () => useContext(BasketContext);

// Provider
export default function BasketProvider({ children }: IContextProviderProps) {
  // Hooks
  const [basket, setBasket] = useState<IBasket>({
    restaurant: {
      _id: "",
      name: "",
    },
    dishes: [],
  });

  // Basket price total
  const basketPriceTotal = basket?.dishes.reduce(
    (acc, dish) => acc + dish.price * dish.quantity,
    0
  );

  // Basket quantity total
  const basketQuantityTotal = basket?.dishes.reduce(
    (acc, dish) => acc + dish.quantity,
    0
  );

  // Add to basket
  function addToBasket(addedDish: IDish, restaurant: IBasketRestaurant) {
    setBasket((currState) => {
      if (currState.restaurant._id === restaurant._id) {
        let dishes;

        if (currState.dishes.some((dish) => dish._id === addedDish._id)) {
          dishes = currState.dishes.map((dish) => {
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
          dishes = [...currState.dishes, { ...addedDish, quantity: 1 }];
        }

        return {
          dishes,
          restaurant,
        };
      } else {
        return {
          restaurant,
          dishes: [{ ...addedDish, quantity: 1 }],
        };
      }
    });
  }

  // Remove from basket
  function removeFromBasket(removedDish: IDish, restaurant: IBasketRestaurant) {
    setBasket((currState) => {
      if (currState.restaurant._id === restaurant._id) {
        const dishes = currState.dishes.map((dish) => {
          if (dish._id === removedDish._id) {
            return {
              ...dish,
              quantity: dish.quantity > 0 ? dish.quantity - 1 : dish.quantity,
            };
          } else {
            return dish;
          }
        });

        return {
          ...currState,
          dishes,
        };
      } else {
        return currState;
      }
    });
  }

  console.log(basket);

  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
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
