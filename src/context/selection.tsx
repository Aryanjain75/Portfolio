/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of the context data
interface ContextData {
  theme: string;
  toggleTheme: () => void;
  
  user: {
    name: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
  
  activeTab: string;  // Ensure it's always a string
  setActiveTab: (activeTab: string) => void;  // Never `undefined`
}

// Create context with strict default values
export const AppContext = createContext<ContextData>({
  theme: 'light',
  toggleTheme: () => {},  // No-op function
  user: null,
  isAuthenticated: false,
  activeTab: '',  // Default as empty string
  setActiveTab: () => {} // No-op function to prevent undefined calls
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState<ContextData['user']>(null);
  const [activeTab, setActiveTab] = useState('');  // Ensure activeTab is always a string

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider 
      value={{
        theme,
        toggleTheme,
        user,
        isAuthenticated: !!user,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};