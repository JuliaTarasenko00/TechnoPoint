import { createContext, useContext } from "react";

export type ThemeContextType = {
  toggleTheme: () => void;
  darkMode: boolean;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useChangeTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useChangeTheme must be used within a ThemeProvider");
  }
  return context;
};
