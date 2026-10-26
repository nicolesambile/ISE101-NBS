import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WelcomeMessage({ name, section }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {name}!</Text>
      <Text style={styles.section}>BSIS Section {section}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
  },
  section: {
    color: "#24527a",
    fontSize: 16,
  },
});