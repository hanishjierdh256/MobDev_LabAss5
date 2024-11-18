import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';
import { useState } from 'react';

type ToDoFormPropType = {
  addTask: (task: any) => void,
};

function ToDoForm(props: ToDoFormPropType) {
  const [taskText, setTaskText] = useState("");
  const addTask = props.addTask;

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button
        title="Add"
        onPress={() => {
          addTask(taskText);
          setTaskText('');  // Clear the input after adding
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
