import { View, Text, StyleSheet } from "react-native";
import {
  ArrowRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";

export default function Allergy() {
  return (
    <View style={styles.allergy}>
      <View style={styles.question_and_text}>
        <QuestionMarkCircleIcon
          style={styles.question_icon}
          color="#6b7280"
          size={25}
        />

        <Text style={styles.allergy_text}>Have a food allergy?</Text>
      </View>

      <ArrowRightIcon color="#3b82f6" size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  allergy: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },

  question_and_text: {
    flexDirection: "row",
  },

  question_icon: {
    marginRight: 10,
  },

  allergy_text: {
    fontWeight: "500",
    fontSize: 18,
  },
});
