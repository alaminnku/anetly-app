import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types";
import RestaurantHeader from "../components/Restaurant/RestaurantHeader";
import RestaurantDetails from "../components/Restaurant/RestaurantDetails";
import Allergy from "../components/Restaurant/Allergy";
import Menu from "../components/Restaurant/Menu";
import Basket from "../components/Restaurant/Basket";
import { useBasket } from "../contexts/basket";

interface IRestaurantScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Restaurant"> {}

export default function RestaurantScreen({
  route: { params },
}: IRestaurantScreenProps) {
  // Hooks
  const { basketQuantityTotal } = useBasket();

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
      <ScrollView>
        <RestaurantHeader logo={logo} />

        <RestaurantDetails
          name={name}
          rating={rating}
          category={category}
          address={address}
          description={description}
        />

        <Allergy />

        <Menu dishes={dishes} restaurant={{ _id, name, latitude, longitude }} />
      </ScrollView>

      {basketQuantityTotal > 0 && <Basket />}
    </>
  );
}
