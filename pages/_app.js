import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";

import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((err) => console.log("Service Worker registration failed: ", err));
  }, []);

  if (!componentMounted) {
    return <div />;
  }

  return (
   
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>

  );
}
