import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Student App Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#5b6b5b",
  },
});