import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

export default function HomeScreen() {
  const navigation = useNavigation();

  // Remove default navigation name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo_and_title}>
          <Image style={styles.logo} source={require("../assets/logo.avif")} />

          <View>
            <Text style={styles.delivery}>Deliver now</Text>
            <Text style={styles.location}>
              Current location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search */}
      <View style={styles.search}>
        <View style={styles.search_input}>
          <MagnifyingGlassIcon color="gray" />
          <TextInput
            placeholder="Restaurant and cuisine"
            keyboardType="default"
          />
        </View>

        <AdjustmentsHorizontalIcon color="#00ccbb" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
    backgroundColor: "white",
    justifyContent: "space-between",
  },

  logo_and_title: {
    flexDirection: "row",
  },

  logo: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: "#d4d2d2",
  },

  delivery: {
    fontWeight: "bold",
    color: "#adacac",
    marginBottom: 2,
  },

  location: {
    fontWeight: "bold",
    fontSize: 20,
  },

  search: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  search_input: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#e6e5e5",
  },
});
