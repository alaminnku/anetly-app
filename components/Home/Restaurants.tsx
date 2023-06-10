import { ScrollView } from "react-native";
import Restaurant from "./Restaurant";

export default function Restaurants() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingLeft: 15 }}
      showsHorizontalScrollIndicator={false}
    >
      <Restaurant
        id="1"
        imageUrl=""
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St."
        description="This is a description"
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
        description="This is a description"
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
        description="This is a description"
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
        description="This is a description"
        dishes={[]}
        longitude={20}
        latitude={0}
      />
    </ScrollView>
  );
}
