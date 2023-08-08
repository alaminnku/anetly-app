import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { MainParamList } from '../types';
import RestaurantHeader from '../components/restaurant/RestaurantHeader';
import RestaurantDetails from '../components/restaurant/RestaurantDetails';
import Allergy from '../components/restaurant/Allergy';
import Menu from '../components/restaurant/Menu';
import Basket from '../components/restaurant/Basket';
import { useBasket } from '../contexts/basket';

interface IProps extends NativeStackScreenProps<MainParamList, 'Restaurant'> {}

export default function RestaurantScreen({ route: { params } }: IProps) {
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
