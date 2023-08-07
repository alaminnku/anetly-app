import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import BasketProvider from './contexts/basket';
import UserProvider from './contexts/user';
import DrawerNavigator from './navigators/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <BasketProvider>
          <DrawerNavigator />
        </BasketProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
