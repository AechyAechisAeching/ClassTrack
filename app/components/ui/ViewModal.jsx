import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal as RNModal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ViewModal({ visible, onClose, task }) {
  if (!task) return null;

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6366f1';
    }
  };

  const priorityColor = getPriorityColor(task.priority);

  return (
    <RNModal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#0f172a" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Task Details</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Status Badge */}
          <View style={styles.statusContainer}>
            <View style={[
              styles.statusBadge,
              { backgroundColor: task.completed ? '#dcfce7' : '#fef3c7' }
            ]}>
              <Ionicons 
                name={task.completed ? "checkmark-circle" : "time-outline"} 
                size={16} 
                color={task.completed ? '#16a34a' : '#d97706'} 
              />
              <Text style={[
                styles.statusText,
                { color: task.completed ? '#16a34a' : '#d97706' }
              ]}>
                {task.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          </View>

          <ScrollView 
            style={styles.scrollContent}
            showsVerticalScrollIndicator={false}>
            
            {/* Title Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="document-text-outline" size={20} color="#6366f1" />
                <Text style={styles.label}>Title</Text>
              </View>
              <Text style={styles.title}>{task.task}</Text>
            </View>

            {/* Description Section */}
            {task.description && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="list-outline" size={20} color="#6366f1" />
                  <Text style={styles.label}>Description</Text>
                </View>
                <Text style={styles.content}>{task.description}</Text>
              </View>
            )}

            {/* Priority Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="flag-outline" size={20} color="#6366f1" />
                <Text style={styles.label}>Priority</Text>
              </View>
              <View style={styles.priorityContainer}>
                <View style={[
                  styles.priorityBadge,
                  { backgroundColor: priorityColor + '20' }
                ]}>
                  <View style={[
                    styles.priorityDot,
                    { backgroundColor: priorityColor }
                  ]} />
                  <Text style={[
                    styles.priorityText,
                    { color: priorityColor }
                  ]}>
                    {task.priority}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Footer Button */}
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClose}
            activeOpacity={0.8}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalCard: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  placeholder: {
    width: 40,
  },
  statusContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    lineHeight: 32,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    color: '#475569',
    lineHeight: 24,
    backgroundColor: '#67676711',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    
  },
  priorityContainer: {
    flexDirection: 'row',
  },
  priorityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 8,
  },
  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  priorityText: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  metadataContainer: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    marginBottom: 20,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metadataText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  closeButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});