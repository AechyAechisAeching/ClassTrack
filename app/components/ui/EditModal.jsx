import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal as RNModal } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function EditModal({ visible, onClose, onEditTask, task }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTaskName(task.task);
      setDescription(task.description || '');
    }
  }, [task]);

  const handleSave = () => {
    if (taskName.trim() === '') return;
    onEditTask({ task: taskName, description });
  };

  return (
    <RNModal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>Edit Task</Text>
          <TextInput
            placeholder="Task Name"
            value={taskName}
            onChangeText={setTaskName}
            mode="outlined"
            style={styles.input}/>
          <TextInput
            placeholder="Task Description"
            value={description}
            onChangeText={setDescription}
            mode="outlined"
            style={styles.input} />
          <View style={styles.modalButtons}>
            <Button
              mode="contained"
              onPress={handleSave}
              style={styles.confirmButton}>
              Save
            </Button>
            <Button
              mode="outlined"
              onPress={onClose}
              style={styles.cancelButton}>
              Cancel
            </Button>
          </View>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },

  modalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '85%',
    elevation: 5,
  },

  modalTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },

  input: {
    marginBottom: 20,
    height: 50,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  confirmButton: {
    backgroundColor: '#040009ff',
  },
  
  cancelButton: {
    borderColor: '#040009ff',
  },
  
});