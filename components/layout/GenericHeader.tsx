import { colors } from '@constants/colors';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
} from 'react-native-heroicons/outline';

interface IProps {
  title: string;
}

export default function GenericHeader({ title }: IProps) {
  // Hooks
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back_button} onPress={() => goBack()}>
        <ArrowLeftIcon color={colors.primary} size={20} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 15,
  },

  back_button: {
    borderRadius: 100,
    width: 40,
    height: 40,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.almostWhite,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
