import React_nbs from "react";
import {
  StyleSheet as StyleSheet_nbs,
  Text as Text_nbs,
  View as View_nbs,
} from "react-native";

export default function Footer_nbs() {
  return (
    <View_nbs style={styles_nbs.footer}>
      <Text_nbs style={styles_nbs.text}>© 202 Student App Project</Text_nbs>
    </View_nbs>
  );
}

const styles_nbs = StyleSheet_nbs.create({
  footer: {
    padding: 10,
    backgroundColor: "#9ed0ec",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#5b6b5b",
  },
});