import { View, Text, StyleSheet } from "react-native";
import { IDish } from "../../types";
import Dish from "./Dish";

interface IMenuProps {
  dishes: IDish[];
}

export default function Menu({ dishes }: IMenuProps) {
  return (
    <View style={styles.menu}>
      <Text style={styles.title}>Menu</Text>

      <View style={styles.dishes}>
        {dishes.map((dish) => (
          <Dish key={dish._id} dish={dish} />
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
