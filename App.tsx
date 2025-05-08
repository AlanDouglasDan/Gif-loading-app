import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StackNav from "./src/navigation/StackNav";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
