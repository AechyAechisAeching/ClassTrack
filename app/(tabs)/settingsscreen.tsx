import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';

export default function SettingsScreen() {  
return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="school-outline"
            size={40}
            marginBottom="20"
            marginRight="10"
            color="black"
          />
          <Text style={styles.headerText}>ClassTrack</Text>
        </View>

        <View style={styles.secondHeader}>
          <Text style={styles.secondHeaderText}>
            Customize your ClassTrack experience
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons
              name="color-palette-outline"
              size={28}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Appearance</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.contentText}>Theme</Text>
            <View style={styles.themeswitch}>
              <Text style={styles.themeText}>Choose your preferred theme</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons
              name="notifications-outline"
              size={28}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Notifications</Text>
            <Text style={styles.progressTitle}>Coming Soon</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.contentText}>Task Reminders</Text>
            <Text style={styles.notifText}>
              Get notified about upcoming task deadlines
            </Text>
            <Text style={styles.contentText}>Class Reminders</Text>
            <Text style={styles.notifText}>
              Get notified before classes start
            </Text>
            {/* Card content goes here */}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons
              name="information-circle-outline"
              size={28}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>About</Text>
          </View>

          <View style={styles.cardContent}>
            <View style={styles.row}>
            <Text style={styles.contentText}>Version</Text>
            <Text style={styles.versionText}>1.0.0</Text>
             </View>
            <View style={styles.row}>
              <Text style={styles.buildText}>Platform</Text>
              <Text style={styles.PlatformText}>{Platform.OS}</Text>
           </View> 
          </View>
        
        <View style={styles.divider}>
        </View>
        <Text style={styles.smallText}>
          ClassTrack helps students stay
           organized with their schedules, tasks, and notes all in one place.
        </Text>
      </View>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
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
    marginTop: 25,
    alignSelf: 'center',
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
  
  card: {
    backgroundColor: '#ffffff76',
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#dbdbdbff',
    borderWidth: 0.7,
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
    marginRight: 5,
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
  },

  notifText: {
    fontSize: 12,
    color: 'grey',
    lineHeight: 20,
  },

  progressTitle: {
    fontSize: 12,
    marginLeft: 10,
    color: 'black',
    fontWeight: 500,
    backgroundColor: '#7e7e7e27',
    borderRadius: 5.5,
    paddingLeft: 5.2,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },

  row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

PlatformText: {
  fontWeight: '400',
  textAlign: 'right',
  backgroundColor: '#ffffff19',
  borderColor: '#9e9d9d47',
  borderWidth: 1,
  borderRadius: 6.5,
  paddingLeft: 5.2,
  paddingRight: 5,
  paddingTop: 2,
  paddingBottom: 2,

},

buildText: {
  fontWeight: '500',
  textAlign: 'right',

},

versionText: {
  fontWeight: '400',
  textAlign: 'right',
  backgroundColor: '#ffffff19',
  borderColor: '#9e9d9d47',
  borderWidth: 1,
  borderRadius: 6.5,
  paddingLeft: 5.2,
  paddingRight: 5,
  paddingTop: 2,
  paddingBottom: 2,
},

divider: {
  height: 0.5,
  backgroundColor: '#cccccc8d',
  marginVertical: 15,
},

  smallText: {
    marginTop: 5,
    fontSize: 14,
    color: '#777777b0',
  },

});


