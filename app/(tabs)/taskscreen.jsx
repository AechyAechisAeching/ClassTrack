import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import Task from './components/Task';


export default function TasksScreen() {
    return (
        
            <SafeAreaView style={styles.SafeArea}>
        <View style={styles.container}>
            <Text style={styles.header}>
                <View style={styles.headerLeft}>
                <Ionicons
                 name="document-text"
                 size={30}
                 color="black"
                 style={styles.icon}
                    />
                    <Text style={styles.headerText}>
                        Tasks
                    </Text>
                </View>
            </Text>
            <View style={styles.items}>
                <Task />
            </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    container: {
        flex: 1,
        },
});