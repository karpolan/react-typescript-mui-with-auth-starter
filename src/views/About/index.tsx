import { Route, Switch } from 'react-router-dom';
import AboutView from './About';

/**
 * Routes for "About" view
 * url: /about/*
 */
const AboutRoutes = () => {
  return (
    <Switch>
      <Route component={AboutView} />
    </Switch>
  );
};

export default AboutRoutes;
