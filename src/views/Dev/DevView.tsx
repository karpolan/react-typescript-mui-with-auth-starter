import { AppView } from '../../components';

/**
 * Renders Development tools when env.REACT_APP_DEBUG is true
 * url: /dev
 * @page Dev
 */
const DevView = () => {
  if (process.env.REACT_APP_DEBUG !== 'true') return null; // Hide this page on when env.REACT_APP_DEBUG is not set

  return <AppView>Debug controls and components on this page...</AppView>;
};

export default DevView;
