import { Route, Switch } from 'react-router-dom';
import RecoveryPasswordView from './Password';

/**
 * Routes for "Recovery" flow
 * url: /auth/recovery/*
 */
const RecoveryRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/recovery/password" component={RecoveryPasswordView} />
      <Route component={RecoveryPasswordView} />
    </Switch>
  );
};

export default RecoveryRoutes;
