import {
  DrawerActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { axiosInstance } from '../config/axios';
import { useUser } from '../contexts/user';
import { setItemAsync } from 'expo-secure-store';

export default function LoginScreen() {
  // Hooks
  const isFocused = useIsFocused();
  const { goBack } = useNavigation();
  const { token, setToken, setUser } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Destructure form
  const { email, password } = formData;

  // Handle navigation
  useEffect(() => {
    if (token) {
      goBack();
    }
  }, [token, isFocused]);

  // Handle login
  async function handleLogin() {
    try {
      // Make request to backend
      const response = await axiosInstance.post('/users/login', {
        ...formData,
      });

      // Destructure data
      const { token, ...rest } = response.data;

      // Update states
      setToken(token);
      setUser(rest);

      // Save token to secure store
      await setItemAsync('token', token);
    } catch (err) {
      // Log error
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={styles.login}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back_button} onPress={() => goBack()}>
          <ArrowLeftIcon color='#2dd4bf' size={20} />
        </TouchableOpacity>
        <Text style={styles.header_text}>Login</Text>
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

      <TouchableOpacity style={styles.submit_button} onPress={handleLogin}>
        <Text style={styles.button_text}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    marginBottom: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  back_button: {
    backgroundColor: '#f3f4f6',
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header_text: {
    flex: 1,
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
    backgroundColor: '#2dd4bf',
  },

  button_text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});
