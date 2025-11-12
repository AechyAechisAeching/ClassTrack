import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'react-native-paper';
import Modal from "../components/ui/NoteModal";
import { useState } from "react";
import Note from "../components/Note";
import NoteEditModal from "../components/ui/NoteEditModal";
import { useApp } from "../context/AppContext";

export default function NotesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [NoteEditModalVisible, setNoteEditModalVisible] = useState(false);
  const { notes, setNotes, isLoading } = useApp();
  const [editingNote, setEditingNote] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
    setModalVisible(false);
  };
  const handleEditNote = (updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[editingIndex] = updatedNote;
    setNotes(updatedNotes);
    setNoteEditModalVisible(false);
    setEditingNote(null);
    setEditingIndex(null);
  }

  const openNoteEditModal = (index) => {
    setEditingNote(notes[index]);
    setEditingIndex(index)
    setNoteEditModalVisible(true)
  }

  const closeNoteEditModal = () => {
    setNoteEditModalVisible(false);
    setEditingNote(null);
    setEditingIndex(null);
  };

   const toggleNoteCompletion = (index) => {
  const updatedNotes = [...notes];
  updatedNotes[index].completed = !updatedNotes[index].completed;
  setNotes(updatedNotes);
};

   const removeNote = (removeItem) => {
    setNotes(notes.filter((_,index) => index !== removeItem))
  }

    if (isLoading) {
    return(
      <SafeAreaView style={styles.SafeArea}>
        <View style={[styles.container, styles.Content]}>
          <ActivityIndicator size="large" color="#040009ff" />
        </View>
      </SafeAreaView>
    )
  }

  return (
      <SafeAreaView style={styles.SafeArea}>
        <ScrollView>
        <View style={styles.container}>

        
          <View style={styles.header}>
            <View style={styles.headerLeft}>
            <Ionicons
              name="document-text"
              size={30}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.headerText}>Notes</Text>
            </View>
            <Button
              icon="plus"
              mode="contained"
              onPress={() => setModalVisible(true)}
              style={styles.Button}
              labelStyle={styles.Label}>
              Add Note
            </Button>
          </View>

          {notes.length === 0 ? (
        <View style={styles.addedNotes}>
            <Text style={styles.notesContent}>
            No notes yet. Add your first note to get started!
            </Text>
        </View>
          ) : (
        <View style={styles.items}>
          {notes.map((item, index) => (
            <Note key={index} text={item.note} description={item.description} completed={item.completed || false}
            onToggleComplete={() => toggleNoteCompletion(index)}
            onEdit={() => openNoteEditModal(index)}
            onRemove={() => removeNote(index)} />
          ))}
        </View>
          )}
          <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAddNote={handleAddNote} />

          <NoteEditModal
          visible={NoteEditModalVisible}
          onClose={closeNoteEditModal}
          onEditNote={handleEditNote}
          notes={editingNote}
          />

        </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },

  icon: {
    marginTop: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "700",
  },
  Button: {
    marginTop: 10,
    marginLeft: 130,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#040009ff",
    paddingHorizontal: 14,
    paddingVertical: 3,
  },

  Label: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },

  addedNotes: {
    marginTop: 40,
    backgroundColor: "#ffffff1b",
    borderRadius: 12,
    borderColor: "#6e6e6e32",
    borderWidth: 1,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  notesContent: {
    padding: 10,
    color: "grey",
  },

  items: {
    marginTop: 20,
  },
});
