import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserRegisterScreen() {
  // Hooks
  const { navigate } = useNavigation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Destructure data
  const { firstName, lastName, email, password } = formData;

  async function handleUserRegister() {}

  return (
    <SafeAreaView style={styles.register}>
      <Text style={styles.header_text}>Register</Text>

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
        onPress={handleUserRegister}
      >
        <Text style={styles.button_text}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },

  header_text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },

  form_item: {
    marginBottom: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#2dd4bf',
  },

  button_text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});
