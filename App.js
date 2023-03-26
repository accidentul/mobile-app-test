import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add data"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        {tasksList.map((item, index) => (
          <View style={styles.task} key={index}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    flex: 1,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tasksContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontWeight: "bold"
  },
  deleteButtonText: {
    color: 'blue',
  },
});