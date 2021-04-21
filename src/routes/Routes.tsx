// import { useEffect } from 'react';
import { useAppStore } from '../store';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

/**
 * Renders routes depending on Authenticated or Anonymous users
 */
const Routes = () => {
	const [state /*, dispatch*/] = useAppStore();

	// useEffect(() => {
	// 	// Check isn't token expired?
	// 	const isLogged = isUserStillLoggedIn();
	// 	if (state.isAuthenticated && !isLogged) {
	// 		// Token was expired, logout immediately!
	// 		console.warn('Token was expired, logout immediately!');
	// 		api.auth.logout();
	// 		dispatch({ type: 'LOG_OUT' });
	// 		return; // Thats all for now, the App will be completely re-rendered soon
	// 	}
	// 	if (isLogged && !state.isAuthenticated) {
	// 		// Valid token is present but we are not logged in somehow, lets fix it
	// 		dispatch({ type: 'LOG_IN' });
	// 	}
	// }, [state.isAuthenticated, dispatch]); // Effect for every state.isAuthenticated change 

	console.log('Routes() - isAuthenticated:', state.isAuthenticated);
	return state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;