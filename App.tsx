import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import "react-native-url-polyfill/auto";
import RestaurantScreen from "./screens/RestaurantScreen";
import { RootStackParamList } from "./types";
import BasketProvider from "./contexts/basket";
import BasketScreen from "./screens/BasketScreen";
import OrderScreen from "./screens/OrderScreen";

// Create stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <BasketProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="Order"
            component={OrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </BasketProvider>
    </NavigationContainer>
  );
}
