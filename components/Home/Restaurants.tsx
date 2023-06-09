import { ScrollView, StyleSheet } from "react-native";
import Restaurant from "./Restaurant";

export default function Restaurants() {
  return (
    <ScrollView
      style={styles.restaurants}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Restaurant
        id="1"
        imageUrl=""
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St."
        short_description="This is a description"
        dishes={[]}
        longitude={20}
        latitude={0}
      />

      <Restaurant
        id="1"
        imageUrl=""
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St."
        short_description="This is a description"
        dishes={[]}
        longitude={20}
        latitude={0}
      />

      <Restaurant
        id="1"
        imageUrl=""
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St."
        short_description="This is a description"
        dishes={[]}
        longitude={20}
        latitude={0}
      />

      <Restaurant
        id="1"
        imageUrl=""
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St."
        short_description="This is a description"
        dishes={[]}
        longitude={20}
        latitude={0}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  restaurants: {
    marginTop: 10,
  },
});
