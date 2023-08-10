import { ScrollView, StyleSheet } from 'react-native';
import Category from './Category';
import { useEffect, useState } from 'react';
import sanityClient from '@config/sanity';
import { ICategory } from '../../types';

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  // Fetch categories
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"] {
          _id,
          name,
          image,
        }`
      )
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView
      style={styles.categories}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <Category
          key={category._id}
          _id={category._id}
          name={category.name}
          image={category.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categories: {
    margin: 15,
    marginRight: 5,
  },
});
