import { SafeAreaView } from 'react-native';
import BusinessForm from '@components/business/BusinessForm';
import GenericHeader from '@components/layout/GenericHeader';

export default function UpdateBusinessScreen() {
  return (
    <SafeAreaView>
      <GenericHeader title='Update business' />
      <BusinessForm />
    </SafeAreaView>
  );
}
