import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  ArrowRightOnRectangleIcon,
  ShareIcon,
} from 'react-native-heroicons/outline';
import { useUser } from '../../contexts/user';
import { deleteItemAsync } from 'expo-secure-store';

export default function DrawerContent(props: DrawerContentComponentProps) {
  // Hooks
  const { token, setToken, setUser } = useUser();
  const { navigate, dispatch } = useNavigation();

  // Handle log out
  async function handleLogout() {
    // Remove token to secure store
    await deleteItemAsync('token');

    // Update state
    setToken(null);
    setUser(null);

    // Close drawer
    dispatch(DrawerActions.closeDrawer());

    // Navigate to home
    navigate('Root');
  }

  return (
    <View style={styles.custom_drawer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.logo_and_app_name}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.avif')}
          />

          <Text style={styles.app_name}>Anetly</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.drawer_footer}>
        <TouchableOpacity style={styles.share}>
          <ShareIcon size={25} color='#2dd4bf' style={{ marginRight: 10 }} />

          <Text style={styles.share_text}>Invite friends</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login}
          onPress={token ? handleLogout : () => navigate('Login')}
        >
          <ArrowRightOnRectangleIcon
            style={{ marginRight: 10 }}
            size={25}
            color='#2dd4bf'
          />
          <Text style={styles.login_text}>{token ? 'Log out' : 'Sign in'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  custom_drawer: {
    flex: 1,
  },

  logo_and_app_name: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 15,
    backgroundColor: '#f3f4f6',
  },

  app_name: {
    fontSize: 18,
    fontWeight: '600',
  },

  drawer_footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    paddingHorizontal: 15,
    borderTopColor: '#f3f4f6',
  },

  share: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  share_text: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '500',
  },

  login: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  login_text: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '500',
  },
});
