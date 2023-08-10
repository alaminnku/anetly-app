import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import { useBasket } from '@contexts/basket';
import { useNavigation } from '@react-navigation/native';
import { formatCurrencyToUSD } from '@utils/index';
import { colors } from '@constants/colors';

export default function Basket() {
  // Hooks
  const { navigate } = useNavigation();
  const { basketPriceTotal, basketQuantityTotal } = useBasket();

  return (
    <View style={styles.basketContainer}>
      <TouchableOpacity
        style={styles.basket}
        onPress={() => navigate('Basket')}
      >
        <Text style={styles.basketQuantity}>{basketQuantityTotal}</Text>

        <Text style={styles.basketText}>View Basket</Text>

        <Text style={styles.basketPrice}>
          {formatCurrencyToUSD(basketPriceTotal)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  basketContainer: {
    height: 110,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    backgroundColor: colors.white,
  },

  basket: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.primary,
    width: Dimensions.get('screen').width - 50,
  },

  basketQuantity: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: colors.primary,
  },

  basketText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },

  basketPrice: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});
