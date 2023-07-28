import { AppThemeProvider } from './theme';
import { AppStore } from './store';
import { ErrorBoundary } from './components';
import Routes from './routes';

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {
  return (
    <ErrorBoundary name="App">
      <AppStore>
        <AppThemeProvider>
          <Routes />
        </AppThemeProvider>
      </AppStore>
    </ErrorBoundary>
  );
};

export default MainApp;
