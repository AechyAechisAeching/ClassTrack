import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Task({ text, onRemove, description }) {
    
  return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{text}</Text>
            {description ? <Text style={styles.taskdescription}>{description}
            </Text> : null}
                 
      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Ionicons name="open-outline" size={24} color="#000000ff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Ionicons name="trash-outline" size={24} color="#9c0000ff" />
      </TouchableOpacity>
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

  removeButton: {
    position: 'absolute',
    left: 310,
    top: 15,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffff1b',
    width: 30,
    justifyContent: 'center',

  },

  editButton: {
    position: 'absolute',
    left: 270,
    top: 15,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffffff',
    width: 30,
    justifyContent: 'center',
  },

});
