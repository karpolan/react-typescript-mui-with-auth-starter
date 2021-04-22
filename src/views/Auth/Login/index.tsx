import { Route, Switch } from 'react-router-dom';
import LoginEmailView from './Email';

/**
 * Routes for "Login" flow
 * url: /auth/login/*
 */
const LoginRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/login/email" component={LoginEmailView} />
      <Route component={LoginEmailView} />
    </Switch>
  );
};

export default LoginRoutes;
