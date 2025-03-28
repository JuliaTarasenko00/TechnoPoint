import { useEffect, useState } from "react";
import { ThemeContext } from "./useChangeTheme";

const metaTheme: Element | null = document.querySelector(
  'meta[name="theme-color"]'
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      metaTheme?.setAttribute("content", "#121212");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      metaTheme?.setAttribute("content", "#fafafa");
      localStorage.removeItem("theme");
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
