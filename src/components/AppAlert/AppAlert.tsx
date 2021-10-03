import clsx from 'clsx';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';

/**
 * Note: You can change these const to control default appearance of the AppAlert component
 */
const APP_ALERT_SEVERITY = 'info'; // 'error' | 'info'| 'success' | 'warning'
const APP_ALERT_VARIANT = 'standard'; // 'filled' | 'outlined' | 'standard'
const APP_ALERT_ELEVATION = 5;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

/**
 * Application styled Alert component
 */
const AppAlert: React.FC<MuiAlertProps> = ({
  severity = APP_ALERT_SEVERITY,
  variant = APP_ALERT_VARIANT,
  elevation = APP_ALERT_ELEVATION,
  className,
  onClose,
  ...restOfProps
}) => {
  const classes = useStyles();
  const classRoot = clsx(classes.root, className);

  return (
    <MuiAlert
      className={classRoot}
      severity={severity}
      variant={variant}
      elevation={elevation}
      onClose={onClose}
      {...restOfProps}
    />
  );
};

export default AppAlert;
