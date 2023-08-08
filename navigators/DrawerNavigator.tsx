import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import DrawerContent from '../components/layout/DrawerContent';
import {
  BuildingStorefrontIcon,
  HomeIcon,
  UserIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
} from 'react-native-heroicons/outline';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import VendorRegisterScreen from '../screens/VendorRegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { useUser } from '../contexts/user';
import MainNavigator from './MainNavigator';

// Create drawer
const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  // Hooks
  const { token, user } = useUser();

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
      {token && user ? (
        <>
          {user.role === 'VENDOR' ? (
            <>
              <Drawer.Screen
                name='Restaurant'
                component={HomeScreen}
                options={{
                  drawerIcon: ({ color }) => <HomeIcon color={color} />,
                }}
              />

              <Drawer.Screen
                name='Items'
                component={HomeScreen}
                options={{
                  drawerIcon: ({ color }) => <HomeIcon color={color} />,
                }}
              />
            </>
          ) : (
            <>
              <Drawer.Screen
                name='Home'
                component={HomeScreen}
                options={{
                  drawerIcon: ({ color }) => <HomeIcon color={color} />,
                }}
              />
              <Drawer.Screen
                name='Favorite'
                component={HomeScreen}
                options={{
                  drawerIcon: ({ color }) => <HeartIcon color={color} />,
                }}
              />
            </>
          )}
        </>
      ) : (
        <>
          <Drawer.Screen
            name='Home'
            component={HomeScreen}
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
              drawerIcon: ({ color }) => (
                <BuildingStorefrontIcon color={color} />
              ),
            }}
          />
        </>
      )}
      <Drawer.Screen
        name='Support'
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => <ChatBubbleLeftRightIcon color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
