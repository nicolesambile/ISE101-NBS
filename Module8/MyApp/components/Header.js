import React_nbs from "react";
import {
  StyleSheet as StyleSheet_nbs,
  Text as Text_nbs,
  View as View_nbs,
} from "react-native";

export default function Header_nbs() {
  return (
    <View_nbs style={styles_nbs.header}>
      <Text_nbs style={styles_nbs.title}>Student Task &amp; Blog App</Text_nbs>
    </View_nbs>
  );
}

const styles_nbs = StyleSheet_nbs.create({
  header: {
    padding: 20,
    backgroundColor: "#5377da",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});