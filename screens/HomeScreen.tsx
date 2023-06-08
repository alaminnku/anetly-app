import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, SafeAreaView, Image, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  // Remove default navigation name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.logo}>
        <Image style={styles.image} source={require("../assets/logo.avif")} />
      </View>

      <View>
        <Text style={styles.delivery}>Deliver now</Text>
        <Text style={styles.location}>Current location</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#d4d2d2",
  },

  logo: {
    marginRight: 10,
  },

  delivery: {
    fontWeight: "bold",
    color: "#adacac",
    marginBottom: 2,
  },

  location: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
