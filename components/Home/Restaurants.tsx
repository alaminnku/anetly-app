import { ScrollView, StyleSheet } from "react-native";
import Restaurant from "./Restaurant";
import { IRestaurant } from "../../types";

interface IRestaurantsProps {
  restaurants: IRestaurant[];
}

export default function Restaurants({ restaurants }: IRestaurantsProps) {
  return (
    <ScrollView
      style={styles.restaurants}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant._id}
          _id={restaurant._id}
          logo={restaurant.logo}
          name={restaurant.name}
          rating={restaurant.rating}
          category={restaurant.category}
          address={restaurant.address}
          description={restaurant.description}
          dishes={restaurant.dishes}
          longitude={restaurant.longitude}
          latitude={restaurant.latitude}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  restaurants: {
    marginLeft: 15,
  },
});
