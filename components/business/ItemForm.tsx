import SubmitButton from '@components/layout/SubmitButton';
import { axiosInstance } from '@config/axios';
import { colors } from '@constants/colors';
import { useUser } from '@contexts/user';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { CustomAxiosError, IItem } from 'types';

export default function ItemForm() {
  // Hooks
  const isFocused = useIsFocused();
  const { goBack } = useNavigation();
  const { user, token, setUser } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });

  useEffect(() => {}, [user, isFocused]);

  // Destructure data
  const { name, price, image, description } = formData;

  // Handle add item
  async function addItem() {
    try {
      // Make request to the backend
      const response = await axiosInstance.patch(
        '/business/add-item',
        { ...formData },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Get items
      const items: IItem[] = response.data.items;

      // Update state
      setUser(
        (prevState) =>
          prevState && {
            ...prevState,
            business: prevState.business && {
              ...prevState.business,
              items: items,
            },
          }
      );

      // Go back to business page
      goBack();
    } catch (err) {
      console.log((err as CustomAxiosError).response?.data.message);
    }
  }

  return (
    <View>
      <View style={styles.form_item}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter item name'
          value={name}
          onChangeText={(name) =>
            setFormData((prevState) => ({ ...prevState, name }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter item description'
          value={description}
          onChangeText={(description) =>
            setFormData((prevState) => ({ ...prevState, description }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter item price'
          value={price}
          onChangeText={(price) =>
            setFormData((prevState) => ({ ...prevState, price }))
          }
        />
      </View>

      <View style={styles.form_item}>
        <Text style={styles.label}>Image</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter item image'
          value={image}
          onChangeText={(image) =>
            setFormData((prevState) => ({ ...prevState, image }))
          }
        />
      </View>

      <SubmitButton handleSubmit={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
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
