import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface ICategoryProps {
  imageUrl: string;
  title: string;
}

export default function Category({ imageUrl, title }: ICategoryProps) {
  return (
    <TouchableOpacity style={styles.category}>
      <Image style={styles.image} source={require("../../assets/sushi.jpg")} />
      <Text style={styles.title}>{title}</Text>
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
