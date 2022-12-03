import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../..';
import SignupView from './SignupView';
import ConfirmEmailView from './ConfirmEmailView';

/**
 * Routes for "Signup" flow
 * url: /auth/signup/*
 */
const SignupRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupView />} />
      <Route path="confirm-email" element={<ConfirmEmailView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SignupRoutes;
