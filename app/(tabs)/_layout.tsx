import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';
import PagerView from 'react-native-pager-view';
import { useRef, useState } from 'react';

import HomeScreen from './index';
import ScheduleScreen from './schedule';
import TasksScreen from './tasks';
import NotesScreen from './notes';
import SettingsScreen from './settings';

function TopNavigation({ onTabPress, currentPage }) {
  const navItems = [
    { name: 'index', title: 'Home', icon: 'home' },
    { name: 'schedule', title: 'Schedule', icon: 'calendar' },
    { name: 'tasks', title: 'Tasks', icon: 'checkbox' },
    { name: 'notes', title: 'Notes', icon: 'document-text' },
    { name: 'settings', title: 'Settings', icon: 'settings' },
  ];

  return (
    <View style={styles.topNav}>
      {navItems.map((item, index) => {
        const isActive = currentPage === index;
        return (
          <TouchableOpacity
            key={item.name}
            style={[styles.navItem, isActive && styles.activeNavItem]}
            onPress={() => onTabPress(index)}
          >
            <Ionicons
              name={item.icon as any}
              size={20}
              color="#000000ff"
            />
            <Text style={[styles.navText, isActive && styles.activeNavText]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleTabPress = (pageIndex: number) => {
    pagerRef.current?.setPage(pageIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      <TopNavigation onTabPress={handleTabPress} currentPage={currentPage} />
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        <View key="1" style={styles.page}>
          <HomeScreen />
        </View>
        <View key="2" style={styles.page}>
          <ScheduleScreen />
        </View>
        <View key="3" style={styles.page}>
          <TasksScreen />
        </View>
        <View key="4" style={styles.page}>
          <NotesScreen />
        </View>
        <View key="5" style={styles.page}>
          <SettingsScreen />
        </View>
      </PagerView>
    </View>
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
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
});