import { View, Text, StyleSheet } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";

interface IRestaurantDetailsProps {
  name: string;
  rating: number;
  category: {
    name: string;
  };
  address: string;
  description: string;
}

export default function RestaurantDetails({
  name,
  rating,
  category,
  address,
  description,
}: IRestaurantDetailsProps) {
  return (
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.about}>
        <View style={styles.rating}>
          <StarIcon style={styles.star} color="green" opacity={0.5} size={22} />

          <Text style={styles.rating_and_category}>
            {rating} . {category.name}
          </Text>
        </View>

        <View style={styles.location}>
          <MapPinIcon
            style={styles.map_icon}
            color="gray"
            opacity={0.4}
            size={22}
          />

          <Text style={styles.address}>Nearby . {address}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 15,
    backgroundColor: "white",
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },

  about: {
    flexDirection: "row",
    marginBottom: 10,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },

  star: {
    marginRight: 5,
  },

  rating_and_category: {
    color: "#6b7280",
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
  },

  map_icon: {
    marginRight: 5,
  },

  address: {
    color: "#6b7280",
  },

  description: {
    color: "#6b7280",
    borderBottomColor: "red",
  },
});
