import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../views/Auth';
import { NotFound } from '../views';
import LoginEmailView from '../views/Auth/Login/LoginEmailView';
import AboutView from '../views/About';

/**
 * List of routes available only for anonymous users
 */
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginEmailView />} />
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="about" element={<AboutView />} />,
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
