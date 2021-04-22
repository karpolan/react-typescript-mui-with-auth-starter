import { BrowserRouter } from 'react-router-dom';

/**
 * Router of the Application
 */
const AppRouter: React.FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppRouter;
