import { Grid, Typography } from '@mui/material';
import { AppLink } from '../../components';

/**
 * Renders default view for Auth flow
 * url: /auth/
 */
const AuthView = () => {
  return (
    <Grid container direction="column">
      <Typography variant="h2">Auth View</Typography>
      <ul>
        <li>
          <AppLink to="/auth/signup">Signup</AppLink>
        </li>
        <li>
          <AppLink to="/auth/login">Login</AppLink>
        </li>
        <li>
          <AppLink to="/auth/recovery">Recovery</AppLink>
        </li>
      </ul>
    </Grid>
  );
};

export default AuthView;
