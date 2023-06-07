import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const handleDark = () => {
        setDark(!dark);
        localStorage.setItem("dark-mode", !dark);
    }

    useEffect(() => {
        if (dark) {
            document.querySelector("html").setAttribute("data-theme", "night");
        }
        else {
            document.querySelector("html").setAttribute("data-theme", "garden")
        }
    }, [dark])

    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem("dark-mode"));
        console.log(localDark);
        setDark(localDark);
    }, [])

    const themeInfo = { handleDark, dark }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;