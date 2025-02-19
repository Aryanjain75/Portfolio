
import { createContext, useState, ReactNode} from 'react';

// Define the shape of the context data
interface ContextData {
  
  activeTab: string;  // Ensure it's always a string
  setActiveTab: (activeTab: string) => void;  // Never `undefined`
}

// Create context with strict default values
export const AppContext = createContext<ContextData>({
  
  activeTab: '',  // Default as empty string
  setActiveTab: () => {} // No-op function to prevent undefined calls
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeTab, setActiveTab] = useState('');  // Ensure activeTab is always a string

  
  return (
    <AppContext.Provider 
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};