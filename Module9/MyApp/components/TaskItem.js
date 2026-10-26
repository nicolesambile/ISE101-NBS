import React_nbs from "react";
import {
  StyleSheet as StyleSheet_nbs,
  Text as Text_nbs,
  TouchableOpacity as TouchableOpacity_nbs,
  View as View_nbs,
} from "react-native";

export default function TaskItem_nbs({ task: task_nbs, onDelete: onDelete_nbs }) {
  return (
    <View_nbs style={styles_nbs.item}>
      <Text_nbs style={styles_nbs.text}>{task_nbs.toUpperCase()}</Text_nbs>
      <TouchableOpacity_nbs
        accessibilityRole="button"
        accessibilityLabel={`Delete ${task_nbs}`}
        onPress={onDelete_nbs}
      >
        <Text_nbs style={styles_nbs.delete}>Delete</Text_nbs>
      </TouchableOpacity_nbs>
    </View_nbs>
  );
}

const styles_nbs = StyleSheet_nbs.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 5,
    backgroundColor: "#e0f7fa",
    borderRadius: 8,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  delete: {
    color: "#c62828",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 12,
  },
});