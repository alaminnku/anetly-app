import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ICategory } from "../../types";
import { urlFor } from "../../config/sanity";

interface ICategoryProps extends ICategory {}

export default function Category({ name, image }: ICategoryProps) {
  return (
    <TouchableOpacity style={styles.category}>
      <Image
        style={styles.image}
        source={{ uri: urlFor(image.asset._ref).url() }}
      />

      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  category: {
    position: "relative",
    marginRight: 10,
  },

  image: {
    width: 80,
    height: 80,
  },

  title: {
    left: 5,
    bottom: 5,
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    position: "absolute",
  },
});
