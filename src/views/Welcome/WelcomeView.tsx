import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { AppLink } from '../../components';

/**
 * Renders "Welcome" view
 * url: /
 */
const WelcomeView = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4">Welcome to React App with MUI</Typography>

      <div>This is Welcome page, put your content here....</div>
      <div>
        Take a look on samples of components at <AppLink to="/about">About Page</AppLink>
      </div>
    </Stack>
  );
};

export default WelcomeView;
