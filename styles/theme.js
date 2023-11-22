export const lightTheme = {
  background: '#FBFBFB',
  backgroundInvert: '#000',
  color: '#000',
  colorInvert: '#fff',
  textColor: '#000',
  textMuted: '#676f89',
  muted: '#676f89',
  clear: '#FFF',
  headerBackground: '#FBFBFB',
  lineBackground: 'linear-gradient(180deg, #FFF 0%, #B9B9B9 100%)',
  buttonBackground: '#000',
  buttonColor: '#FFF',
  buttonText: '#FFF',
  hoverButton: '#F1F2F5',
  shadowBorder: 'rgba(0,0,0,.08)',
  primary: '#276df0',
  danger: '#F23839',
  primaryActive: '#1F3D99',
};

export const darkTheme = {
  background: '#0E0E0E',
  backgroundInvert: '#FFF',
  color: '#fff',
  colorInvert: '#000',
  textColor: '#F8FAFF',
  textMuted: '#8B93A8',
  muted: '#8B93A8',
  clear: '#151515',
  headerBackground: 'rgba(0, 0, 0, 0.5)',
  lineBackground: 'linear-gradient(0deg, #B9B9B9 0%, #000 100%)',
  buttonBackground: '#000',
  buttonColor: '#FFF',
  buttonText: '#FFF',
  hoverButton: '#1E2022',
  shadowBorder: 'rgba(225,225,225,0.3)',
  primary: '#3882e1',
  danger: '#FF2021',
  primaryActive: '#1F3D99',
};

// For Evergreen Design System

export const useThemeColors = (theme) => {
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return {
    textColor: selectedTheme.textColor,
    textMuted: selectedTheme.textMuted,
    background: selectedTheme.background,
    backgroundInvert: selectedTheme.backgroundInvert,
    hoverButton: selectedTheme.hoverButton,
  };
};
