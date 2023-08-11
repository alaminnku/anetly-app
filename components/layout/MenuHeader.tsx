import { colors } from '@constants/colors';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Bars3Icon } from 'react-native-heroicons/outline';

interface IProps {
  title: string;
}

export default function MenuHeader({ title }: IProps) {
  // Hooks
  const { dispatch } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
        <Bars3Icon style={styles.menu_icon} color={colors.primary} size={30} />
      </TouchableOpacity>

      <Text style={styles.header_text}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
  },

  menu_icon: {
    marginRight: 15,
  },

  header_text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
