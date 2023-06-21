import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { useBasket } from "../../contexts/basket";
import { useNavigation } from "@react-navigation/native";
import { formatCurrencyToUSD } from "../../utils";

export default function Basket() {
  // Hooks
  const { basketPriceTotal, basketQuantityTotal } = useBasket();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity style={styles.basket} onPress={() => navigate("Basket")}>
      <Text style={styles.basketQuantity}>{basketQuantityTotal}</Text>

      <Text style={styles.basketText}>View Basket</Text>

      <Text style={styles.basketPrice}>
        {formatCurrencyToUSD(basketPriceTotal)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  basket: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#3b82f6",
    width: Dimensions.get("screen").width - 50,
  },

  basketQuantity: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "#044dc2",
  },

  basketText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },

  basketPrice: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
