import { View, Image, StyleSheet, Text } from "react-native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo_and_title}>
        <Image style={styles.logo} source={require("../../assets/logo.avif")} />

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
});
