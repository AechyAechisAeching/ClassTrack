import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Note({ text, onEdit, description, onRemove }) {
  return (
    <View style={styles.noteContainer}>
      <View style={styles.contentWrapper}>
        <View style={styles.mainContent}>
          <View style={styles.titleRow}>
            <View style={styles.noteIconContainer}>
              <Ionicons name="document-text" size={20} color="#f59e0b" />
            </View>
            <Text style={styles.noteTitle}>{text}</Text>
          </View>
          
          {description && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.notedescription}>{description}</Text>
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
  noteContainer: {
    backgroundColor: '#fffbeb',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#fde68a',
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
  },
  noteIconContainer: {
    marginRight: 10,
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 6,
    borderWidth: 1,
    borderColor: '#fde68a',
  },
  noteTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#78350f',
    flex: 1,
    letterSpacing: -0.3,
  },
  descriptionContainer: {
    paddingLeft: 42,
    marginTop: 4,
  },
  notedescription: {
    fontSize: 14,
    color: '#92400e',
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