import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainParamList } from '../types';
import RestaurantScreen from '../screens/RestaurantScreen';
import BasketScreen from '../screens/BasketScreen';
import OrderScreen from '../screens/OrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';

// Create stack
const Stack = createNativeStackNavigator<MainParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Root' component={DrawerNavigator} />
      <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      <Stack.Screen
        name='Basket'
        component={BasketScreen}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name='Order'
        component={OrderScreen}
        options={{ presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='Delivery'
        component={DeliveryScreen}
        options={{ presentation: 'fullScreenModal' }}
      />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
}
