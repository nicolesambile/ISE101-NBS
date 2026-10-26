import React_nbs, { useState as useState_nbs } from "react";
import {
  FlatList as FlatList_nbs,
  StyleSheet as StyleSheet_nbs,
  Text as Text_nbs,
  TextInput as TextInput_nbs,
  TouchableOpacity as TouchableOpacity_nbs,
  View as View_nbs,
} from "react-native";
import Footer_nbs from "../components/Footer";
import Header_nbs from "../components/Header";
import TaskItem_nbs from "../components/TaskItem";

const initialTasks_nbs = [
  { id: "1", text: "Read React docs" },
  { id: "2", text: "Finish homework" },
  { id: "3", text: "Buy groceries" },
];

export default function TaskScreen_nbs() {
  const [task_nbs, setTask_nbs] = useState_nbs("");
  const [tasks_nbs, setTasks_nbs] = useState_nbs(initialTasks_nbs);
  const [nextTaskId_nbs, setNextTaskId_nbs] = useState_nbs(initialTasks_nbs.length + 1);

  const addTask_nbs = () => {
    const trimmedTask_nbs = task_nbs.trim();
    if (!trimmedTask_nbs) return;

    setTasks_nbs((currentTasks_nbs) => [
      ...currentTasks_nbs,
      { id: String(nextTaskId_nbs), text: trimmedTask_nbs },
    ]);
    setNextTaskId_nbs((currentId_nbs) => currentId_nbs + 1);
    setTask_nbs("");
  };

  const deleteTask_nbs = (taskId_nbs) => {
    setTasks_nbs((currentTasks_nbs) =>
      currentTasks_nbs.filter((currentTask_nbs) => currentTask_nbs.id !== taskId_nbs),
    );
  };

  return (
    <View_nbs style={styles_nbs.container}>
      <Header_nbs />
      <View_nbs style={styles_nbs.body}>
        <Text_nbs style={styles_nbs.title}>Task Manager</Text_nbs>
        <TextInput_nbs
          style={styles_nbs.input}
          placeholder="Enter a new task"
          value={task_nbs}
          onChangeText={setTask_nbs}
          onSubmitEditing={addTask_nbs}
          returnKeyType="done"
        />
        <TouchableOpacity_nbs
          accessibilityRole="button"
          onPress={addTask_nbs}
          style={styles_nbs.addButton}
        >
          <Text_nbs style={styles_nbs.addButtonText}>Add Task</Text_nbs>
        </TouchableOpacity_nbs>
        <FlatList_nbs
          style={styles_nbs.list}
          data={tasks_nbs}
          keyExtractor={(item_nbs) => item_nbs.id}
          renderItem={({ item: item_nbs }) => (
            <TaskItem_nbs
              task={item_nbs.text}
              onDelete={() => deleteTask_nbs(item_nbs.id)}
            />
          )}
          ListEmptyComponent={
            <Text_nbs style={styles_nbs.empty}>No tasks yet. Add one above.</Text_nbs>
          }
        />
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
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#207bf1",
    borderRadius: 5,
    padding: 12,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    marginTop: 12,
  },
  empty: {
    color: "#5b6b5b",
    paddingVertical: 16,
    textAlign: "center",
  },
});