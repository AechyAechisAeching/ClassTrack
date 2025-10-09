import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Note({ text, description }) {
    return (
        <View style={styles.noteContainer}>
            <Text style={styles.noteTitle}>{text}</Text>
                {description ? <Text style={styles.notedescription}>{description}
                </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({

    noteContainer: {
        marginTop: 10,
        backgroundColor: '#c9c9c9c11',
        borderRadius: 12,
        borderColor: '#6e6e6e32',
        borderWidth: 1,
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 10,
    },

    noteTitle:{
        fontSize: 16,
        fontWeight: '500',

    },
    notedescription: {
        fontSize: 14,
        color: 'grey',
        marginTop: 15,

    },
});