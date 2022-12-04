import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '../..';
import RecoveryPasswordView from './RecoveryPasswordView';

/**
 * Routes for "Recovery" flow
 * url: /auth/recovery/*
 */
const RecoveryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RecoveryPasswordView />} />
      <Route path="password" element={<RecoveryPasswordView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default RecoveryRoutes;
