import { View } from 'react-native';
import Header from '../components/basket/Header';
import DeliveryDetails from '../components/basket/DeliveryDetails';
import Dishes from '../components/basket/Dishes';
import PriceDetails from '../components/basket/PriceDetails';
import { useUser } from '../contexts/user';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function BasketScreen() {
  // Hooks
  const { token } = useUser();
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  // Handle navigation
  useEffect(() => {
    if (!token) {
      navigate('Login');
    }
  }, [token, isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <DeliveryDetails />
      <Dishes />
      <PriceDetails />
    </View>
  );
}
