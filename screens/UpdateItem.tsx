import { SafeAreaView } from 'react-native';
import ItemForm from '@components/business/ItemForm';
import GenericHeader from '@components/layout/GenericHeader';

export default function UpdateItem() {
  return (
    <SafeAreaView>
      <GenericHeader title='Update item' />
      <ItemForm />
    </SafeAreaView>
  );
}
