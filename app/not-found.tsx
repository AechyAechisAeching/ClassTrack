import { Link, Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function NotFoundScree() {
    return (
        <>
        <Stack.Screen options={{ title: "Welp!! This screen apparantly does not exist."}} />
        <View style={styles.container}>
            <Link href="/">Go to home screen</Link>
        </View>
            </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});