import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateToLogin from '@components/layout/NavigateToLogin';
import SubmitButton from '@components/layout/SubmitButton';
import { colors } from '@constants/colors';
import MenuHeader from '@components/layout/MenuHeader';
import { axiosInstance } from '@config/axios';
import { useUser } from '@contexts/user';
import { setItemAsync } from 'expo-secure-store';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { CustomAxiosError } from 'types';

export default function BusinessRegisterScreen() {
  // Hooks
  const { goBack } = useNavigation();
  const isFocused = useIsFocused();
  const { token, setToken, setUser } = useUser();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Destructure data
  const { firstName, lastName, email, password } = formData;

  // Handle navigation
  useEffect(() => {
    if (token) {
      goBack();
    }
  }, [token, isFocused]);

  // Register a business
  async function handleBusinessRegister() {
    try {
      const response = await axiosInstance.post('/users/register', {
        ...formData,
        role: 'BUSINESS',
      });

      // Destructure data
      const { token, ...rest } = response.data;

      // Update states
      setToken(token);
      setUser(rest);

      // Save token to secure store
      await setItemAsync('token', token);
    } catch (err) {
      console.log((err as CustomAxiosError).response?.data.message);
    }
  }

  return (
    <SafeAreaView style={styles.register}>
      <MenuHeader title='Business sign up' />

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

      <SubmitButton handleSubmit={handleBusinessRegister} />

      <NavigateToLogin />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    backgroundColor: colors.white,
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
    fontWeight: '500',
  },

  input: {
    padding: 15,
    fontSize: 16,
    borderWidth: 2,
    color: 'gray',
    borderRadius: 10,
    borderColor: colors.borderColor,
  },
});
