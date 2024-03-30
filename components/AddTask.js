import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { useState } from "react";

const AddTask = (props) => {
  const [task, setTask] = useState("");

  const onPressAdd = () => {
    props.onPress(task);
    setTask("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.newTask}
        placeholder='New Task'
        onChangeText={setTask}
        value={task}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPressAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  newTask: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    fontSize: 17,
    borderRadius: 10,
  },
  buttonText: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "green",
  },
});

export default AddTask;
