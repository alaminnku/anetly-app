import { View } from "react-native";
import Header from "../components/Basket/Header";
import DeliveryDetails from "../components/Basket/DeliveryDetails";
import Dishes from "../components/Basket/Dishes";
import PriceDetails from "../components/Basket/PriceDetails";

export default function BasketScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <DeliveryDetails />
      <Dishes />
      <PriceDetails />
    </View>
  );
}
