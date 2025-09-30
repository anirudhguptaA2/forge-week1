import { createContext, useContext } from 'react';

export interface TabsContextProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextProps | undefined>(undefined);

/**
 * Hook to access the Tabs context. Throws if used outside Tabs.
 */
export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabsContext must be used within a Tabs component');
  }
  return context;
};
