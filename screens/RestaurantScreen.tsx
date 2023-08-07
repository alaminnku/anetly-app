import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../types';
import RestaurantHeader from '../components/restaurant/RestaurantHeader';
import RestaurantDetails from '../components/restaurant/RestaurantDetails';
import Allergy from '../components/restaurant/Allergy';
import Menu from '../components/restaurant/Menu';
import Basket from '../components/restaurant/Basket';
import { useBasket } from '../contexts/basket';
import { useUser } from '../contexts/user';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

interface IRestaurantScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Restaurant'> {}

export default function RestaurantScreen({
  route: { params },
}: IRestaurantScreenProps) {
  // Hooks
  const { token } = useUser();
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();
  const { basketQuantityTotal } = useBasket();

  // Handle navigation
  useEffect(() => {
    if (!token) {
      navigate('Login');
    }
  }, [token, isFocused]);

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
