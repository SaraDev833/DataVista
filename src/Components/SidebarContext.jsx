import { createContext , useContext , useState } from "react";

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => setShowSidebar(!showSidebar);
    
    return (
      <SidebarContext.Provider value={{ showSidebar, setShowSidebar, toggleSidebar }}>
        {children}
      </SidebarContext.Provider>
    );
  };
export const useSidebar = () => useContext(SidebarContext) ;
