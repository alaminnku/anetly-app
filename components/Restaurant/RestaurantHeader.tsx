import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { urlFor } from "../../config/sanity";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

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
          navigate("Home");
        }}
      >
        <ArrowLeftIcon color="#2dd4bf" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image_and_back_button: {
    position: "relative",
  },

  image: {
    width: Dimensions.get("window").width,
    height: 200,
  },

  back_button: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#f3f4f6",
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
