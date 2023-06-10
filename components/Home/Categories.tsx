import { ScrollView } from "react-native";
import Category from "./Category";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 15,
        marginVertical: 15,
      }}
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
