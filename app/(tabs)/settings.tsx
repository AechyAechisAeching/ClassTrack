import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SettingsScreen() {
  
 
return (
  
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.theme} />
    <View style={styles.notifications} />
    <View style={styles.about} />
  </ScrollView>
)
 }
  


const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#ffffffff'
  },

  theme: {
      alignItems: 'center',
      marginLeft: 15,
      marginTop: 120,
      marginBottom: 30,
      width: 380,
      borderRadius: 10,
      height: 230,
      backgroundColor: 'rgba(245, 245, 245, 1)',
      borderWidth: 1.6,
      borderColor: 'rgba(0, 0, 0, 0.15)'
      
  
  },
  notifications: {
      alignItems: 'center',
      marginLeft: 15,
      marginBottom: 30,
      width: 380,
      borderRadius: 10,
      height: 220,
      backgroundColor: 'rgba(245, 245, 245, 1)',
      borderWidth: 1.6,
      borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  about: {
      alignItems: 'center',
      marginLeft: 15,
      marginBottom: 30,
      width: 380,
      borderRadius: 10,
      height: 200,
      backgroundColor: 'rgba(245, 245, 245, 1)',
      borderWidth: 1.6,
      borderColor: 'rgba(0, 0, 0, 0.15)'
  },

});

      