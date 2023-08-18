import { axiosInstance } from '@config/axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { IBusiness, IContextProviderProps } from 'types';
import { useUser } from './user';

// Create context
const DataContext = createContext({});

// Create hook
export const useData = () => useContext(DataContext);

// Create provider function
export default function DataProvider({ children }: IContextProviderProps) {
  // Hooks
  const { token, user } = useUser();
  const [businesses, setBusinesses] = useState<IBusiness[]>([]);

  // Get all businesses
  async function getBusinesses() {
    try {
      // Make request to the backend
      const response = await axiosInstance.get('/business/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update state
      setBusinesses(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Run functions
  useEffect(() => {
    // Get customer data
    if (token && user?.role === 'CUSTOMER') {
      getBusinesses();
    }
  }, [token, user]);

  return (
    <DataContext.Provider value={{ businesses }}>
      {children}
    </DataContext.Provider>
  );
}
