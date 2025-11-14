import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal as RNModal,
} from "react-native";

export default function ViewModal({ visible, onClose }) {
  return (
    <RNModal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}>
                
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
            <Text style={styles.CardTitle}>
                Task Overview
            </Text>
            <View style={styles.viewSection}>
                <Text style={styles.ValueTitle}>{selectedTask?.title}</Text>
                <Text style={styles.ValueTitle}>{selectedTask?.description}</Text>
            </View>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.32)",
  },

  modalCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    width: "85%",
    elevation: 5,
  },

  CardTitle: {
    fontSize: 16,
    justifyContent: "center",  
  },

  viewSection: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  ValueTitle: {
    fontSize: 14,
  },

});
