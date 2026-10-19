import React_nbs from "react";
import {
  StyleSheet as StyleSheet_nbs,
  Text as Text_nbs,
  View as View_nbs,
} from "react-native";

export default function App_nbs() {
  return (
    <View_nbs style={styles_nbs.container}>
      <Text_nbs style={styles_nbs.title}>Hello, I'm Nicole!</Text_nbs>
      <Text_nbs style={styles_nbs.subtitle}>BSIS 3A</Text_nbs>
    </View_nbs>
  );
}

const styles_nbs = StyleSheet_nbs.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3189ec",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555555",
    marginTop: 4,
  },
});