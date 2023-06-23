import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import * as Progress from "react-native-progress";

export default function OrderScreen() {
  // Hooks
  const { navigate } = useNavigation();

  // Navigate after 4 seconds
  useEffect(() => {
    // Create timeout
    const timeoutId = setTimeout(() => {
      navigate("Delivery");
    }, 4000);

    // Clean up
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SafeAreaView style={styles.order}>
      <LottieView
        autoPlay
        loop
        style={styles.animation}
        source={require("../assets/delivery.json")}
      />

      <Text style={styles.message}>
        Waiting for restaurant to accept your order!{" "}
      </Text>

      <Progress.Circle color="#0d9488" indeterminate={true} size={60} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  order: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2dd4bf",
  },

  animation: {
    width: 400,
    height: 400,
  },

  message: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 60,
    color: "white",
  },

  loader: {
    width: 150,
    height: 150,
  },
});
