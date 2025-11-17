import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from '../components/ui/ScheduleModal';
import { useState } from 'react';
import Schedule from '../components/Schedule';
import LessonEditModal from '../components/ui/LessonEditModal';
import { useApp } from '../context/AppContext';
import ViewModal from '../components/ui/LessonViewModal';

export default function ScheduleScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const { lessons, setLessons } = useApp();
    const [editLessonModalVisible, setLessonEditModalVisible] = useState(false);
    const [editingLesson, setEditingLesson] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [ViewmodalVisible, setViewModalVisible] = useState(null);
    const [viewingLesson, setViewingLesson] = useState(null);

    const handleAddLesson = (newLesson) => {
        setLessons([...lessons, newLesson]);
        setModalVisible(false);
    };
     
   const handleEditLesson = (updatedLesson) => {
    const updatedLessons = [...lessons];
    updatedLessons[editingIndex] = updatedLesson;
    setLessons(updatedLessons);
    setLessonEditModalVisible(false);
    setEditingLesson(null);
    setEditingIndex(null);
}

const openLessonEditModal = (index) => {
    setEditingLesson(lessons[index]);
    setEditingIndex(index);
    setLessonEditModalVisible(true);
}
 const closeLessonEditModal = () => {
    setLessonEditModalVisible(false);
    setEditingLesson(null);
    setEditingIndex(null);
 };

 const openViewModal = (index) => {
  setViewingLesson(lessons[index]);
  setViewModalVisible(true);
 };

 const closeViewModal = () => {
  setViewingLesson(null);
  setViewModalVisible(false);
 };

 const removeLesson = (removeItem) => {
    setLessons(lessons.filter((_,index) => index !== removeItem));
 }

    return (
      <SafeAreaView style={styles.SafeArea}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Ionicons
                  name="calendar-outline"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={styles.headerText}>Schedule</Text>
              </View>
              <Button
                icon="plus"
                mode="contained"
                onPress={() => setModalVisible(true)}
                style={styles.Button}
                labelStyle={styles.Label}
              >
                Add Lesson
              </Button>
            </View>

            {lessons.length === 0 ? (
              <View style={styles.scheduledLessons}>
                <Text style={styles.ScheduleInfo}>
                  No Lessons scheduled yet. Add your first lesson to get
                  started!
                </Text>
              </View>
            ) : (
              <View style={styles.items}>
                {lessons.map((item, index) => (
                  <Schedule
                    key={index}
                    text={item.lessons}
                    description={item.teacher}
                    location={item.classroom}
                    date={item.date}
                    OnView={() => openViewModal(index)}
                    onEdit={() => openLessonEditModal(index)}
                    onRemove={() => removeLesson(index)}
                  />
                ))}
              </View>
            )}
            <Modal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onAddLesson={handleAddLesson}
            />

            <ViewModal
            visible={ViewmodalVisible}
            onClose={closeViewModal}
            lessons={viewingLesson}
            />
            <LessonEditModal
              visible={editLessonModalVisible}
              onClose={closeLessonEditModal}
              onEditLesson={handleEditLesson}
              lessons={editingLesson}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );};

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
        marginBottom: 20,
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
        marginLeft: 100,
        marginTop: 13,
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: "#040009ff",
        paddingHorizontal: 5,
        paddingVertical: 3,
    },

    Label: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
    },
    
    scheduledLessons: {
      marginTop: 40,
      backgroundColor: '#ffffff1b',
      borderRadius: 12,
      borderColor: '#6e6e6e32',
      borderWidth: 1,
      padding: 16,
      marginVertical: 10,
      marginHorizontal: 10,
    },
    
    ScheduleInfo: {
        padding: 10,
        color: 'grey',
    },

});