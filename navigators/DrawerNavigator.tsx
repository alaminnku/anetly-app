import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import DrawerContent from '../components/layout/DrawerContent';
import {
  BuildingStorefrontIcon,
  HomeIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import UserScreen from '../screens/UserScreen';
import VendorScreen from '../screens/VendorScreen';
import HomeScreen from '../screens/HomeScreen';

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
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Drawer.Screen
        name='User'
        component={UserScreen}
        options={{ drawerIcon: ({ color }) => <UserIcon color={color} /> }}
      />

      <Drawer.Screen
        name='Vendor'
        component={VendorScreen}
        options={{
          drawerIcon: ({ color }) => <BuildingStorefrontIcon color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
