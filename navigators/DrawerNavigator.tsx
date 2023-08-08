import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import CustomDrawerContent from '../components/layout/CustomDrawerContent';
import {
  BuildingStorefrontIcon,
  HomeIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import VendorRegisterScreen from '../screens/VendorRegisterScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';

// Create drawer
const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
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
      <Drawer.Screen
        name='Home'
        component={RestaurantsScreen}
        options={{
          drawerIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

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
    </Drawer.Navigator>
  );
}
