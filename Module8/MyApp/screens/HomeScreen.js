import React_nbs from "react";
import {
  StyleSheet as StyleSheet_nbs,
  Text as Text_nbs,
  View as View_nbs,
} from "react-native";
import Footer_nbs from "../components/Footer";
import Header_nbs from "../components/Header";

export default function HomeScreen_nbs() {
  return (
    <View_nbs style={styles_nbs.container}>
      <Header_nbs />
      <View_nbs style={styles_nbs.body}>
        <Text_nbs style={styles_nbs.text}>Welcome to your first screen!</Text_nbs>
        <Text_nbs style={styles_nbs.text}>This is built using JSX and components.</Text_nbs>
      </View_nbs>
      <Footer_nbs />
    </View_nbs>
  );
}

const styles_nbs = StyleSheet_nbs.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
});