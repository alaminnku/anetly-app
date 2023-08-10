import { View } from 'react-native';
import Header from '../components/basket/Header';
import DeliveryDetails from '../components/basket/DeliveryDetails';
import Dishes from '../components/basket/Dishes';
import PriceDetails from '../components/basket/PriceDetails';

export default function BasketScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <DeliveryDetails />
      <Dishes />
      <PriceDetails />
    </View>
  );
}
