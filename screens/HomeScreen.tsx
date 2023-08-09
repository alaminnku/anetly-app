import { SafeAreaView, ScrollView } from 'react-native';
import Search from '../components/home/Search';
import Categories from '../components/home/Categories';
import FeaturedRows from '../components/home/FeaturedRows';
import { StyleSheet } from 'react-native';
import MenuHeader from '@components/layout/MenuHeader';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <MenuHeader title='Home' />
      <Search />
      <ScrollView style={styles.body}>
        <Categories />
        <FeaturedRows />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginBottom: 100,
    backgroundColor: '#ffffff',
  },

  body: {
    backgroundColor: '#f3f4f6',
  },
});
