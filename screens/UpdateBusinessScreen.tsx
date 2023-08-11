import { View } from 'react-native';
import BusinessForm from '@components/business/BusinessForm';
import GenericHeader from '@components/layout/GenericHeader';
import { colors } from '@constants/colors';

export default function UpdateBusinessScreen() {
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <GenericHeader title='Update business' />
      <BusinessForm />
    </View>
  );
}
