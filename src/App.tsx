/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';

function App() {

  // const [tasks, setTasks] = useState([
  //   'Do laundry',
  //   'Go to gym',
  //   'Walk dog',
  // ]);

  // const addTask = (task: string) => {
  //   let taskArray = [...tasks, task];
  //   setTasks(taskArray);
  // };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text style={styles.headingText}>My To-do List</Text>
    //   <ToDoList tasks={tasks} />
    //   <ToDoForm addTask={addTask} />
    // </View>
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
