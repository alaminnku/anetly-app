import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { IRestaurant } from "../../types";
import { urlFor } from "../../sanity";

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
  return (
    <TouchableOpacity style={styles.restaurant}>
      <Image
        style={styles.image}
        source={{ uri: urlFor(logo.asset._ref).url() }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.rating}>
          <StarIcon color="green" opacity={0.5} size={22} />

          <Text style={styles.rating_and_genre}>
            {rating} . <Text style={styles.genre}>{category.name}</Text>
          </Text>
        </View>

        <View style={styles.location}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={styles.address}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  restaurant: {
    marginRight: 15,
    backgroundColor: "white",
    shadowColor: "black",
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
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  rating_and_genre: {
    color: "#22c55e",
    marginLeft: 5,
    fontWeight: "500",
  },

  genre: {
    color: "#6b7280",
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
  },

  address: {
    marginLeft: 5,
  },
});
