import SubmitButton from '@components/layout/SubmitButton';
import { colors } from '@constants/colors';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function ItemForm() {
  // Hooks
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });

  // Destructure data
  const { name, price, image, description } = formData;

  // Handle add item
  async function addItem() {
    console.log(formData);
  }

  return (
    <View style={styles.container}>
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
