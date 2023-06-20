import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types";
import RestaurantHeader from "../components/Restaurant/RestaurantHeader";
import RestaurantDetails from "../components/Restaurant/RestaurantDetails";
import Allergy from "../components/Restaurant/Allergy";
import Menu from "../components/Restaurant/Menu";
import Basket from "../components/Restaurant/Basket";

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
    <>
      <ScrollView style={styles.restaurant}>
        <RestaurantHeader logo={logo} />

        <RestaurantDetails
          name={name}
          rating={rating}
          category={category}
          address={address}
          description={description}
        />

        <Allergy />

        <Menu dishes={dishes} />
      </ScrollView>

      <Basket />
    </>
  );
}

const styles = StyleSheet.create({
  restaurant: {
    marginBottom: 110,
  },
});
