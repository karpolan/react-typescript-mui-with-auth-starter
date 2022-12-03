import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../..';
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RecoveryRoutes;
