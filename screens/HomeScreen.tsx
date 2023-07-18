import { SafeAreaView, ScrollView } from "react-native";
import Search from "../components/Home/Search";
import Categories from "../components/Home/Categories";
import Header from "../components/Home/Header";
import FeaturedRows from "../components/Home/FeaturedRows";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { useUser } from "../contexts/user";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  // Hooks
  const { token } = useUser();
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  // Handle navigation
  useEffect(() => {
    if (!token) {
      navigate("Login");
    }
  }, [token, isFocused]);

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
