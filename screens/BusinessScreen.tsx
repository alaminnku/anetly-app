import BusinessForm from '@components/business/BusinessForm';
import BusinessHeader from '@components/business/BusinessHeader';
import Item from '@components/business/Item';
import MenuHeader from '@components/layout/MenuHeader';
import { colors } from '@constants/colors';
import { useUser } from '@contexts/user';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BusinessScreen() {
  // Hooks
  const isFocused = useIsFocused();
  const { user, token } = useUser();
  const { goBack, navigate } = useNavigation();

  // Handle navigation
  useEffect(() => {
    if (!token) {
      goBack();
    }
  }, [token, isFocused]);

  return (
    <View style={styles.container}>
      {user?.business ? (
        <>
          <BusinessHeader business={user.business} />

          <TouchableOpacity
            style={styles.add_item_button}
            onPress={() => navigate('AddItem')}
          >
            <Text style={styles.add_item_text}>+ Add item</Text>
          </TouchableOpacity>

          {user.business.items && user.business.items.length > 0 && (
            <ScrollView style={styles.items_scroll_view}>
              <View style={styles.items_container}>
                <Text style={styles.items_title}>Dishes</Text>

                {user.business.items?.map((item) => (
                  <Item key={item._id} item={item} />
                ))}
              </View>
            </ScrollView>
          )}
        </>
      ) : (
        <>
          <MenuHeader title='Add business' />
          <BusinessForm />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  add_item_button: {
    padding: 18,
    margin: 15,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },

  add_item_text: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.almostWhite,
  },

  items_scroll_view: {
    backgroundColor: colors.almostWhite,
  },

  items_container: {
    padding: 15,
  },

  items_title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '600',
  },
});
