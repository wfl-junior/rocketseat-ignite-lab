import { createContext, useContext, useState } from "react";

interface SidebarContextData {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext({} as SidebarContextData);

export const useSidebarContext = () => useContext(SidebarContext);

interface SidebarContextProviderProps {
  children: React.ReactNode;
}

export const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen: isOpen, setIsSidebarOpen: setIsOpen }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
