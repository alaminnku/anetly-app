import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { axiosInstance } from '../config/axios';
import { useUser } from '../contexts/user';
import { setItemAsync } from 'expo-secure-store';
import SubmitButton from '@components/layout/SubmitButton';
import { colors } from '@constants/colors';
import GenericHeader from '@components/layout/GenericHeader';

export default function LoginScreen() {
  // Hooks
  const isFocused = useIsFocused();
  const { goBack, dispatch, navigate } = useNavigation();
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
    <View style={styles.login}>
      <GenericHeader title='Login' />

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

      <SubmitButton handleSubmit={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: colors.white,
  },

  form_item: {
    marginBottom: 20,
    marginHorizontal: 15,
  },

  label: {
    fontSize: 17,
    marginBottom: 15,
    fontWeight: '500',
  },

  input: {
    padding: 15,
    fontSize: 16,
    color: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.borderColor,
  },
});
