import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
}) 

export const themeProvider = themeContext.Provider

// Custom Hook 
export default function useTheme () {
    return useContext(themeContext);
}