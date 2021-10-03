/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */
import { createTheme, ThemeProvider, Theme, StyledEngineProvider, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppStore } from './store/AppStore';

// Note: Added by CodeMod when migrate form MUI 4.x to 5x
declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

/**
 * Material UI theme "front" colors, "back" colors are different for Light and Dark modes
 * Material Color Tool: https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=EF9A9A&primary.color=64B5F6
 */
const FRONT_COLORS = {
  primary: {
    main: '#64B5F6',
    contrastText: '#000000',
  },
  secondary: {
    main: '#EF9A9A',
    contrastText: '#000000',
  },
};

/**
 * Material UI theme config for "Light Mode"
 */
const LIGHT_THEME: ThemeOptions = {
  palette: {
    mode: 'light',
    // background: {
    //   paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
    //   default: '#FFFFFF',
    // },
    ...FRONT_COLORS,
  },
};

/**
 * Material UI theme config for "Dark Mode"
 */
const DARK_THEME: ThemeOptions = {
  palette: {
    mode: 'dark',
    // background: {
    //   paper: '#424242', // Gray 800 - Background of "Paper" based component
    //   default: '#121212',
    // },
    ...FRONT_COLORS,
  },
};

/**
 * Material UI Provider with Light and Dark themes depending on global "state.darkMode"
 */
const AppThemeProvider: React.FunctionComponent = ({ children }) => {
  const [state] = useAppStore();
  // const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)));
  const theme = state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline /* Material UI Styles */ />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { AppThemeProvider, LIGHT_THEME, DARK_THEME };
