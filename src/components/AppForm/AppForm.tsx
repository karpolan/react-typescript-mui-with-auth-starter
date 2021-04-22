import { ReactNode, FormHTMLAttributes } from 'react';
import { Grid } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
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
const AppForm: React.FC<Props> = ({ children, ...resOfProps }) => {
  const classes = useStyles();
  return (
    <form {...resOfProps}>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.formBody}>
          {children}
        </Grid>
      </Grid>
    </form>
  );
};

export default AppForm;
