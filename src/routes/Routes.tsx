import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useIsAuthenticated } from '../hooks/auth';
// import { isUserStillLoggedIn } from '../api/auth/utils';
// import { api } from '../api';

/**
 * Renders routes depending on Authenticated or Anonymous users
 */
const Routes = () => {
  // const [state, dispatch] = useAppStore();
  // const isAuthenticated = state.isAuthenticated; // Variant 1
  const isAuthenticated = useIsAuthenticated(); // Variant 2

  // Re-login or logout the user if needed
  // useEffect(() => {
  //   // Check isn't token expired?
  //   const isLogged = isUserStillLoggedIn();

  //   if (isAuthenticated && !isLogged) {
  //     // Token was expired, logout immediately!
  //     console.warn('Token was expired, logout immediately!');
  //     api?.auth?.logout();
  //     // dispatch({ type: 'LOG_OUT' }); // Not needed due to reloading App in api.auth.logout()
  //     return; // Thats all for now, the App will be completely re-rendered soon
  //   }

  //   if (isLogged && !isAuthenticated) {
  //     // Valid token is present but we are not logged in somehow, lets fix it
  //     console.warn('Token found, lets try to auto login');
  //     api?.auth?.refresh().then(() => {
  //       dispatch({ type: 'LOG_IN' }); // Update global store only if token refresh was successful.
  //     });
  //   }
  // }, [isAuthenticated, dispatch]); // Effect for every isAuthenticated change actually

  console.log('Routes() - isAuthenticated:', isAuthenticated);

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};
export default Routes;
