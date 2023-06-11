import { View, Image, StyleSheet, Text } from "react-native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo_and_title}>
        <Image style={styles.logo} source={require("../../assets/logo.avif")} />

        <View>
          <Text style={styles.delivery}>Deliver now</Text>

          <View style={styles.location}>
            <Text style={styles.location_text}>Current location</Text>
            <ChevronDownIcon size={20} color="#3b82f6" />
          </View>
        </View>
      </View>

      <UserIcon size={35} color="#3b82f6" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    marginTop: 0,
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
    flexDirection: "row",
    alignItems: "center",
  },

  location_text: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 5,
  },
});
