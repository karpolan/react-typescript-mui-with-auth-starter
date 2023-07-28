import { useCallback, useEffect } from 'react';
import { useAppStore } from '../store';
import { User as FirebaseUser, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

type CurrentUser = FirebaseUser | null | undefined; // Firebase User can be null, we also support undefined

/**
 * Hook to get currently logged user
 * @returns {object | undefined} user data as object or undefined if user is not logged in
 */
export function useCurrentUser(): CurrentUser {
  let result;
  try {
    const auth = getAuth();
    result = auth.currentUser;
  } catch (error) {
    // Do nothing
  }
  return result;
}

/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */
export function useIsAuthenticated(): boolean {
  const currentUser = useCurrentUser();
  return Boolean(currentUser);
}

/**
 * Returns event handler to Logout current user
 * @returns {function} calling this event logs out current user
 */
export function useEventLogout(): () => void {
  const navigate = useNavigate();
  const [, dispatch] = useAppStore();

  return useCallback(async () => {
    // TODO: AUTH: add auth and tokens cleanup here

    // Firebase sign out
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }

    dispatch({ type: 'LOG_OUT' });
    navigate('/', { replace: true }); // Redirect to home page by reloading the App
  }, [dispatch, navigate]);
}

/**
 * Adds Firebase Auth watchdog and calls different callbacks on login and logout
 * @param {function} afterLogin callback to call after user login
 * @param {function} afterLogout callback to call after user logout
 */
export function useAuthWatchdog(afterLogin: () => void, afterLogout: () => void) {
  const [, dispatch] = useAppStore();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Add Firebase User to AppStore
        console.warn('Firebase user is logged in - uid:', firebaseUser?.uid);
        dispatch({ type: 'LOG_IN', payload: firebaseUser });
        // Call callback if any
        afterLogin?.();
      } else {
        // Remove Firebase User from AppStore
        console.warn('Firebase user is logged out');
        dispatch({ type: 'LOG_OUT' });
        // Call callback if any
        afterLogout?.();
      }
    });
  }, [dispatch, afterLogin, afterLogout]);
}
