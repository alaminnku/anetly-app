import { View, Text, StyleSheet } from "react-native";
import Restaurants from "./Restaurants";
import { IRestaurant } from "../../types";

interface IFeaturedRowProps {
  name: string;
  description: string;
  restaurants: IRestaurant[];
}

export default function FeaturedRow({
  name,
  description,
  restaurants,
}: IFeaturedRowProps) {
  return (
    <View style={styles.featuredRow}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <Restaurants restaurants={restaurants} />
    </View>
  );
}

const styles = StyleSheet.create({
  featuredRow: {
    marginBottom: 20,
  },

  content: { margin: 15, marginTop: 0 },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },

  description: {
    color: "#6b7280",
  },
});
