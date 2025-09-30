import { Stack } from 'expo-router';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

function TopNavigation() {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { name: 'index', title: 'Home', icon: 'home' },
        { name: 'schedule', title: 'Schedule', icon: 'calendar' },
        { name: 'tasks', title: 'Tasks', icon: 'checkbox' },
        { name: 'notes', title: 'Notes', icon: 'document-text' },
        { name: 'settings', title: 'Settings', icon: 'settings' },
    ];

    return (
        <View style={styles.topNav}>
            {navItems.map((item) => {
                const isActive = pathname === `/${item.name}` || (pathname === '/' && item.name === 'index');
                return (
                    <TouchableOpacity
                        key={item.name}
                        style={[styles.navItem, isActive && styles.activeNavItem]}
                        onPress={() => router.push(`/${item.name}`)}
                    >
                        <Ionicons 
                            name={item.icon as any} 
                            size={20} 
                            color={isActive ? '#000000ff' : '#000000ff'} 
                        />
                        <Text style={[
                            styles.navText, 
                            isActive && styles.activeNavText
                        ]}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default function TabLayout() {
    return (
        <>
            <TopNavigation />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="schedule" />
                <Stack.Screen name="tasks" />
                <Stack.Screen name="notes" />
                <Stack.Screen name="settings" />
            </Stack>
        </>
    );
}

const styles = StyleSheet.create({
    topNav: {
        flexDirection: 'row',
        backgroundColor: '#ececf0',
        paddingTop: 35,
        paddingBottom: 5,
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navItem: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        minWidth: 60,
    },
    activeNavItem: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    navText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000000ff',
        marginTop: 2,
    },
    activeNavText: {
        color: '#000000ff',
    },
});