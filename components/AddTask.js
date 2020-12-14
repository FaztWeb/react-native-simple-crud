import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleChange = (text) => setTitle(text);

  const handlePress = () => {
    addTask(title);
    setTitle("");
    Keyboard.dismiss();
    // inputTitle.current.focus();
  };

  return (
    <View>
      <TextInput
        placeholder="Write your Task"
        style={styles.input}
        onChangeText={handleChange}
        value={title}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} />
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#83ABC5",
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
