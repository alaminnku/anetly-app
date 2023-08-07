import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ShareIcon } from 'react-native-heroicons/outline';

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <View style={styles.custom_drawer}>
      <DrawerContentScrollView {...props} style={styles.drawer_scroll}>
        <View style={styles.logo_and_app_name}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.avif')}
          />

          <Text style={styles.app_name}>Anetly</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.drawer_footer}>
        <TouchableOpacity style={styles.share}>
          <ShareIcon style={{ marginRight: 10 }} size={25} color='#2dd4bf' />
          <Text style={styles.share_text}>Share With Fiends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  custom_drawer: {
    flex: 1,
    marginBottom: 50,
  },

  drawer_scroll: {
    // borderWidth: 1,
  },

  logo_and_app_name: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 15,
    backgroundColor: '#f3f4f6',
  },

  app_name: {
    fontSize: 18,
    fontWeight: '600',
  },

  drawer_footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#d4d2d2',
  },

  share: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  share_text: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
  },
});
