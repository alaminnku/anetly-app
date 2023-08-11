import { SafeAreaView } from 'react-native';
import ItemForm from '@components/business/ItemForm';
import GenericHeader from '@components/layout/GenericHeader';

export default function AddItemScreen() {
  return (
    <SafeAreaView>
      <GenericHeader title='Add item' />
      <ItemForm />
    </SafeAreaView>
  );
}
