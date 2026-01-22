import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'glam' | 'brutal' | 'soft';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('glam');

    useEffect(() => {
        // Add data-theme to body for global styling hooks if needed
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // Force scroll to top on theme change to re-experience the "feel"
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
