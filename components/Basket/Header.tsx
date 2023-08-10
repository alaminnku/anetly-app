import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useBasket } from '@contexts/basket';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@constants/colors';

export default function Header() {
  // Hooks
  const { basket } = useBasket();
  const { goBack } = useNavigation();

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.basketText}>Basket</Text>
        <Text style={styles.restaurantName}>{basket.restaurant.name}</Text>
      </View>

      <TouchableOpacity onPress={() => goBack()}>
        <XCircleIcon size={36} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: colors.white,
  },

  basketText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5,
  },

  restaurantName: {
    color: colors.gray,
    fontSize: 18,
  },
});
