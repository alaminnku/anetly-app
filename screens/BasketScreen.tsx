import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import Header from "../components/Basket/Header";
import DeliveryDetails from "../components/Basket/DeliveryDetails";
import Dishes from "../components/Basket/Dishes";
import PriceDetails from "../components/Basket/PriceDetails";

export default function BasketScreen() {
  return (
    <SafeAreaView style={styles.basket}>
      <Header />
      <DeliveryDetails />
      <Dishes />
      <PriceDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  basket: {
    minHeight: Dimensions.get("screen").height,
  },
});
