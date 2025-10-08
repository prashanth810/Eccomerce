import React, { createContext, useContext } from 'react';

const SidebarContext = createContext({
  openSidebar: () => {},
  closeSidebar: () => {},
  isOpen: false,
});

export const SidebarProvider = ({ value, children }) => {
  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
