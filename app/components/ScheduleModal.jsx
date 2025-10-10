import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Modal as RNModal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Modal({ visible, onClose, onAddLesson }) {
    const [lessons, setLessons] = useState('');
    const [teacher, setTeacher] = useState('');
    const [classroom, setClassroom] = useState('');
    
    const handleAdd = () => {
        if (lessons.trim() === '') return;
        onAddLesson({ lessons, teacher, classroom });
        setLessons('');
        setTeacher('');
        setClassroom('');
    };
      
    return (
      <RNModal
      
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalOverlay}>
            <KeyboardAvoidingView
            style={styles.keyboardView}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
            
              <View style={styles.modalCard}>
                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                  <Ionicons name="close-outline" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Add New Lesson</Text>
                  <Text style={styles.content}>Subject</Text>
                <TextInput
                  value={lessons}
                  mode='outlined'
                  onChangeText={setLessons}
                  style={styles.inputSubject}
                />
                  <Text style={styles.content}>Teacher</Text>
                  
                <TextInput
                  value={teacher}
                  onChangeText={setTeacher}

                  mode="outlined"
                  style={styles.inputContent}
                />

                <Text style={styles.content}>Classroom</Text>
                 <TextInput
                  value={classroom}
                  onChangeText={setClassroom}
                  mode="outlined"
                  style={styles.inputclass}
                />
      
                <View style={styles.modalButtons}>

                  <TouchableOpacity onPress={handleAdd}
                  activeOpacity={0.8}
                  style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>
                      Add Lesson
                    </Text>
                  </TouchableOpacity>
                 
                  
                </View>
              </View>
                          </KeyboardAvoidingView>
            </View>
            </TouchableWithoutFeedback>
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

    keyboardView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  modalTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },

  inputSubject: {
    marginBottom: 20,
    height: 40,
    backgroundColor: '#89898917',
  },

  inputContent: {
    marginBottom: 20,
    height: 40,
    backgroundColor: '#89898917',
    fontSize: 15,
  },

  inputclass: {
    marginBottom: 20,
    height: 40,
    backgroundColor: '#89898917',
 
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  confirmButton: {
    width: 310,
    borderRadius: 10,
    justifyContent: 'center',
    height: 35,
    alignContent: 'center',
    backgroundColor: '#040009ff',
  },

  confirmButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },

  cancelButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
    padding: 6,

  },

  content: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  
});
