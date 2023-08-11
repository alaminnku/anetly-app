import { colors } from '@constants/colors';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowLeftCircleIcon } from 'react-native-heroicons/outline';

interface IProps {
  title: string;
}

export default function GenericHeader({ title }: IProps) {
  // Hooks
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <ArrowLeftCircleIcon
          size={30}
          color={colors.primary}
          style={{ marginRight: 15 }}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
