import Header from '@components/layout/GenericHeader';
import SubmitButton from '@components/layout/SubmitButton';
import { axiosInstance } from '@config/axios';
import { colors } from '@constants/colors';
import { useUser } from '@contexts/user';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { CustomAxiosError } from 'types';

export default function BusinessForm() {
  // Hooks
  const isFocused = useIsFocused();
  const { goBack } = useNavigation();
  const { token, user, setUser } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    category: '',
  });

  useEffect(() => {
    setFormData((prevState) =>
      user?.business
        ? {
            name: user.business.name,
            address: user.business.address,
            category: user.business.category,
          }
        : prevState
    );
  }, [user, isFocused]);

  // Destructure data
  const { name, address, category } = formData;

  // Handle add business
  async function handleBusinessFormSubmit() {
    try {
      const response = await axiosInstance.patch(
        '/businesses/add',
        {
          ...formData,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Business
      const business = response.data.business;

      // Update state
      setUser(
        (prevState) =>
          prevState && {
            ...prevState,
            business: {
              ...business,
            },
          }
      );

      // Go back
      goBack();
    } catch (err) {
      console.log((err as CustomAxiosError).response?.data.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form_item}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder='Enter business name'
          style={styles.input}
          value={name}
          onChangeText={(name) =>
            setFormData((prevState) => ({
              ...prevState,
              name,
            }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          placeholder='Enter business address'
          style={styles.input}
          value={address}
          onChangeText={(address) =>
            setFormData((prevState) => ({
              ...prevState,
              address,
            }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Category</Text>
        <TextInput
          placeholder='Enter business category'
          style={styles.input}
          value={category}
          onChangeText={(category) =>
            setFormData((prevState) => ({
              ...prevState,
              category,
            }))
          }
        />
      </View>

      <SubmitButton handleSubmit={handleBusinessFormSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },

  form_item: {
    marginBottom: 20,
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
