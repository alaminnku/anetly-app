import { View, SafeAreaView, ScrollView } from 'react-native';
import Search from '@components/home/Search';
import FeaturedRows from '@components/home/FeaturedRows';
import MenuHeader from '@components/layout/MenuHeader';
import { colors } from '@constants/colors';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MenuHeader title='Home' />

      <Search />

      <ScrollView style={{ backgroundColor: colors.almostWhite }}>
        <FeaturedRows />
      </ScrollView>
    </View>
  );
}
