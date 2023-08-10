import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { urlFor } from '@config/sanity';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { colors } from '@constants/colors';

interface IRestaurantHeaderProps {
  logo: {
    asset: {
      _ref: string;
    };
  };
}

export default function RestaurantHeader({ logo }: IRestaurantHeaderProps) {
  // Navigation
  const { navigate } = useNavigation();

  return (
    <View style={styles.image_and_back_button}>
      <Image
        style={styles.image}
        source={{ uri: urlFor(logo.asset._ref).url() }}
      />

      <TouchableOpacity
        style={styles.back_button}
        onPress={() => {
          navigate('Root');
        }}
      >
        <ArrowLeftIcon color={colors.primary} size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image_and_back_button: {
    position: 'relative',
  },

  image: {
    height: 200,
    width: Dimensions.get('window').width,
  },

  back_button: {
    top: 60,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.almostWhite,
  },
});
