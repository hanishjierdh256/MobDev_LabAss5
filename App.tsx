/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (task: string) => {
    let taskArray = [...tasks, task];
    setTasks(taskArray);
  };

  return (
    <View>
      <Text style={styles.headingText}>My To-do List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default App;
