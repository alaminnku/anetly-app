import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateToLogin from '@components/layout/NavigateToLogin';
import SubmitButton from '@components/layout/SubmitButton';
import { colors } from '@constants/colors';
import MenuHeader from '@components/layout/MenuHeader';

export default function VendorRegisterScreen() {
  // Hooks
  const { dispatch } = useNavigation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    businessName: '',
  });

  // Destructure data
  const { firstName, lastName, email, password, businessName } = formData;

  async function handleVendorRegister() {
    console.log(formData);
  }

  return (
    <SafeAreaView style={styles.register}>
      <MenuHeader title='Vendor sign up' />

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

      <View style={styles.form_item}>
        <Text style={styles.label}>Business name</Text>
        <TextInput
          placeholder='Enter business name'
          style={styles.input}
          value={businessName}
          onChangeText={(businessName) =>
            setFormData((currState) => ({
              ...currState,
              businessName,
            }))
          }
        />
      </View>

      <SubmitButton handleSubmit={handleVendorRegister} />

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
