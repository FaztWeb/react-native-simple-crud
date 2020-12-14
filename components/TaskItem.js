import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

const TaskItem = ({ task, index, deleteTask }) => {
  return (
    <TouchableOpacity style={styles.taskItem}>
      <View style={styles.taskView}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>{index}.</Text>
          <Text style={styles.listTaskItem}>{task.name}</Text>
        </View>
        <Icon
          name="trash"
          size={20}
          color="#D0666A"
          onPress={() => deleteTask(task.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  taskView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listTaskItem: {
    fontSize: 18,
    marginLeft: 5,
  },
});

TaskItem.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
