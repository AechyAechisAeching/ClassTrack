import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <MaterialCommunityIcons name="school-outline" size={40} marginBottom="20" marginRight="10" color="black"/>
        <Text style={styles.headerText}>ClassTrack</Text>
        </View>
        
        <View style={styles.secondHeader}>
          <Text style={styles.secondHeaderText}>Customize your ClassTrack experience</Text>
        </View>
        
          <Text style={styles.greetingText}>
            Good day!
          </Text>
          
          <Text style={styles.secondGreetingText}>
            Here's your schedule for today
          </Text>
        
        <View style={styles.scheduleHeader}>
          
          <Text style={styles.scheduleContent}>
            
          </Text>
        </View>
        </View>


        
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'fff',
  },

  header: {
    flexDirection: 'row',
    marginTop: 25,
    alignSelf: 'center',
  },

  headerText: {
    fontSize: 28,
    fontWeight: 600,
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
    fontWeight: 500,
  },
  
  secondGreetingText: {
    fontSize: 15,
    color: 'grey',
    lineHeight: 55,
  },

});