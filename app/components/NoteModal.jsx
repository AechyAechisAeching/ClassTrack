import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal as RNModal } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Modal({ visible, onClose, onAddNote }) {
  const [note, setNotes] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (note.trim() === '') return;
    onAddNote({ note, description });
    setNotes('');
    setDescription('');
  };

  return (
    <RNModal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>Add a New Note</Text>

          <TextInput
            placeholder="Note Name"
            value={note}
            onChangeText={setNotes}
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            placeholder="Note Description"
            value={description}
            onChangeText={setDescription}
            mode="outlined"
            style={styles.input}
          />

          <View style={styles.modalButtons}>
            <Button
              mode="contained"
              onPress={handleAdd}
              style={styles.confirmButton} >
              Add
            </Button>

            <Button
              mode="outlined"
              onPress={onClose}
              style={styles.cancelButton} >
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
