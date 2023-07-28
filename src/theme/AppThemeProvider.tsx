import { FunctionComponent, useMemo, PropsWithChildren } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useAppStore } from '../store';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';
import createEmotionCache from './createEmotionCache';

function getThemeByDarkMode(darkMode: boolean) {
  return darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);
}

// Client-side cache, shared for the whole session of the user in the browser.
const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

interface Props extends PropsWithChildren {
  emotionCache?: EmotionCache; // You can omit it if you don't want to use Emotion styling library
}

/**
 * Renders composition of Emotion's CacheProvider + MUI's ThemeProvider to wrap content of entire App
 * The Light or Dark themes applied depending on global .darkMode state
 * @param {EmotionCache} [emotionCache] - shared Emotion's cache to use in the App
 */
const AppThemeProvider: FunctionComponent<Props> = ({ children, emotionCache = CLIENT_SIDE_EMOTION_CACHE }) => {
  const [state] = useAppStore();

  const theme = useMemo(
    () => getThemeByDarkMode(state.darkMode),
    [state.darkMode] // Observe AppStore and re-create the theme when .darkMode changes
  );

  return (
    <CacheProvider value={emotionCache}>
      {/* <StyledEngineProvider injectFirst> use this instead of Emotion's <CacheProvider/> if you want to use alternate styling library */}
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        {children}
      </ThemeProvider>
      {/* </StyledEngineProvider> */}
    </CacheProvider>
  );
};

export default AppThemeProvider;
