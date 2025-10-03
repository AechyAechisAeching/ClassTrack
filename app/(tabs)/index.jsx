import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <MaterialCommunityIcons name="school-outline" size={40} style={{ marginRight: 10, marginBottom: 5 }} color="black"
        />
        <Text style={styles.headerText}>ClassTrack</Text>
      </View>
        
      <View style={styles.secondHeader}>
        <Text style={styles.secondHeaderText}>Your personal student companion</Text>
      </View>
        
      <Text style={styles.greetingText}>
        Good day!
      </Text>
          
      <Text style={styles.secondGreetingText}>
        Here's your schedule for today
      </Text>
        
      <View style={styles.classCard}>
        <View style={styles.classCardHeader}>
          <Ionicons name="time-outline" size={28} color="black" style={styles.icon} />
          <Text style={styles.scheduleTitle}>
            Next Class
            </Text>
        </View>
        <Text style={styles.scheduleContent}>
          {/* Class Content */}
        </Text>
      </View>

      <View style={styles.taskCard}>
        <View style={styles.taskHeader}>
          <Ionicons name="checkmark-circle-outline" size={28} color="black" style={styles.icon} />
          <Text style={styles.taskTitle}>
            Priority Tasks
          </Text>
          <Text style={styles.taskContent}>
            {/* Priority tasks content*/}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    marginTop: 25,
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
    backgroundColor: '#ffffff76',
    borderRadius: 12,
    borderColor: '#dbdbdbff',
    borderWidth: 1.5,
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
  },

  taskCard: {
    backgroundColor: '#ffffff76',
    borderRadius: 12,
    borderColor: '#dbdbdbff',
    borderWidth: 1.5,
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
  },

});
