import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";

import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

import { data } from "./data";

const App = () => {
  const [tasks, setTasks] = useState(data);

  const deleteTask = (id) => {
    Alert.alert("Delete A Task", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          setTasks([...tasks.filter((task) => task.id !== id)]);
        },
      },
    ]);
  };

  const addTask = (name) => {
    if (!name) {
      return Alert.alert("Error", "Please provide a name", [
        {
          text: "Ok",
        },
      ]);
    }
    setTasks([{ id: uuidv4(), name }, ...tasks]);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await response.json();
      setTasks([...data.map(({ id, title }) => ({ id, name: title }))]);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={`Tasks - (${tasks.length}) pending`} />
      <AddTask addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem task={item} index={index + 1} deleteTask={deleteTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#F1F1F1",
  },
});

export default App;
