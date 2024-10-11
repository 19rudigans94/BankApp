import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [transactions, setTransactions] = useState([]);

    return (
        <AppContext.Provider value={{ isDarkTheme, setIsDarkTheme, transactions, setTransactions }}>
            {children}
        </AppContext.Provider>
    );
};