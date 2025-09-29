import {View, Text, StyleSheet} from 'react-native';

export default function NotesScreen() {
    return (
        <View style={styles.container}>
            <Text>Notes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});