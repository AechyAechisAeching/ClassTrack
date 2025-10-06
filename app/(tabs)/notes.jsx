import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'react-native-paper';


export default function NotesScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons
              name="document-text"
              size={30}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.headerText}>Tasks</Text>
            <Button
              icon="plus"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.Button}
              labelStyle={styles.Label}
            >
              Add Lesson
            </Button>
          </View>
        <View style={styles.addedNotes}>
            <Text style={styles.notesContent}>
            No notes yet. Add your first note to get started!
            </Text>
        </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  icon: {
    padding: 20,
    marginBottom: 15,
  },

  header: {
    padding: 10,
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    fontSize: 20,
    marginTop: -20,
    marginLeft: 10,
    fontWeight: '700',
  },
  Button: {
    marginLeft: 100,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: "#040009ff",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
   Label: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    },

    addedNotes: {
     marginTop: 40,
     backgroundColor: '#ffffff1b',
     borderRadius: 12,
     borderColor: '#6e6e6e32',
     borderWidth: 1,
     padding: 16,
     marginVertical: 10,
     marginHorizontal: 10,
    },
    
    notesContent: {        
        padding: 10,
        color: 'grey',
    },

});
