import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@constants/colors';

interface IProps {
  handleSubmit: () => void;
}

export default function SubmitButton({ handleSubmit }: IProps) {
  return (
    <TouchableOpacity style={styles.submit_button} onPress={handleSubmit}>
      <Text style={styles.button_text}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit_button: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },

  button_text: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
});