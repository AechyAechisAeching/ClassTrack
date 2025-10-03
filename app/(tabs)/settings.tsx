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
    </View>
    
    <View style={styles.secondHeader}>
      <Text style={styles.secondHeaderText}>Customize your ClassTrack experience</Text>
    </View>
    
    
     <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="color-palette-outline" size={28} color="black" style={styles.icon} />
        <Text style={styles.cardTitle}>Appearance</Text>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.contentText}>
          Theme
        </Text>
        <View style={styles.themeswitch}>
          <Text style={styles.themeText}>
            Choose your preferred theme
          </Text>
        </View>
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="information-circle-outline" size={28} color="black" style={styles.icon} />
        <Text style={styles.cardTitle}>About ClassTrack</Text>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.contentText}>
          Version
        </Text>
        <Text style={styles.contentText}>
          Build
        </Text>
        {/* Card content goes here */}
      </View>
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
    marginTop: 25,
    alignSelf: 'center',
  },

  headerText: {
    fontSize: 28,
  },

  secondHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },

  secondHeaderText: {
    fontSize: 15,
    color: 'grey',
  },
  
  card: {
    backgroundColor: '#ffffff76',
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#dbdbdbff',
    borderWidth: 1.5,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },

  cardTitle: {
    fontSize: 18,
    color: '#000',
  },

  cardContent: {
    paddingTop: 8,
  },

  contentText: {
    fontSize: 14,
    color: '#000000ff',
    fontWeight: '500',
    lineHeight: 30,
  },

  themeswitch: {
    lineHeight: 10,
    margin: 0,  
  },

  themeText: {
    fontSize: 13,
    color: 'grey',
  }

});


