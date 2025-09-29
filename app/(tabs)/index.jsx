import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'  // Add this line
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/schedule">View Schedule</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})