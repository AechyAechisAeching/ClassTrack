import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Schedule({ text, description, onRemove, onEdit, location, date }) {
  return (
    <View style={styles.ScheduleContainer}>
      <View style={styles.contentWrapper}>
        <View style={styles.mainContent}>
          <Text style={styles.ScheduleTitle}>{text}</Text>
          
          {date && (
            <View style={styles.dateContainer}>
              <Ionicons name="calendar-outline" size={14} color="#6366f1" />
              <Text style={styles.day}>
                {date.charAt(0).toUpperCase() + date.slice(1)}
              </Text>
            </View>
          )}
          
          {description && (
            <View style={styles.infoRow}>
              <Ionicons name="document-text-outline" size={16} color="#64748b" />
              <Text style={styles.Scheduledescription}>{description}</Text>
            </View>
          )}
          
          {location && (
            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={16} color="#64748b" />
              <Text style={styles.classroom}>{location}</Text>
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
  ScheduleContainer: {
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
  ScheduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 10,
    letterSpacing: -0.3,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef2ff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#c7d2fe',
  },
  day: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6366f1',
    marginLeft: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  Scheduledescription: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 8,
    flex: 1,
    lineHeight: 20,
  },
  classroom: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 8,
    flex: 1,
    fontWeight: '500',
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