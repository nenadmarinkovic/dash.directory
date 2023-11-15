export const lightTheme = {
  background: "#FBFBFB",
  backgroundInvert: "#000",
  color: "#000",
  colorInvert: "#fff",
  textColor: "#000",
  textMuted: "#676f89",
  muted: "#676f89",
  clear: "#FFF",
  headerBackground: "#FBFBFB",
  lineBackground: "linear-gradient(180deg, #FFF 0%, #B9B9B9 100%)",
  buttonBackground: "#000",
  buttonColor: "#FFF",
  buttonText: "#FFF",
  shadowBorder: "rgba(0,0,0,.08)",
};

export const darkTheme = {
  background: "#000",
  backgroundInvert: "#FFF",
  color: "#fff",
  colorInvert: "#000",
  textColor: "#F8FAFF",
  textMuted: "#8B93A8",
  muted: "#8B93A8",
  clear: "#000",
  headerBackground: "rgba(0, 0, 0, 0.5)",
  lineBackground: "linear-gradient(0deg, #B9B9B9 0%, #000 100%)",
  buttonBackground: "#000",
  buttonColor: "#FFF",
  buttonText: "#FFF",
  shadowBorder: "rgba(225,225,225,0.3)",
};

// For Evergreen Design System

export const useThemeColors = (theme) => {
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return {
    textColor: selectedTheme.textColor,
    textMuted: selectedTheme.textMuted,
    background: selectedTheme.background,
    backgroundInvert: selectedTheme.backgroundInvert,
  };
};
