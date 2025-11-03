import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal as RNModal } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function LessonEditModal({ visible, onClose, onEditLesson, lessons }) {
    const [lessonName, setLessonName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (lessons) {
            setLessonName(lessons.lessons || '');
            setTeacher(lessons.teacher || '');
            setLocation(lessons.classroom || '');
            setDate(lessons.date || '');
        }
    }, [lessons]);

    const handleSave = () => {
        if (lessonName.trim() === '') return;
        onEditLesson({ 
            lessons: lessonName, 
            teacher: teacher,
            classroom: location,
            date: date
        });
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
                    <Text style={styles.modalTitle}>Edit Lesson</Text>
                    <TextInput
                        placeholder="Lesson Name"
                        value={lessonName}
                        onChangeText={setLessonName}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Teacher"
                        value={teacher}
                        onChangeText={setTeacher}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Classroom/Location"
                        value={location}
                        onChangeText={setLocation}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Day (e.g., monday)"
                        value={date}
                        onChangeText={setDate}
                        mode="outlined"
                        style={styles.input}
                    />
                    <View style={styles.modalButtons}>
                        <Button
                            mode="contained"
                            onPress={handleSave}
                            style={styles.confirmButton}
                        >
                            Save
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={onClose}
                            style={styles.cancelButton}
                        >
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