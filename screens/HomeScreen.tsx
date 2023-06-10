import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Search from "../components/Home/Search";
import Categories from "../components/Home/Categories";
import Header from "../components/Home/Header";
import FeaturedRows from "../components/Home/FeaturedRows";

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
    <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
      <Header />
      <Search />

      <ScrollView
        style={{ backgroundColor: "#f3f4f6" }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        <FeaturedRows />
      </ScrollView>
    </SafeAreaView>
  );
}
