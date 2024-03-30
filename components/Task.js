import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

const Task = ({ children, taskText, isComplete, onPressBox }) => {
  const markComplete = () => {
    onPressBox(taskText);
  };
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <TouchableOpacity onPress={markComplete}>
          <View style={styles.checkBox}>
            {isComplete && <Text style={styles.checkMark}>&#10003;</Text>}
          </View>
        </TouchableOpacity>
        <Text style={[styles.itemText, isComplete && styles.completedTask]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowRadius: 14,
    shadowOpacity: 0.8,
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  checkBox: {
    width: 24,
    height: 24,
    backgroundColor: "#8DDFDA66",
    opacity: 0.4,
    marginRight: 16,
  },
  itemText: {
    fontSize: 17,
  },
  checkMark: {
    color: "#000",
    fontSize: 15,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});

export default Task;
