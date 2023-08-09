import { colors } from '@constants/colors';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NavigateToLogin() {
  // Hooks
  const { navigate } = useNavigation();

  return (
    <View style={styles.navigation}>
      <Text style={styles.navigation_text}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigate('Login')}>
        <Text style={styles.navigation_action}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navigation_text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    marginRight: 5,
  },

  navigation_action: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.apricot,
  },
});
