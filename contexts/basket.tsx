import { useState, createContext, useContext } from "react";
import { IBasketContext, IContextProviderProps } from "../types";

// Create context
const BasketContext = createContext({} as IBasketContext);

// Create hook
export const useBasket = () => useContext(BasketContext);

// Provider
export default function BasketProvider({ children }: IContextProviderProps) {
  return <BasketContext.Provider value={{}}>{children}</BasketContext.Provider>;
}
