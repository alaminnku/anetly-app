import { SafeAreaView, ScrollView } from 'react-native';
import Search from '../components/home/Search';
import Categories from '../components/home/Categories';
import Header from '../components/home/Header';
import FeaturedRows from '../components/home/FeaturedRows';
import { StyleSheet } from 'react-native';

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
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
