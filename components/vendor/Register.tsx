import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Bars3Icon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VendorRegisterScreen() {
  // Hooks
  const { navigate, dispatch } = useNavigation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Destructure data
  const { firstName, lastName, email, password } = formData;

  async function handleVendorRegister() {}

  return (
    <SafeAreaView style={styles.register}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
          <Bars3Icon style={styles.menu_icon} color='#2dd4bf' size={30} />
        </TouchableOpacity>
        <Text style={styles.header_text}>Vendor sign up</Text>
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>First name</Text>
        <TextInput
          autoCapitalize='none'
          placeholder='Enter first name'
          style={styles.input}
          value={firstName}
          onChangeText={(firstName) =>
            setFormData((currState) => ({
              ...currState,
              firstName,
            }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Last name</Text>
        <TextInput
          autoCapitalize='none'
          placeholder='Enter last name'
          style={styles.input}
          value={lastName}
          onChangeText={(lastName) =>
            setFormData((currState) => ({
              ...currState,
              lastName,
            }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          autoCapitalize='none'
          placeholder='Enter email address'
          style={styles.input}
          value={email}
          onChangeText={(email) =>
            setFormData((currState) => ({
              ...currState,
              email,
            }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder='Enter password'
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={(password) =>
            setFormData((currState) => ({
              ...currState,
              password,
            }))
          }
        />
      </View>

      <TouchableOpacity
        style={styles.submit_button}
        onPress={handleVendorRegister}
      >
        <Text style={styles.button_text}>SUBMIT</Text>
      </TouchableOpacity>

      <View style={styles.login}>
        <Text style={styles.login_text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text style={styles.login_action}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  menu_icon: {
    marginRight: 15,
  },

  header_text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },

  form_item: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  label: {
    fontSize: 17,
    marginBottom: 15,
  },

  input: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f3f4f6',
  },

  submit_button: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#2dd4bf',
  },

  button_text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },

  login: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  login_text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    marginRight: 5,
  },

  login_action: { fontSize: 16, fontWeight: '500', color: '#2dd4bf' },
});
