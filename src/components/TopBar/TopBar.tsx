import clsx from 'clsx';
import { makeStyles, Theme, AppBar, Toolbar, Typography } from '@material-ui/core';
import AppIconButton from '../AppIconButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //boxShadow: 'none',
    minWidth: '20rem',
  },
  toolbar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  logo: {
    height: theme.spacing(4),
  },
  title: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  buttons: {},
}));

/**
 * Renders TopBar composition
 */
interface Props {
  className?: string;
  title?: string;
  isAuthenticated?: boolean;
  onMenu?: () => void;
  onNotifications?: () => void;
}
const TopBar: React.FC<Props> = ({
  className,
  title = '',
  isAuthenticated,
  onMenu,
  onNotifications,
  ...restOfProps
}) => {
  const classes = useStyles();
  // const iconMenu = isAuthenticated ? 'account' : 'menu';

  return (
    <AppBar {...restOfProps} className={clsx(classes.root, className)} component="div">
      <Toolbar className={classes.toolbar} disableGutters>
        <AppIconButton
          icon="logo"
          // color="primary"
          onClick={onMenu}
        />

        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>

        <div className={classes.buttons}>
          {isAuthenticated && (
            <AppIconButton icon="notifications" color="inherit" title="User Notifications" onClick={onNotifications} />
          )}
          {/* <AppIconButton icon={iconMenu} color="inherit" title="Open Menu" onClick={onMenu} /> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
