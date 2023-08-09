import { colors } from '@constants/colors';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function DeliveryDetails() {
  return (
    <View style={styles.deliveryDetails}>
      <View style={styles.logoAndDuration}>
        <Image
          style={styles.restaurantLogo}
          source={require('../../assets/logo.avif')}
        />

        <Text>Deliver in 50-75 min</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.changeText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryDetails: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoAndDuration: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  restaurantLogo: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 20,
    backgroundColor: '#d4d2d2',
  },

  changeText: {
    color: colors.apricot,
  },
});
