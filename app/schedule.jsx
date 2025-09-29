import {View, Text, StyleSheet} from 'react-native';

export default function ScheduleScreen() {
    return (
        <View style={styles.container}>
            <Text>Schedule</Text>
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