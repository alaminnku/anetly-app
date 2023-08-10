import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { formatCurrencyToUSD } from '@utils/index';
import { useBasket } from '@contexts/basket';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@constants/colors';

export default function PriceDetails() {
  // Hooks
  const { basketPriceTotal } = useBasket();
  const { navigate } = useNavigation();

  // Delivery fee
  const deliveryFee = 5.99;
  return (
    <View style={styles.priceDetails}>
      <View style={styles.subtotal}>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <Text style={styles.subtotalText}>
          {formatCurrencyToUSD(basketPriceTotal)}
        </Text>
      </View>

      <View style={styles.deliveryFee}>
        <Text style={styles.deliveryText}>Delivery Fee</Text>
        <Text style={styles.deliveryText}>${deliveryFee}</Text>
      </View>

      <View style={styles.total}>
        <Text style={styles.totalText}>Order total</Text>
        <Text style={styles.totalText}>
          {formatCurrencyToUSD(basketPriceTotal + deliveryFee)}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.placeOrder}
        onPress={() => navigate('Order')}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  priceDetails: {
    backgroundColor: colors.white,
    padding: 15,
    paddingBottom: 30,

    width: Dimensions.get('screen').width,
  },

  subtotal: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  deliveryFee: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  total: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  subtotalText: {
    color: colors.gray,
  },

  deliveryText: {
    color: colors.gray,
  },

  totalText: {
    fontSize: 16,
    fontWeight: '600',
  },

  placeOrder: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },

  placeOrderText: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.white,
  },
});
