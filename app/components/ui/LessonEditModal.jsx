import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal as RNModal } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Dropdown } from "react-native-element-dropdown";

export default function LessonEditModal({ visible, onClose, onEditLesson, lessons }) {
    const [lessonName, setLessonName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [day, setDay] = useState(null);

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
                      <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "black" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={[
                { label: "Monday", value: "monday"},
                { label: "Tuesday", value: "tuesday"},
                { label: "Wednesday", value: "wednesday"},
                { label: "Thursday", value: "thursday"},
                { label: "Friday", value: "friday"},
                { label: "Saturday", value: "saturday"},
                { label: "Sunday", value: "sunday"},
                ]}
               
                labelField="label"
                valueField="value"
                mode='modal'
                placeholder={!isFocus ? "Choose day" : "What day"}
                value={day}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(day) => {
                  setDay(day.value);
                  setIsFocus(false);
                }}
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

    dropdownarea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropdown: {
    marginBottom: 25,
    height: 40,
    borderColor: "#0000006b",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: 310,
    backgroundColor: '#fff',
  },
  
});