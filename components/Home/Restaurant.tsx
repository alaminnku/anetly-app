import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface IRestaurantProps {
  id: string;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: [];
  longitude: number;
  latitude: number;
}

export default function Restaurant({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  longitude,
  latitude,
}: IRestaurantProps) {
  return (
    <TouchableOpacity style={styles.restaurant}>
      <Image style={styles.image} source={require("../../assets/sushi.jpg")} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  restaurant: {
    marginRight: 10,
  },

  image: {
    width: 150,
    height: 150,
  },
});
