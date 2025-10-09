import React, { useState } from 'react';
import { View, Text, StyleSheet, multiline, Modal as RNModal } from 'react-native';
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
          <Text style={styles.modalTitle}>Add New Note</Text>
            <Text style={styles.content}>Title</Text>
          <TextInput
            placeholder="Write your title..."
            value={note}
            onChangeText={setNotes}
            mode="outlined"
            style={styles.inputTitle}
          />
            <Text style={styles.content}>Content</Text>
            
          <TextInput
            placeholder="Write your note here..."
            multiline={true}
            value={description}
            onChangeText={setDescription}
            mode="outlined"
            textAlignVertical= "top"
            style={styles.inputContent}
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
    marginBottom: 6,
  },

  inputTitle: {
    marginBottom: 10,
    height: 50,
  },

  inputContent: {
    marginBottom: 20,
    height: 100,
    fontSize: 15,
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

  content: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  
});
