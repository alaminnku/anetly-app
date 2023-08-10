import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import { useBasket } from '../contexts/basket';
import MapView, { Marker } from 'react-native-maps';
import { useUser } from '../contexts/user';
import { useEffect } from 'react';
import { colors } from '@constants/colors';

export default function DeliveryScreen() {
  // Hooks
  const { basket } = useBasket();
  const { navigate } = useNavigation();

  return (
    <View style={styles.delivery}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Root')}>
          <XMarkIcon size={30} color={colors.white} />
        </TouchableOpacity>

        <Text style={styles.orderHelp}>Order help</Text>
      </SafeAreaView>

      <View style={styles.estimatedTime}>
        <View>
          <Text style={styles.arrivalText}>Estimated Arrival</Text>
          <Text style={styles.estimatedDuration}>45-55 Minutes</Text>

          <Progress.Bar indeterminate={true} color={colors.primary} />

          <Text style={styles.preparationMessage}>
            Your order at {basket.restaurant.name} is being prepared
          </Text>
        </View>

        <Image
          style={styles.bikerImage}
          source={require('../assets/biker.webp')}
        />
      </View>

      <MapView
        initialRegion={{
          latitude: basket.restaurant.latitude,
          longitude: basket.restaurant.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType='mutedStandard'
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: basket.restaurant.latitude,
            longitude: basket.restaurant.longitude,
          }}
          identifier='origin'
          pinColor={colors.primary}
          title={basket.restaurant.name}
        />
      </MapView>

      <View style={styles.rider}>
        <View style={styles.image_and_name}>
          <Image
            style={styles.rider_image}
            source={require('../assets/logo.avif')}
          />

          <View>
            <Text style={styles.rider_name}>Ahsan A.</Text>
            <Text style={styles.rider_about}>Your Rider</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  delivery: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  header: {
    margin: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  orderHelp: {
    fontSize: 20,
    color: colors.almostWhite,
  },

  estimatedTime: {
    zIndex: 11,
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },

  arrivalText: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.slateGray,
  },

  estimatedDuration: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },

  preparationMessage: {
    marginTop: 15,
    fontWeight: '500',
    color: colors.slateGray,
  },

  bikerImage: {
    width: 80,
    height: 80,
  },

  map: {
    flex: 1,
    zIndex: 10,
    marginTop: -60,
  },

  rider: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 30,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },

  image_and_name: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rider_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
    backgroundColor: colors.almostWhite,
  },

  rider_name: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '600',
  },

  rider_about: {
    color: colors.slateGray,
  },

  cancel: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
});
