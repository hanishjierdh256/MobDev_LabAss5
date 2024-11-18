/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {

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
        <MainLayout>
            <View>
                <Text style={styles.headingText}>My To-do List</Text>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}

                />
            </View>
        </MainLayout>
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

export default HomeScreen;
