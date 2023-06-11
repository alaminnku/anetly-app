import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Search from "../components/Home/Search";
import Categories from "../components/Home/Categories";
import Header from "../components/Home/Header";
import FeaturedRows from "../components/Home/FeaturedRows";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  // Create navigation
  const navigation = useNavigation();

  // Remove default navigation name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
    backgroundColor: "#ffffff",
    marginBottom: 100,
  },

  body: {
    backgroundColor: "#f3f4f6",
  },
});
