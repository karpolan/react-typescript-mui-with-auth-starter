import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../layout';
import { NotFoundView } from '../views';
import AboutView from '../views/About';
import DevView from '../views/Dev';
import LoginEmailView from '../views/Auth/Login/LoginEmailView';
import AuthRoutes from '../views/Auth';

/**
 * List of routes available for anonymous users
 * Also renders the "Public Layout" composition
 * @routes PublicRoutes
 */
const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<LoginEmailView />} />
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="about" element={<AboutView />} />
        {process.env.REACT_APP_DEBUG === 'true' && <Route path="dev" element={<DevView />} />}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
