import { Route, Switch } from 'react-router-dom';
import AuthView from './Auth';
import SignupRoutes from './Signup';
import LoginRoutes from './Login';
import RecoveryRoutes from './Recovery';

/**
 * Routes for "Auth" flow
 * url: /auth/*
 */
const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/signup" component={SignupRoutes} />
      <Route path="/auth/login" component={LoginRoutes} />
      <Route path="/auth/recovery" component={RecoveryRoutes} />
      <Route component={AuthView} />
    </Switch>
  );
};

export default AuthRoutes;
