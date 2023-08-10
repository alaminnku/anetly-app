import { colors } from '@constants/colors';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  ArrowRightIcon,
  QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';

export default function Allergy() {
  return (
    <TouchableOpacity style={styles.allergy}>
      <View style={styles.question_and_text}>
        <QuestionMarkCircleIcon
          style={styles.question_icon}
          color={colors.gray}
          size={25}
        />

        <Text style={styles.allergy_text}>Have a food allergy?</Text>
      </View>

      <ArrowRightIcon color={colors.primary} size={25} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  allergy: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },

  question_and_text: {
    flexDirection: 'row',
  },

  question_icon: {
    marginRight: 10,
  },

  allergy_text: {
    fontWeight: '500',
    fontSize: 18,
  },
});
