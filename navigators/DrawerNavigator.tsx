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
import CustomerRegisterScreen from '../screens/CustomerRegisterScreen';
import BusinessRegisterScreen from '../screens/BusinessRegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { useUser } from '../contexts/user';
import { colors } from '@constants/colors';
import BusinessScreen from '@screens/BusinessScreen';

// Create drawer
const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  // Hooks
  const { token, user } = useUser();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.almostWhite,
        drawerActiveBackgroundColor: colors.primary,
        drawerLabelStyle: { marginLeft: -20, fontSize: 16 },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {token && user ? (
        <>
          {user.role === 'BUSINESS' ? (
            <>
              <Drawer.Screen
                name='Business'
                component={BusinessScreen}
                options={{
                  drawerIcon: ({ color }) => (
                    <BuildingStorefrontIcon color={color} />
                  ),
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
            component={CustomerRegisterScreen}
            options={{ drawerIcon: ({ color }) => <UserIcon color={color} /> }}
          />

          <Drawer.Screen
            name='Business'
            component={BusinessRegisterScreen}
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
