import { useState, createContext, useContext } from "react";
import { IContextProviderProps, IUser, IUserContext } from "../types";

// Create context
const UserContext = createContext({} as IUserContext);

// Create hook
export const useUser = () => useContext(UserContext);

// Provider
export default function UserProvider({ children }: IContextProviderProps) {
  // Hooks
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
