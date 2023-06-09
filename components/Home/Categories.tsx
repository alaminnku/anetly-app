import { StyleSheet, ScrollView } from "react-native";
import Category from "./Category";

export default function Categories() {
  return (
    <ScrollView
      style={styles.categories}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Category imageUrl="../../assets/logo.avif" title="Pizza" />
      <Category imageUrl="../../assets/logo.avif" title="Thai" />
      <Category imageUrl="../../assets/logo.avif" title="Asian" />
      <Category imageUrl="../../assets/logo.avif" title="Sushi" />
      <Category imageUrl="../../assets/logo.avif" title="Burger" />
      <Category imageUrl="../../assets/logo.avif" title="Chicken" />
      <Category imageUrl="../../assets/logo.avif" title="Beef" />
      <Category imageUrl="../../assets/logo.avif" title="Others" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categories: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
});
