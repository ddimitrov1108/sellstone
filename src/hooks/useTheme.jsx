import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) setTheme(localTheme);
  }, []);

  return { theme, toggleTheme };
}
