import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { formatCurrencyToUSD } from "../../utils";
import { useBasket } from "../../contexts/basket";
import { urlFor } from "../../config/sanity";

export default function Dishes() {
  // Hooks
  const { basket, setBasket } = useBasket();

  function removeDish(dishId: string) {
    setBasket((currState) => ({
      ...currState,
      dishes: currState.dishes.filter((dish) => dish._id !== dishId),
    }));
  }
  return (
    <ScrollView style={styles.dishes}>
      {basket.dishes.map((dish) => (
        <View key={dish._id} style={styles.dish}>
          <View style={styles.dishDetails}>
            <Text style={styles.quantity}>{dish.quantity}x</Text>

            <Image
              style={styles.image}
              source={{ uri: urlFor(dish.image.asset._ref).url() }}
            />

            <Text numberOfLines={1}>{dish.name}</Text>
          </View>

          <View style={styles.priceDetails}>
            <Text>{formatCurrencyToUSD(dish.price)}</Text>

            <TouchableOpacity onPress={() => removeDish(dish._id)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dishes: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 200,
  },

  dish: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dishDetails: {
    maxWidth: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  quantity: {
    color: "#3b82f6",
    marginRight: 10,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
  },

  priceDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  remove: {
    marginLeft: 10,
    color: "#3b82f6",
  },
});
