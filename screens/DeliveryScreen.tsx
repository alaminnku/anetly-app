import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useBasket } from "../contexts/basket";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
  // Hooks
  const { basket } = useBasket();
  const { navigate } = useNavigation();

  return (
    <View style={styles.delivery}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <XMarkIcon size={30} color="white" />
        </TouchableOpacity>

        <Text style={styles.orderHelp}>Order help</Text>
      </SafeAreaView>

      <View style={styles.estimatedTime}>
        <View>
          <Text style={styles.arrivalText}>Estimated Arrival</Text>
          <Text style={styles.estimatedDuration}>45-55 Minutes</Text>

          <Progress.Bar indeterminate={true} color="#2dd4bf" />

          <Text style={styles.preparationMessage}>
            Your order at {basket.restaurant.name} is being prepared
          </Text>
        </View>

        <Image
          style={styles.bikerImage}
          source={require("../assets/biker.webp")}
        />
      </View>

      <MapView
        initialRegion={{
          latitude: basket.restaurant.latitude,
          longitude: basket.restaurant.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: basket.restaurant.latitude,
            longitude: basket.restaurant.longitude,
          }}
          identifier="origin"
          pinColor="#2dd4bf"
          title={basket.restaurant.name}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  delivery: {
    flex: 1,
    backgroundColor: "#2dd4bf",
  },

  header: {
    margin: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  orderHelp: {
    fontSize: 20,
    color: "#ccfbf1",
  },

  estimatedTime: {
    zIndex: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
  },

  arrivalText: {
    fontSize: 18,
    color: "#94a3b8",
    marginBottom: 10,
  },

  estimatedDuration: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
  },

  preparationMessage: {
    marginTop: 15,
    color: "#94a3b8",
    fontWeight: "500",
  },

  bikerImage: {
    width: 80,
    height: 80,
  },

  map: {
    flex: 1,
    zIndex: 10,
    marginTop: -60,
  },
});
