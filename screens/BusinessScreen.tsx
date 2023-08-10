import AddBusiness from '@components/business/AddBusiness';
import BusinessDetails from '@components/business/BusinessDetails';
import MenuHeader from '@components/layout/MenuHeader';
import { useUser } from '@contexts/user';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function BusinessScreen() {
  // Hooks
  const isFocused = useIsFocused();
  const { goBack } = useNavigation();
  const { user, token } = useUser();

  // Handle navigation
  useEffect(() => {
    if (!token) {
      goBack();
    }
  }, [token, isFocused]);

  return (
    <SafeAreaView>
      {user?.business ? (
        <>
          <MenuHeader title={user.business.name} />
          <BusinessDetails />
        </>
      ) : (
        <>
          <MenuHeader title='Business' />
          <AddBusiness />
        </>
      )}
    </SafeAreaView>
  );
}
