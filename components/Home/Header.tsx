import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { UserIcon, Bars3Icon } from 'react-native-heroicons/outline';
import { DrawerActions } from '@react-navigation/native';

export default function Header() {
  // Hooks
  const { navigate } = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.menu_and_title}>
        <TouchableOpacity onPress={() => DrawerActions.openDrawer()}>
          <Bars3Icon style={styles.menu} color='#2dd4bf' size={30} />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Home</Text>

          <View style={styles.location}>
            <Text style={styles.location_text}>Current location</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigate('Login')}>
        <UserIcon size={30} color='#2dd4bf' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    marginTop: 0,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  menu_and_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menu: {
    marginRight: 10,
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 20,
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  location_text: {
    color: '#adacac',
    marginRight: 5,
  },
});
