import { useNavigation, DrawerActions } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Bars3Icon } from 'react-native-heroicons/outline';

export default function Header() {
  // Hooks
  const navigation = useNavigation();

  // Open drawer
  const handleOpenDrawer = () =>
    navigation.dispatch(DrawerActions.openDrawer());

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Bars3Icon style={styles.menu_icon} color='#2dd4bf' size={30} />
      </TouchableOpacity>
      <Text style={styles.header_text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },

  menu_icon: {
    marginRight: 15,
  },

  header_text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
});
