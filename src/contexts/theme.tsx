import { createContext, useContext } from "react";
const theme = {
  dark: "#001500",
  medium: "#001500",
  light: "#3A7C2D",
  verylight: "#88CF7A",
};

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const ThemeUse = () => useContext(ThemeContext);
