import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <RootNavigator /> */}
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
