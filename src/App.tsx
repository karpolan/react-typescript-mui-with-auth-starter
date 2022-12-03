import { AppStore } from './store';
import { AppThemeProvider } from './theme';
import Routes from './routes';
import Layout from './layout';
import { ErrorBoundary } from './components';
import { BrowserRouter } from 'react-router-dom';

/**
 * Root Application Component
 */
const App = () => {
  return (
    <ErrorBoundary name="App">
      <AppStore>
        <AppThemeProvider>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </AppThemeProvider>
      </AppStore>
    </ErrorBoundary>
  );
};

export default App;
