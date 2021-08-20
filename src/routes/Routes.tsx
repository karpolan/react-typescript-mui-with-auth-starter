// import { useEffect } from 'react';
import { useAppStore } from '../store';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
// import { isUserStillLoggedIn } from '../api/auth/utils';
// import { api } from '../api';

/**
 * Renders routes depending on Authenticated or Anonymous users
 */
const Routes = () => {
  const [state /*, dispatch*/] = useAppStore();

  // Re-login or logout the user if needed
  // useEffect(() => {
  //   // Check isn't token expired?
  //   const isLogged = isUserStillLoggedIn();

  //   if (state.isAuthenticated && !isLogged) {
  //     // Token was expired, logout immediately!
  //     console.warn('Token was expired, logout immediately!');
  //     api?.auth?.logout();
  //     // dispatch({ type: 'LOG_OUT' }); // Not needed due to reloading App in api.auth.logout()
  //     return; // Thats all for now, the App will be completely re-rendered soon
  //   }

  //   if (isLogged && !state.isAuthenticated) {
  //     // Valid token is present but we are not logged in somehow, lets fix it
  //     console.warn('Token found, lets try to auto login');
  //     api?.auth?.refresh().then(() => {
  //       dispatch({ type: 'LOG_IN' }); // Update global store only if token refresh was successful.
  //     });
  //   }
  // }, [state.isAuthenticated, dispatch]); // Effect for every state.isAuthenticated change actually

  console.log('Routes() - isAuthenticated:', state.isAuthenticated);
  return state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};
export default Routes;
