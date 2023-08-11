import { View } from 'react-native';
import ItemForm from '@components/business/ItemForm';
import GenericHeader from '@components/layout/GenericHeader';
import { colors } from '@constants/colors';

export default function UpdateItem() {
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <GenericHeader title='Update item' />
      <ItemForm />
    </View>
  );
}
