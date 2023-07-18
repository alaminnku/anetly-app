import { useState, createContext, useContext, useEffect } from "react";
import {
  AxiosError,
  IContextProviderProps,
  IUser,
  IUserContext,
} from "../types";
import * as SecureStore from "expo-secure-store";
import { axiosInstance } from "../config/axios";

// Create context
const UserContext = createContext({} as IUserContext);

// Create hook
export const useUser = () => useContext(UserContext);

// Provider
export default function UserProvider({ children }: IContextProviderProps) {
  // Hooks
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Get local token
  async function getLocalToken() {
    // Get token
    const localToken = await SecureStore.getItemAsync("token");

    // Update state
    setToken(localToken);
  }

  // Authenticate user
  async function authUser() {
    try {
      // Make request to the backend
      const response = await axiosInstance.get("/users/me", {
        headers: {
          Authorization: `${token}`,
        },
      });

      // Update state
      setUser(response.data);
    } catch (error) {
      // Type error
      const err = error as AxiosError;

      // Log error
      console.log(err);

      // Remove token
      if (err.response?.status === 401) {
        await SecureStore.deleteItemAsync("token");
      }
    }
  }

  // Run getLocalToken function
  useEffect(() => {
    getLocalToken();
  }, []);

  // Authenticate user
  useEffect(() => {
    if (token) {
      authUser();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
