import { View } from 'react-native';
import ItemForm from '@components/business/ItemForm';
import GenericHeader from '@components/layout/GenericHeader';
import { colors } from '@constants/colors';

export default function AddItemScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GenericHeader title='Add item' />

      <ItemForm />
    </View>
  );
}
