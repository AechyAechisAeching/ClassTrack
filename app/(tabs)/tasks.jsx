import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function TasksScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.SafeArea}>

            
        <View style={styles.container}>
            <Text>Tasks</Text>
        </View>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});