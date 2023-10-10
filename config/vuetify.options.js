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
        background: '#212121',
        bg: "#212121", // body bg
        surface: "#121212", // card and all box
        bggrey: '#001e26',
        primary: '#e8293b',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#F68338',
        default: '#e8293b',
      },
      light: {
        background: '#ffffff',
        bg: "#ffffff",
        surface: "#ffffff",
        bggrey: '#faf7f2',
        primary: '#e8293b',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#F68338',
        default: '#e8293b',
      },

    },
    options: {
      customProperties: true
    }
  }
}
