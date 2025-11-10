import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {


  const {tasks, lessons} = useApp();


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

          <View style={styles.taskCard}>
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
    fontSize: 25,
    fontWeight: '500',
  },
  secondGreetingText: {
    fontSize: 15,
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
    backgroundColor: '#ffffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    borderRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f1f5f9',

    
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
  
});