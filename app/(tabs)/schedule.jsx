import {View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function ScheduleScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.SafeArea}>

        <View style={styles.container}>
            <View style={styles.header}>
                        <Ionicons name="calendar-outline" size={30} color="black" style={styles.icon} />
                <Text style={styles.headerText}>
                    Schedule
                </Text>
                 
                <Button
                    icon="plus"
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={styles.Button}
                    labelStyle={styles.Label}>
                    Add Lesson
                </Button>
            </View>
            <View style={styles.scheduledLessons}>
                
                    <Text style={styles.ScheduleInfo}>
                        No Lessons scheduled yet. Add your first lesson to get started!
                    </Text>
            </View>
        </View>
        </SafeAreaView>
        </SafeAreaProvider>
    )};

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },

    icon: {
        marginTop: 10,
    },

    header: {
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        fontWeight: '700',

    },
     Button: {
        marginLeft: 100,
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: "#040009ff",
        paddingHorizontal: 5,
        paddingVertical: 2,
    },

    Label: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
    },
    
    scheduledLessons: {
        marginTop: 40,
      backgroundColor: '#ffffff1b',
      borderRadius: 12,
      borderColor: '#6e6e6e32',
      borderWidth: 1,
      padding: 16,
      marginVertical: 10,
      marginHorizontal: 10,
    },
    
    ScheduleInfo: {
        padding: 30,
        color: 'grey',
    },

});