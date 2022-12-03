import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../views';
import AboutView from '../views/About';
import { WelcomeView } from '../views/Welcome';

/**
 * List of routes available only for authenticated users
 * Also renders the "Private Layout" composition
 */
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeView />} />
      <Route path="welcome" element={<WelcomeView />} />
      <Route path="about" element={<AboutView />} />,
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PrivateRoutes;
