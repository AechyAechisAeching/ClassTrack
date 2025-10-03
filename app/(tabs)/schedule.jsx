import {View, Text, StyleSheet} from 'react-native';

export default function ScheduleScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Schedule
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    header: {
        padding: 10,
    },
    headerText: {
        fontSize: 18,
    },
});