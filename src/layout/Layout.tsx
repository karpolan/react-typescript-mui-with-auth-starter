import { FunctionComponent } from 'react';
import { useAppStore } from '../store';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

/**
 * Returns the current Layout component depending on different circumstances.
 */
const CurrentLayout: FunctionComponent = (props) => {
  const [state] = useAppStore();
  return state.isAuthenticated ? <PrivateLayout {...props} /> : <PublicLayout {...props} />;
};

export default CurrentLayout;
