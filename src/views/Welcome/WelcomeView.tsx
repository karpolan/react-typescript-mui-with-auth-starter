import { Typography } from '@mui/material';
import { AppLink, AppView } from '../../components';

/**
 * Renders "Welcome" view
 * url: /
 * @page Welcome
 */
const WelcomeView = () => {
  return (
    <AppView>
      <Typography variant="h4">Welcome to React App with MUI</Typography>

      <div>This is Welcome page, put your content here....</div>
      <div>
        Take a look on samples of components at <AppLink to="/about">About Page</AppLink>
      </div>
    </AppView>
  );
};

export default WelcomeView;
