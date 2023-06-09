import { StyleSheet, ScrollView } from "react-native";
import Category from "./Category";

export default function Categories() {
  return (
    <ScrollView
      style={styles.categories}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Category imageUrl="../../assets/logo.avif" title="Cat 1" />
      <Category imageUrl="../../assets/logo.avif" title="Cat 2" />
      <Category imageUrl="../../assets/logo.avif" title="Cat2" />
      <Category imageUrl="../../assets/logo.avif" title="Cat2" />
      <Category imageUrl="../../assets/logo.avif" title="Cat2" />
      <Category imageUrl="../../assets/logo.avif" title="Cat2" />
      <Category imageUrl="../../assets/logo.avif" title="Cat2" />
      <Category imageUrl="../../assets/logo.avif" title="Cat2" />
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
