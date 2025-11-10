import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import OptionSelector from "./OptionSelector";

export default function Task({ text, onRemove, onEdit, description, priority = "Low", onPriorityChange }) {
  const [selectedPriority, setSelectedPriority] = useState(priority);

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
    if (onPriorityChange) onPriorityChange(value);
  };

  return (
  <View style={styles.taskContainer}>
    <View style={styles.contentWrapper}>
      <View style={styles.mainContent}>
        <View style={styles.titleRow}>
          <View style={styles.checkboxPlaceholder}>
            <Ionicons name="checkmark-circle-outline" size={22} color="#065a3eff" />
          </View>
          <Text style={styles.taskTitle}>{text}</Text>
          <OptionSelector
            options={[selectedPriority]}
            onSelect={handlePriorityChange}
            initialValue={selectedPriority}
            displayOnly={true}
          />
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
  </View>
);
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#ffffff',
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
    gap: 8,  // Add this for spacing
  },
  checkboxPlaceholder: {
    marginRight: 2,  // Reduce this
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
});