import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Schedule({ text, description, location, date }) {
    return (
        <View style={styles.ScheduleContainer}>
            <Text style={styles.ScheduleTitle}>{text}</Text> 
            {date ? 
                (<Text style={styles.day}>
                  {date.charAt(0).toUpperCase() + date.slice(1)}
                </Text> ) : null}
                {description ? <Text style={styles.Scheduledescription}>{description}
                </Text> : null}
                {location ? <Text style={styles.classroom}>{location}
                </Text> : null}

               
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
    marginLeft: 0,
    color: "black",
    fontWeight: 500,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 0.5,
    width: 100,
    borderRadius: 5.5,
    paddingLeft: 5.2,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    },
    
});