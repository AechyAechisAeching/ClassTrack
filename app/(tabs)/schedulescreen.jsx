import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from '../components/ui/ScheduleModal';
import { useState } from 'react';
import Schedule from '../components/Schedule';

export default function ScheduleScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [ lessons, setLessons] = useState([]);

    const handleAddLesson = (newLesson) => {
        setLessons([...lessons, newLesson]);
        setModalVisible(false);
    };

    return (
            <SafeAreaView style={styles.SafeArea}>
                <ScrollView>

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Ionicons name="calendar-outline" size={30} color="black" style={styles.icon} />
                <Text style={styles.headerText}>
                    Schedule
                </Text>
                </View>
                <Button
                    icon="plus"
                    mode="contained"
                    onPress={() => setModalVisible(true)}
                    style={styles.Button}
                    labelStyle={styles.Label}>
                    Add Lesson
                </Button>
            </View>
            
            {lessons.length === 0 ? (
            <View style={styles.scheduledLessons}>
                    <Text style={styles.ScheduleInfo}>
                        No Lessons scheduled yet. Add your first lesson to get started!
                    </Text>
            </View>
            ) : (
                <View style={styles.items}>
                          {lessons.map((item, index) => (
                            <Schedule key={index} text={item.lessons} description={item.teacher} location={item.classroom}
                            date={item.date} />
                          ))}
                        </View>
                          )}
                          <Modal
                          visible={modalVisible}
                          onClose={() => setModalVisible(false)}
                          onAddLesson={handleAddLesson} />
        </View>
        </ScrollView>
        </SafeAreaView>
    )};

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    container: {
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },

    icon: {
        marginTop: 10,
    },

    header: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerLeft: {
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
        marginTop: 13,
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: "#040009ff",
        paddingHorizontal: 5,
        paddingVertical: 3,
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
        padding: 10,
        color: 'grey',
    },

});