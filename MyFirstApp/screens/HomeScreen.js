import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WelcomeMessage from "../components/WelcomeMessage";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <WelcomeMessage name="Nicole" section="3A" />
        <Text style={styles.text}>Welcome to your first screen!</Text>
        <Text style={styles.text}>This is built using JSX and components.</Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
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