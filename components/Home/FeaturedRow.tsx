import { View, Text, StyleSheet } from "react-native";
import Restaurants from "./Restaurants";

interface IFeaturedRowProps {
  id: string;
  title: string;
  description: string;
}

export default function FeaturedRow({ title, description }: IFeaturedRowProps) {
  return (
    <View style={styles.featuredRow}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <Restaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  featuredRow: {
    marginBottom: 20,
  },

  content: { paddingHorizontal: 15, marginBottom: 15 },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },

  description: {
    color: "#6b7280",
  },
});
