import AppThemeProvider from './AppThemeProvider';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';

export * from './createEmotionCache';
export {
  LIGHT_THEME as default, // Change to DARK_THEME if you want to use dark theme as default
  DARK_THEME,
  LIGHT_THEME,
  AppThemeProvider,
};
