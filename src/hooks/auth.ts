import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store';

type CurrentUser = {
  id?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  name?: string;
};

/**
 * Hook to get currently logged user
 * @returns {object | undefined} user data as object or undefined if user is not logged in
 */
export function useCurrentUser(): CurrentUser | undefined {
  const [state] = useAppStore();
  return state.currentUser;
}

/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */
export function useIsAuthenticated() {
  const [state] = useAppStore();
  let result = state.isAuthenticated;

  // TODO: AUTH: add access token verification or other authentication check here
  // result = Boolean(sessionStorageGet('access_token', ''));

  return result;
}

/**
 * Returns event handler to Logout current user
 * @returns {function} calling this event logs out current user
 */
export function useEventLogout() {
  const navigate = useNavigate();
  const [, dispatch] = useAppStore();

  return useCallback(() => {
    // TODO: AUTH: add auth and tokens cleanup here
    // sessionStorageDelete('access_token');

    dispatch({ type: 'LOG_OUT' });
    navigate('/', { replace: true }); // Redirect to home page by reloading the App
  }, [dispatch, navigate]);
}

/**
 * Adds watchdog and calls different callbacks on user login and logout
 * @param {function} afterLogin callback to call after user login
 * @param {function} afterLogout callback to call after user logout
 */
export function useAuthWatchdog(afterLogin: () => void, afterLogout: () => void) {
  const [state, dispatch] = useAppStore();

  useEffect(() => {
    if (state.isAuthenticated) {
      afterLogin?.();
    } else {
      afterLogout?.();
    }
  }, [state.isAuthenticated, dispatch, afterLogin, afterLogout]);
}
