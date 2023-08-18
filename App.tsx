import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import BasketProvider from './contexts/basket';
import UserProvider from './contexts/user';
import MainNavigator from './navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DataProvider from '@contexts/data';

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <DataProvider>
          <BasketProvider>
            <MainNavigator />
          </BasketProvider>
        </DataProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
