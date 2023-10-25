import MenuHeader from '@components/layout/MenuHeader';
import { colors } from '@constants/colors';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { PhoneIcon, EnvelopeIcon } from 'react-native-heroicons/outline';

export default function SupportScreen() {
  async function openContactPrompt(type: string, data: string) {
    try {
      await Linking.openURL(`${type}:${data}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={style.support}>
      <MenuHeader title='Support' />

      <View style={style.contacts}>
        <TouchableOpacity
          style={style.contact}
          onPress={() => openContactPrompt('mailto', 'hello@anetly.com')}
        >
          <EnvelopeIcon style={style.icon} />
          <Text style={style.text}>Send us an email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.contact}
          onPress={() => openContactPrompt('tel', '01701022532')}
        >
          <PhoneIcon style={style.icon} />
          <Text style={style.text}>Give us a call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  support: {
    flex: 1,
    backgroundColor: colors.white,
  },

  contacts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: colors.green,
  },

  icon: {
    marginRight: 10,
    color: colors.white,
  },

  text: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
  },
});
