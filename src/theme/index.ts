import { Theme } from '@mui/material/styles';
import AppThemeProvider from './AppThemeProvider';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {
    // TODO: If you will extend Theme with own properties, also add custom variables here. See https://mui.com/material-ui/customization/theming/#custom-variables
  }
}

export {
  LIGHT_THEME as default, // Change to DARK_THEME if you want to use dark theme as default
  DARK_THEME,
  LIGHT_THEME,
  AppThemeProvider,
};
