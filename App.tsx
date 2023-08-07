import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import 'react-native-url-polyfill/auto';
import RestaurantScreen from './screens/RestaurantScreen';
import { AppStackParamList, AuthStackParamList } from './types';
import BasketProvider from './contexts/basket';
import BasketScreen from './screens/BasketScreen';
import OrderScreen from './screens/OrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import UserProvider, { useUser } from './contexts/user';
import LoginScreen from './screens/LoginScreen';
import UserRegisterScreen from './screens/UserRegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './components/layout/CustomDrawerContent';
import VendorRegisterScreen from './screens/VendorRegisterScreen';
import {
  HomeIcon,
  UserIcon,
  BuildingStorefrontIcon,
} from 'react-native-heroicons/outline';

// Create stack
const Drawer = createDrawerNavigator<AuthStackParamList>();
const Stack = createNativeStackNavigator<AppStackParamList>();

// Auth stack
function AuthStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'black',
        drawerActiveBackgroundColor: '#2dd4bf',
        drawerLabelStyle: { marginLeft: -20, fontSize: 16 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Group>
        <Drawer.Screen
          name='User'
          component={UserRegisterScreen}
          options={{ drawerIcon: ({ color }) => <UserIcon color={color} /> }}
        />
        <Drawer.Screen
          name='Vendor'
          component={VendorRegisterScreen}
          options={{
            drawerIcon: ({ color }) => <BuildingStorefrontIcon color={color} />,
          }}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

// App stack
function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
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
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={UserRegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {
  // Hooks
  const { user } = useUser();

  return (
    <NavigationContainer>
      <UserProvider>
        <BasketProvider>{user ? <AppStack /> : <AuthStack />}</BasketProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
