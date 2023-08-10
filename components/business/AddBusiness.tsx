import SubmitButton from '@components/layout/SubmitButton';
import { axiosInstance } from '@config/axios';
import { colors } from '@constants/colors';
import { useUser } from '@contexts/user';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { CustomAxiosError } from 'types';

export default function AddBusiness() {
  // Hooks
  const { token } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    category: '',
  });

  // Destructure data
  const { name, address, category } = formData;

  // Handle add business
  async function handleAddBusiness() {
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

      console.log(response);
    } catch (err) {
      console.log((err as CustomAxiosError).response?.data.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form_item}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          autoCapitalize='none'
          placeholder='Enter business name'
          style={styles.input}
          value={name}
          onChangeText={(name) =>
            setFormData((currState) => ({
              ...currState,
              name,
            }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          autoCapitalize='none'
          placeholder='Enter business address'
          style={styles.input}
          value={address}
          onChangeText={(address) =>
            setFormData((currState) => ({
              ...currState,
              address,
            }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Category</Text>
        <TextInput
          autoCapitalize='none'
          placeholder='Enter business category'
          style={styles.input}
          value={category}
          onChangeText={(category) =>
            setFormData((currState) => ({
              ...currState,
              category,
            }))
          }
        />
      </View>

      <SubmitButton handleSubmit={handleAddBusiness} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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
