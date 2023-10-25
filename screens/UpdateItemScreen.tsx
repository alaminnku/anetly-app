import ItemForm from '@components/business/ItemForm';
import GenericHeader from '@components/layout/GenericHeader';
import { colors } from '@constants/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { MainParamList } from 'index';

interface Props extends NativeStackScreenProps<MainParamList, 'UpdateItem'> {}

export default function UpdateItemScreen({
  route: {
    params: { item },
  },
}: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GenericHeader title='Update item' />

      <ItemForm item={item} />
    </View>
  );
}
