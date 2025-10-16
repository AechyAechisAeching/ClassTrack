import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from "react-native-element-dropdown";

export default function Schedule({ text, description, location, date }) {
    return (
        <View style={styles.ScheduleContainer}>
            <Text style={styles.ScheduleTitle}>{text}</Text>
                {description ? <Text style={styles.Scheduledescription}>{description}
                </Text> : null}
                {location ? <Text style={styles.classroom}>{location}
                </Text> : null}

                {date ? <Dropdown style={styles.day}>{date}

                </Dropdown> : null}
        </View>
    )
}

const styles = StyleSheet.create({

    ScheduleContainer: {
        marginTop: 10,
        backgroundColor: '#c9c9c9c11',
        borderRadius: 12,
        borderColor: '#6e6e6e32',
        borderWidth: 1,
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 10,
    },

    ScheduleTitle:{
        fontSize: 16,
        fontWeight: '500',

    },
    Scheduledescription: {
        fontSize: 14,
        color: 'grey',
        marginTop: 15,

    },
    classroom: {
        fontSize: 14,
        color: 'grey',
        marginTop: 15,
    },
    day: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10,
    },
    
});