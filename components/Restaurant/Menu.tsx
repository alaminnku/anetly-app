import { View, Text, StyleSheet } from "react-native";
import { IBasketRestaurant, IDish } from "../../types";
import Dish from "./Dish";

interface IMenuProps {
  dishes: IDish[];
  restaurant: IBasketRestaurant;
}

export default function Menu({ dishes, restaurant }: IMenuProps) {
  return (
    <View style={styles.menu}>
      <Text style={styles.title}>Menu</Text>

      <View style={styles.dishes}>
        {dishes.map((dish) => (
          <Dish key={dish._id} dish={dish} restaurant={restaurant} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {},

  title: {
    fontWeight: "500",
    fontSize: 20,
    margin: 15,
  },

  dishes: {
    backgroundColor: "white",
  },
});
