import { ReactNode, FormHTMLAttributes, FunctionComponent } from 'react';
import { Box, Grid } from '@mui/material';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { formStyle } from '../../utils/style';

export const useStyles = makeStyles((theme: Theme) => ({
  formBody: {
    ...formStyle(theme),
  },
}));

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

/**
 * Application styled Form container
 */
const AppForm: FunctionComponent<Props> = ({ children, ...resOfProps }) => {
  const classes = useStyles();
  return (
    <form {...resOfProps}>
      <Grid container direction="column" alignItems="center">
        <Box className={classes.formBody}>{children}</Box>
      </Grid>
    </form>
  );
};

export default AppForm;
