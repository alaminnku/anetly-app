import { View, TextInput, StyleSheet } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

export default function Search() {
  return (
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
  );
}

const styles = StyleSheet.create({
  search: {
    paddingHorizontal: 15,
    marginBottom: 15,
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
