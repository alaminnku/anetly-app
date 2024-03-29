import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import * as Progress from 'react-native-progress';
import { useUser } from '@contexts/user';
import { colors } from '@constants/colors';

export default function OrderScreen() {
  // Hooks
  const { navigate } = useNavigation();
  const { token } = useUser();
  const isFocused = useIsFocused();

  // Handle navigation
  useEffect(() => {
    if (!token) {
      navigate('Login');
    }
  }, [token, isFocused]);

  // Navigate after 4 seconds
  useEffect(() => {
    // Create timeout
    const timeoutId = setTimeout(() => {
      navigate('Delivery');
    }, 4000);

    // Clean up
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={styles.animation}
        source={require('../assets/delivery.json')}
      />

      <Text style={styles.message}>
        Waiting for restaurant to accept your order!{' '}
      </Text>

      <Progress.Circle color={colors.primary} indeterminate={true} size={60} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },

  animation: {
    width: 400,
    height: 400,
  },

  message: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 60,
    color: colors.white,
  },

  loader: {
    width: 150,
    height: 150,
  },
});
