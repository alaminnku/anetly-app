import { View, Text } from "react-native";
import { useBasket } from "../contexts/basket";

export default function BasketScreen() {
  // Hooks
  const { basket } = useBasket();

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
}
