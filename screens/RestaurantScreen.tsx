import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../types";
import { urlFor } from "../config/sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import RestaurantHeader from "../components/Restaurant/RestaurantHeader";

interface IRestaurantScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Restaurant"> {}

export default function RestaurantScreen({
  route: { params },
}: IRestaurantScreenProps) {
  // Destructure params
  const {
    _id,
    logo,
    name,
    rating,
    category,
    address,
    description,
    dishes,
    longitude,
    latitude,
  } = params;

  return (
    <ScrollView>
      <RestaurantHeader logo={logo} />

      <Text>{name}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image_and_back_button: {
    position: "relative",
  },

  image: {
    width: Dimensions.get("window").width,
    height: 200,
  },

  back_button: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#f1f5f9",
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
