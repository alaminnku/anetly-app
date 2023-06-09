import { View, StyleSheet } from "react-native";
import FeaturedRow from "./FeaturedRow";

export default function FeaturedRows() {
  return (
    <View style={styles.featuredRows}>
      <FeaturedRow
        id="1"
        title="Featured"
        description="Paid placements from our partners"
      />
      <FeaturedRow
        id="2"
        title="Tasty discounts"
        description="Paid placements from our partners"
      />
      <FeaturedRow
        id="3"
        title="Offers near you!"
        description="Paid placements from our partners"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  featuredRows: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
