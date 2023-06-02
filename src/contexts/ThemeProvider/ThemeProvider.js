import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('garden');
    const changeTheme = (darkTheme) => {
        setTheme(darkTheme);
    }
    const authInfo = { theme, setTheme, changeTheme }
    return (
        <ThemeContext.Provider value={authInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;