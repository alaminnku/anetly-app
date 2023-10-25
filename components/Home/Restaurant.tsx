import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { IRestaurant } from '../..';
import { urlFor } from '@config/sanity';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@constants/colors';

interface IRestaurantProps extends IRestaurant {}

export default function Restaurant({
  _id,
  logo,
  name,
  rating,
  category,
  address,
  description,
  dishes,
  longitude,
  latitude,
}: IRestaurantProps) {
  // Navigation
  const { navigate } = useNavigation();

  // Handle restaurant press
  function handlePress() {
    navigate('Restaurant', {
      _id,
      logo,
      name,
      rating,
      category,
      address,
      description,
      dishes,
      longitude,
      latitude,
    });
  }

  return (
    <TouchableOpacity style={styles.restaurant} onPress={handlePress}>
      <Image
        style={styles.image}
        source={{ uri: urlFor(logo.asset._ref).url() }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.rating}>
          <StarIcon color='green' opacity={0.5} size={22} />

          <Text style={styles.rating_and_genre}>
            {rating} . <Text style={styles.genre}>{category.name}</Text>
          </Text>
        </View>

        <View style={styles.location}>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text style={styles.address}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  restaurant: {
    marginRight: 15,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.125,
    shadowRadius: 2.5,
    elevation: 3,
  },

  image: {
    width: 250,
    height: 150,
  },

  content: {
    padding: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  rating_and_genre: {
    color: colors.green,
    marginLeft: 5,
    fontWeight: '500',
  },

  genre: {
    color: colors.gray,
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  address: {
    marginLeft: 5,
  },
});
