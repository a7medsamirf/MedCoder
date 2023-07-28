let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('MedFoodDarkMode') || false
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      dark: {
        background: '#0B0D39',
        bg: "#0B0D39", // body bg
        surface: "#2B2D5B", // card and all box
        bggrey: '#001e26',
        primary: '#3a37eb',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#F68338',
        default: '#d9230a',
      },
      light: {
        background: '#d0f0c0',
        bg: "#ffffff",
        surface: "#ffffff",
        bggrey: '#faf7f2',
        primary: '#3a37eb',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#F68338',
        default: '#d9230a',
      },

    },
    options: {
      customProperties: true
    }
  }
}
