import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { ServicesProvider } from "../services/ServicesProvider";

export default function App({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ServicesProvider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </ServicesProvider>
  );
}
