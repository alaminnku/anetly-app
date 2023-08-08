import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import BasketScreen from '../screens/BasketScreen';
import OrderScreen from '../screens/OrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';

// Create stack
const Stack = createNativeStackNavigator<MainParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
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
    </Stack.Navigator>
  );
}
