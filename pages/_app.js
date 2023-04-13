import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-inter'
});

// import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // useEffect(() => {
  //   navigator.serviceWorker
  //     .register("/sw.js")
  //     .catch((err) => console.log("Service Worker registration failed: ", err));
  // }, []);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <main className={inter.className}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </main>
  );
}
