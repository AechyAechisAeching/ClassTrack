import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function SettingsScreen() {  

return (

  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.header}>
    <MaterialCommunityIcons name="school-outline" size={40} marginBottom="20" marginRight="10" color="block"/>
    <Text style={styles.headerText}>ClassTrack</Text>
    
    <View style={styles.secondHeader}>
      <Text style={styles.secondHeaderText}>Lorem Ipsum</Text>
    </View>
    </View>
    
    
    <View style={styles.card}>
      <Ionicons name="color-palette-outline" size={28} marginRight="10" color="black" />
      <Text style={styles.cardTitle}>Appearance</Text>
      
    </View>

    <View style={styles.card}>
      <Ionicons name="information-circle-outline" size={28} color="black" />
        <Text style={styles.cardTitle}>About</Text>
        
      </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'fff',
  },

  header: {
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 90,
  },

  headerText: {
    fontSize: 28,
  },

  secondHeader: {
    flexDirection: 'column',
    marginTop: 40,
    marginRight: 150,
  },

  secondHeaderText: {
    fontSize: 18,
  },
  
  card: {
    flexDirection: 'row',
  },

  cardTitle: {
    fontSize: 18,
  },

});


