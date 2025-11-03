import React, { createContext, useContext, useState } from 'react';


const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [lessons, setLessons] = useState([]);

    return (
        <AppContext.Provider value={{ tasks, setTasks, lessons, setLessons}}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('Provider is not connected to the usage of the app.');
    };
    return context;
}