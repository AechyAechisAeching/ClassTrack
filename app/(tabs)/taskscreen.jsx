import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'react-native-paper';
import Modal from '../components/TaskModal';
import Task from '../components/Task';

export default function TasksScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons name="checkbox" size={30} color="black" style={styles.icon}
            />
            <Text style={styles.headerText}>Tasks</Text>
          </View>

          <Button
            icon="plus"
            mode="contained"
            onPress={() => setModalVisible(true)}
            style={styles.Button}
            labelStyle={styles.Label}>
            Add Task
          </Button>
        </View>
        {tasks.length === 0 ? (
        <View style={styles.noTasks}>
          <Text style={styles.noTasksText}>
            
             No tasks yet. Add your first task to get started!
             
          </Text>
        </View>
        ) : (
        <View style={styles.items}>
          {tasks.map((item, index) => (
            <Task key={index} text={item.task} description={item.description} />
          ))}
        </View>
        )}
        <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAddTask={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  SafeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  icon: {
    marginTop: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: '700',
  },

  Button: {
    marginTop: 10,
    marginLeft: 130,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#040009ff',
    paddingHorizontal: 13,
    paddingVertical: 3,
  },

  Label: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
  noTasks: {
     marginTop: 40,
     backgroundColor: '#ffffff1b',
     borderRadius: 12,
     borderColor: '#6e6e6e32',
     borderWidth: 1,
     padding: 16,
     marginVertical: 10,
     marginHorizontal: 10,
  },

  noTasksText: {
    padding: 10,
    color: 'grey',
  },

  items: {
    marginTop: 20,
  },
  
});
