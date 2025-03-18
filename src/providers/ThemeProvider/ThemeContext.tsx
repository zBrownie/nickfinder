import React from "react";

export interface ThemeContextProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const initState: ThemeContextProps = {
  darkMode: true,
  setDarkMode: () => {},
};

export const ThemeContext = React.createContext<ThemeContextProps>(initState);
