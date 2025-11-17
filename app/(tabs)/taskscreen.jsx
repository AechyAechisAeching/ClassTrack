import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Button } from 'react-native-paper';
import Modal from '../components/ui/TaskModal';
import Task from '../components/Task';
import EditModal from '../components/ui/EditModal';
import { useApp } from '../context/AppContext';
import ViewModal from '../components/ui/ViewModal';

export default function TasksScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const { tasks, setTasks, isLoading } = useApp();
  const [editingTask, setEditingTask] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [ViewmodalVisible, setViewModalVisible] = useState(false);
  const [viewingTask, setViewingTask] = useState(null);
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModalVisible(false);
  };

  const openViewModal = (index) => {
  setViewingTask(tasks[index]);
  setViewModalVisible(true);
  };

  const closeViewModal = () => {
  setViewModalVisible(false);
  setViewingTask(null);
}
  const toggleTaskCompletion = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
};
  const handleEditTask = (updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = updatedTask;
    setTasks(updatedTasks);
    setEditModalVisible(false);
    setEditingTask(null);
    setEditingIndex(null);
  }



  const openEditModal = (index) => {
    setEditingTask(tasks[index]);
    setEditingIndex(index)
    setEditModalVisible(true);
  }

 const closeEditModal = () => {
    setEditModalVisible(false);
    setEditingTask(null);
    setEditingIndex(null);
  };
  const removeTask = (removeItem) => {
    setTasks(tasks.filter((_,index) => index !== removeItem));
  }

  if (isLoading) {
    return(
      <SafeAreaView style={styles.SafeArea}>
        <View style={[styles.container, styles.Content]}>
          <ActivityIndicator size="large" color="#040009ff" />
        </View>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView>
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
    <View key={index} style={styles.taskContainer}>
      <Task text={item.task} description={item.description} priority={item.priority} completed={item.completed || false}
      onToggleComplete={() => toggleTaskCompletion(index)}
      onRemove={() => removeTask(index)}
      onEdit={() => openEditModal(index)}
      onView={() => openViewModal(index)}
      onPriorityChange={(value) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].priority = value;
        setTasks(updatedTasks);
      }}
      />
    </View>
  ))}
        </View>
        )}
        <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAddTask={handleAddTask} />

          <ViewModal
            visible={ViewmodalVisible}
            onClose={closeViewModal}
            task={viewingTask}/>
          <EditModal
          visible={editModalVisible}
          onClose={closeEditModal}
          onEditTask={handleEditTask}
          task={editingTask}
          />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  SafeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
  
  taskContainer: {
    fontSize: 16,
    fontWeight: '500',
  },

});
