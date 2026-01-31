import React, { useEffect, useState, ReactNode, createContext } from "react";

import { useLocation } from "@reach/router";

// Define the type for the context value
interface ThemeContextType {
  handleToggle: () => void;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  menuStatus: boolean;
  openSearch: boolean;
  toggleMenu: (value?: boolean) => void;
  toggleSearch: () => void;
  toggleMegaMenu: (value?: boolean) => void;
  openMegaMenu: boolean;
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  setOpenMegaMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

// Define props for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMenu = (value?: boolean) => {
    setMenuStatus((prev) => (value === undefined ? !prev : value));
  };

  const toggleMegaMenu = (value?: boolean) => {
    const newValue = value === undefined ? !openMegaMenu : value;
    setOpenMegaMenu(newValue);
    document.body.classList.toggle("megamenu-popup-active", newValue);
  };

  const toggleSearch = () => {
    setOpenSearch((prev) => !prev);
  };

  const toggleSidebar = () => {
    const newValue = !openSidebar;
    setOpenSidebar(newValue);
    document.body.classList.toggle("locked", newValue);
  };

  const handleToggle = () => {
    const newValue = !isExpanded;
    setIsExpanded(newValue);
    document.body.classList.toggle("locked", newValue);
  };

  useEffect(() => {
    toggleMenu(false);
    setIsExpanded(false);
    toggleMegaMenu(false);
    document.body.classList.remove("megamenu-popup-active");
    document.body.classList.remove("locked");
  }, [pathname]);

  const value: ThemeContextType = {
    handleToggle,
    isExpanded,
    setIsExpanded,
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    toggleMegaMenu,
    openMegaMenu,
    openSidebar,
    setOpenSidebar,
    toggleSidebar,
    setOpenMegaMenu,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
