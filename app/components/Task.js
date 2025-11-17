import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import OptionSelector from "./OptionSelector";

export default function Task({ text, onRemove, onEdit, description, priority = "Low", onPriorityChange, completed = false, onToggleComplete, onView }) {
  const [selectedPriority, setSelectedPriority] = useState(priority);

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
    if (onPriorityChange) onPriorityChange(value);
  };

  return (
  <TouchableOpacity style={styles.taskContainer} onPress={onView}>
      <View style={styles.contentWrapper}>
        <View style={styles.mainContent}>
          <View style={styles.titleRow}>
            <TouchableOpacity 
              style={styles.checkboxPlaceholder} 
              onPress={onToggleComplete}>
              <Ionicons 
                name={completed ? "checkmark-circle" : "checkmark-circle-outline"} 
                size={22} 
                color={completed ? "#10b981" : "#065a3eff"} />
            </TouchableOpacity>
            <Text style={[
              styles.taskTitle,
              completed && styles.taskTitleCompleted]}>{text}</Text>
          <OptionSelector
            options={[selectedPriority]}
            onSelect={handlePriorityChange}
            initialValue={selectedPriority}
            displayOnly={true}/>
        </View>
        {description && (
          <View style={styles.descriptionRow}>
            <Ionicons name="reader-outline" size={16} color="#64748b" />
            <Text style={styles.taskdescription}>{description}</Text>
          </View>
        )}
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Ionicons name="create-outline" size={20} color="#6366f1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
          <Ionicons name="trash-outline" size={20} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
            
);
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#ebf5ffff',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  contentWrapper: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  mainContent: {
    flex: 1,
    paddingRight: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  checkboxPlaceholder: {
    marginRight: 2,
  },
  taskTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0f172a',
    flex: 1,
    letterSpacing: -0.3,
  },
  descriptionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    paddingLeft: 32,
  },
  taskdescription: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 8,
    flex: 1,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'column',
    gap: 8,
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f9ff',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#bae6fd',
  },
  removeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fef2f2',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#fecaca',
  },

  taskTitleCompleted: {
  textDecorationLine: 'line-through',
  color: '#94a3b8',
  opacity: 0.7,
},

  descriptionCompleted: {
  textDecorationLine: 'line-through',
  opacity: 0.6,
},
});