import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import TitleHeader from "./components/TitleHeader";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("tasks-list-app");
        console.log("stored tasks: ", storedTasks);
        if (value !== null) {
          const parsedTasks = JSON.parse(storedTasks);
          setTasks(parsedTasks);
        }
      } catch (e) {
        console.log("error in loading tasks");
      }
    };
    loadTasks();
  }, []);
  const isWhitespaceString = (str) => !/\S/.test(str);

  // const addNewTask = async (newTask) => {
  //   try {
  //     const newTaskList = JSON.stringify([...tasks, newTask]);
  //     await AsyncStorage.setItem("tasks-list-app", newTaskList);
  //     console.log("new task added : ", newTask);
  //   } catch (e) {
  //     console.log("could not add : ", newTask);
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <>
          <View style={styles.taskheader}>
            <Text style={styles.titleSection}>Today's Tasks</Text>
          </View>
          <View style={styles.taskContainer}>
            {tasks.map((task, i) => (
              <Task
                key={i}
                taskText={task.text}
                isComplete={task.isComplete}
                onPressBox={(text) => {
                  const tasksCopy = [...tasks];
                  task_index = tasksCopy.findIndex((obj) => obj.text === text);
                  tasksCopy[task_index].isComplete =
                    !tasksCopy[task_index].isComplete;
                  setTasks(tasksCopy);
                  if (tasksCopy[task_index].isComplete) {
                    // console.log("djdakdjfajl");
                    tasksCopy.push(tasks.splice(task_index, 1)[0]);
                    tasksCopy.splice(task_index, 1);
                    setTasks(tasksCopy);
                  }
                }}
              >
                {task.text}
              </Task>
            ))}
          </View>
        </>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.addTaskContainer}
        >
          <AddTask
            onPress={(task) => {
              if (!isWhitespaceString(task)) {
                setTasks([...tasks, { text: task, isComplete: false }]);
                const addNewTask = async () => {
                  try {
                    const newTaskList = JSON.stringify(tasks);
                    await AsyncStorage.setItem("tasks-list-app", newTaskList);
                    console.log("new task added : ", task);
                  } catch (e) {
                    console.log("could not add : ", task);
                  }
                };
                addNewTask();
              }
              Keyboard.dismiss();
            }}
          ></AddTask>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 31,
    // marginBottom: 300,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  taskheader: {
    // marginTop: ,
    marginHorizontal: 16,
    marginBottom: 9,
    fontWeight: "bold",
  },
  titleSection: {
    fontSize: 30,
  },
  taskContainer: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  addTaskContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    // flex: 1,
  },
  // checkMark: {
  //   color: "#000",
  //   fontSize: 15,
  // },
  // completedTask: {
  //   textDecorationLine: "line-through",
  //   color: "#888",
  // },
});
