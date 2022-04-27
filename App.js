import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import DishDetailScreen from "./src/screens/DishDetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <DishDetailScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
