import { ScrollView, StyleSheet, Text, Dimensions, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {


  const {tasks, lessons, notes} = useApp();
  const { width } = Dimensions.get('window');
  const CARD_WIDTH = width - 30; 
  const [activeCard, setActiveCard] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / CARD_WIDTH);
    setActiveCard(index);
  };


  const getTodaysDate = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date();
    return days[today.getDay()];
  }


  const todayLessons = lessons.filter(
    lesson => lesson.date?.toLowerCase() === getTodaysDate()
  )

  const nextClass = todayLessons.length > 0 ? todayLessons[0] : null;

  const PriorityTasks = tasks.slice(0, 3);

  const PriorityNotes = notes.slice(0, 3);

  return (
       <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <MaterialCommunityIcons 
              name="school-outline" 
              size={40} 
              style={{ marginRight: 10, marginBottom: 5 }} 
              color="black"
            />
            <Text style={styles.headerText}>ClassTrack</Text>
          </View>
          <View style={styles.secondHeader}>
            <Text style={styles.secondHeaderText}>Your personal student companion</Text>
          </View>
          <Text style={styles.greetingText}>Good day!</Text>
          <Text style={styles.secondGreetingText}>
            Here's your schedule for today
          </Text>

          <View style={styles.classCard}>
            <View style={styles.classCardHeader}>
              <Ionicons name="time-outline" size={28} color="black" style={styles.icon} />
              <Text style={styles.scheduleTitle}>Next Class</Text>
            </View>
            {nextClass ? (
              <View>
                <Text style={styles.scheduleContent}>
                  <Text style={styles.boldText}>{nextClass.lessons}</Text>
                </Text>
                {nextClass.teacher && (
                  
                  <Text style={styles.scheduleContent}>
                  <Ionicons name="person-outline" size={16} color="#64748b" />
                    Teacher: {nextClass.teacher}
                  </Text>
                )}
                {nextClass.classroom && (
                  <Text style={styles.scheduleContent}>
                  <Ionicons name="location-outline" size={16} color="#64748b" />
                    Room: {nextClass.classroom}
                  </Text>
                )}
              </View>
            ) : (
              <Text style={styles.scheduleContent}>No classes scheduled for today</Text>
            )}
          </View>

          {todayLessons.length > 1 && (
            <View style={styles.classCard}>
              <View style={styles.classCardHeader}>
                <Ionicons name="calendar-outline" size={28} color="black" style={styles.icon} />
                <Text style={styles.scheduleTitle}>Today's Schedule</Text>
              </View>
              {todayLessons.map((lesson, index) => (
                <View key={index} style={styles.lessonItem}>
                  <Text style={styles.scheduleContent}>
                    • <Text style={styles.boldText}>{lesson.lessons}</Text>
                  </Text>
                  {lesson.classroom && (
                    <Text style={styles.scheduleContent}>  {lesson.classroom}</Text>
                  )}
                </View>
              ))}
            </View>
          )}

          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={CARD_WIDTH}
            snapToAlignment="center"
            contentContainerStyle={{ paddingHorizontal: 0 }}>

            <View style={[styles.taskCard, { width: CARD_WIDTH, marginHorizontal: 0, width: 380, height: 200 }]}>
              <View style={styles.taskHeader}>
                <Ionicons 
                  name="checkmark-circle-outline" 
                  size={28} 
                  color="black" 
                  style={styles.icon} 
                />
                <Text style={styles.taskTitle}>Priority Tasks</Text>
              </View>
              {PriorityTasks.length > 0 ? (
                PriorityTasks.map((task, index) => (
                  <View key={index} style={styles.taskItem}>
                    <Text style={styles.taskContent}>
                      • <Text style={styles.boldText}>{task.task}</Text>
                    </Text>
                    {task.description && (
                      <Text style={styles.taskDescription}>  {task.description}</Text>
                    )}
                  </View>
                ))
              ) : (
                <Text style={styles.taskContent}>No tasks added yet</Text>
              )}
            </View>
            <View style={[styles.noteCard, { width: CARD_WIDTH, marginHorizontal: 0, marginLeft: 0 }]}>
              <View style={styles.contentWrapper}>
              <View style={styles.taskHeader}>
                <Ionicons 
                  name="document-text-outline" 
                  size={28} 
                  color="black" 
                  style={styles.icon} 
                />
                <Text style={styles.taskTitle}>Priority Notes</Text>
              </View>
              </View>
              {PriorityNotes.length > 0 ? (
                PriorityNotes.map((note, index) => (
                  <View key={index} style={styles.noteItem}>
                    <Text style={styles.noteContent}>
                      • <Text style={styles.boldText}>{note.note}</Text>
                    </Text>
                    {note.description && (
                      <Text style={styles.noteDescription}>  {note.description}</Text>
                    )}
                  </View>
                ))
              ) : (
                <Text style={styles.noteContent}>No notes added yet</Text>
              )}
            </View>
         
          </ScrollView>

          <View style={styles.pagination}>
            <View style={[styles.dot, activeCard === 0 && styles.activeDot]} />
            <View style={[styles.dot, activeCard === 1 && styles.activeDot]} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 28,
    fontWeight: '600',
  },

  secondHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },

  secondHeaderText: {
    fontSize: 15,
    color: 'grey',
  },

  greetingText: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: '500',
  },

  secondGreetingText: {
    fontSize: 15,
    marginLeft: 15,
    color: 'grey',
    lineHeight: 55,
  },

  classCard: {
    backgroundColor: '#ffffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  noteCard: {
    backgroundColor: '#fffbebff',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#fde68a',
  },

  contentWrapper: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  classCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  scheduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },

  scheduleContent: {
    fontSize: 15,
    color: 'grey',
    marginTop: 4,
  },

  boldText: {
    fontWeight: '600',
    color: '#000',
  },

  lessonItem: {
    marginTop: 8,
  },

  taskCard: {
    backgroundColor: '#ebf5ffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    borderRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#8aa9fd86',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },

  taskContent: {
    fontSize: 15,
    color: 'grey',
    marginTop: 4,
  },

  taskItem: {
    marginTop: 8,
  },

  taskDescription: {
    fontSize: 14,
    color: '#999',
    marginLeft: 15,
  },
  
  noteItem: {
    marginTop: 8,
  },

  noteContent: {
    fontSize: 15,
    color: 'grey',
    marginTop: 4,
  },

  noteDescription: {
    fontSize: 14,
    color: '#999',
    marginLeft: 15,
    marginTop: 4,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#000',
    width: 24,
  },

});