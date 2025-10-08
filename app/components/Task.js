import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Task({ text, description }) {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{text}</Text>
            {description ? <Text style={styles.taskdescription}>{description}
            </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({

  taskContainer: {
     marginTop: 10,
     backgroundColor: '#c9c9c911',
     borderRadius: 12,
     borderColor: '#6e6e6e32',
     borderWidth: 1,
     padding: 16,
     marginVertical: 10,
     marginHorizontal: 10,
  },

  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },

  taskdescription: {
    fontSize: 14,
    color: 'grey',
    marginTop: 15,
  },
  
});
