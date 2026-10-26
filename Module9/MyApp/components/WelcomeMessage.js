import React_nbs from "react";
import {
  StyleSheet as StyleSheet_nbs,
  Text as Text_nbs,
  View as View_nbs,
} from "react-native";

export default function WelcomeMessage_nbs({ name: name_nbs, section: section_nbs }) {
  return (
    <View_nbs style={styles_nbs.container}>
      <Text_nbs style={styles_nbs.greeting}>Hello, {name_nbs}!</Text_nbs>
      <Text_nbs style={styles_nbs.section}>BSIS Section {section_nbs}</Text_nbs>
    </View_nbs>
  );
}

const styles_nbs = StyleSheet_nbs.create({
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