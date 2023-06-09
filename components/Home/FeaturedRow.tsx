import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import Restaurants from "./Restaurants";

interface IFeaturedRowProps {
  id: string;
  title: string;
  description: string;
}

export default function FeaturedRow({ title, description }: IFeaturedRowProps) {
  return (
    <View style={styles.featuredRow}>
      <View style={styles.title}>
        <Text style={styles.title_text}>{title}</Text>
        <ArrowRightIcon color="#00ccbb" size={20} />
      </View>

      <Text style={styles.description}>{description}</Text>

      <Restaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  featuredRow: {
    marginBottom: 15,
  },

  title: {
    flexDirection: "row",
    alignItems: "center",
  },

  title_text: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 5,
  },

  description: {
    color: "#d4d2d2",
  },
});
