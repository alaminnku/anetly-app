import { View, Text, StyleSheet } from 'react-native';
import { IBasketRestaurant, IDish } from '../..';
import Dish from './Dish';
import { colors } from '@constants/colors';

interface IMenuProps {
  dishes: IDish[];
  restaurant: IBasketRestaurant;
}

export default function Menu({ dishes, restaurant }: IMenuProps) {
  return (
    <View>
      <Text style={styles.title}>Menu</Text>

      <View style={styles.dishes}>
        {dishes.map((dish) => (
          <Dish key={dish._id} dish={dish} restaurant={restaurant} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 20,
    margin: 15,
  },

  dishes: {
    backgroundColor: colors.white,
  },
});
