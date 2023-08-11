import { colors } from '@constants/colors';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Bars3Icon } from 'react-native-heroicons/outline';
import { IBusiness } from 'types';

interface IProps {
  business: IBusiness;
}

export default function BusinessHeader({ business }: IProps) {
  // Hooks
  const { dispatch, navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.business_details}>
        <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
          <Bars3Icon
            size={30}
            style={styles.menu_icon}
            color={colors.primary}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.business_name}>{business.name}</Text>
          <Text style={styles.business_address}>{business.address}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.update_button}
        onPress={() => navigate('UpdateBusiness')}
      >
        <Text style={styles.update_button_text}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  business_details: {
    flexDirection: 'row',
  },

  menu_icon: {
    marginRight: 15,
  },

  business_name: {
    fontSize: 24,
    fontWeight: '600',
  },

  business_address: {
    color: colors.gray,
  },

  update_button: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    borderColor: 'transparent',
    backgroundColor: colors.secondary,
  },

  update_button_text: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.white,
  },
});
