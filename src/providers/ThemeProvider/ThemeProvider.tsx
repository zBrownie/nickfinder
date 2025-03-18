import React, { useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.ReactNode => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsLoading(false);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && children}
    </ThemeContext.Provider>
  );
};
