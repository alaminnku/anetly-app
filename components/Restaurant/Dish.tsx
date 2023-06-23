import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { IBasketRestaurant, IDish } from "../../types";
import { urlFor } from "../../config/sanity";
import { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { useBasket } from "../../contexts/basket";

interface IDishProps {
  dish: IDish;
  restaurant: IBasketRestaurant;
}

export default function Dish({ dish, restaurant }: IDishProps) {
  // Hooks
  const { basket, addToBasket, removeFromBasket } = useBasket();
  const [quantity, setQuantity] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  // Get quantity from basket
  useEffect(() => {
    setQuantity(
      basket.dishes.find((basketDish) => basketDish._id === dish._id)
        ?.quantity || 0
    );
  }, [basket]);

  return (
    <TouchableOpacity
      style={styles.dish}
      onPress={() => setIsPressed((currState) => !currState)}
    >
      <View style={styles.details}>
        <View style={styles.content}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>
          <Text style={styles.price}>${dish.price}</Text>
        </View>

        <Image
          style={styles.image}
          source={{ uri: urlFor(dish.image.asset._ref).url() }}
        />
      </View>

      {isPressed && (
        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.minus}
            onPress={() => {
              setQuantity((currState) =>
                currState > 0 ? currState - 1 : currState
              ),
                removeFromBasket(dish, restaurant);
            }}
          >
            <MinusIcon color="white" size={20} />
          </TouchableOpacity>

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity
            style={styles.plus}
            onPress={() => {
              setQuantity((currState) => currState + 1),
                addToBasket(dish, restaurant);
            }}
          >
            <PlusIcon color="white" size={20} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dish: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content: {
    width: Dimensions.get("window").width - 140,
  },

  name: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },

  description: {
    color: "#6b7280",
    marginBottom: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "500",
  },

  image: {
    width: 80,
    height: 80,
  },

  controller: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  minus: {
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2dd4bf",
    marginRight: 10,
  },

  quantity: {
    fontSize: 18,
  },

  plus: {
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2dd4bf",
    marginLeft: 10,
  },
});
