import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function SettingsScreen() {
  

return (

  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.header}>
    <MaterialCommunityIcons name="school-outline" size={40} color="block" />
    <Text style={styles.headerText}>SchoolTrack</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Appearance</Text>
      <Ionicons name="color-palette-outline" size={28} color="black" />
    </View>

    <View style={styles.card}>
        <Text style={styles.cardTitle}>About</Text>
        <Ionicons name="information-circle-outline" size={28} color="black" />
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
  },

  headerText: {
    fontSize: 20,
  },
  
  card: {
    flexDirection: 'row',
  },

  cardTitle: {
    fontSize: 18,
  },

});


