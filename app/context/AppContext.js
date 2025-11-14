import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Provider is not connected to the usage of the app.');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveTasks();
    }
  }, [tasks]);

  useEffect(() => {
    if (!isLoading) {
      saveLessons();
    }
  }, [lessons]);

  useEffect(() => {
    if (!isLoading) {
        saveNotes();
    }
  }, [notes]);


  const loadData = async () => {
    try {
      const [storedTasks, storedLessons, storedNotes] = await Promise.all([
        AsyncStorage.getItem('tasks'),
        AsyncStorage.getItem('lessons'),
        AsyncStorage.getItem('notes')
      ]);

      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }

      if (storedLessons !== null) {
        setLessons(JSON.parse(storedLessons));
      }

      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes));
      }

    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const saveLessons = async () => {
    try {
      await AsyncStorage.setItem('lessons', JSON.stringify(lessons));
    } catch (error) {
      console.error('Error saving lessons:', error);
    }
  };

  const saveNotes = async () => {
    try {
        await AsyncStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
        console.error('Error saving notes', error);
    }
  };

  const value = {
    tasks,
    setTasks,
    lessons,
    setLessons,
    notes,
    setNotes,
    isLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppProvider;