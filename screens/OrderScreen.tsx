import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function OrderScreen() {
  return (
    <SafeAreaView style={styles.order}>
      <Animatable.Image
        style={styles.animation}
        source={require("../assets/delivery.gif")}
      />

      <Text style={styles.message}>
        Waiting for restaurant to accept your order!{" "}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  order: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  animation: {
    width: 280,
    height: 280,
    marginBottom: 60,
  },

  message: {
    marginBottom: 20,
    fontSize: 24,
    textAlign: "center",
  },
});
