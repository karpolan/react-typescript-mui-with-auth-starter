import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, BottomNavigation, BottomNavigationAction, Grid } from '@material-ui/core/';
import { useAppStore } from '../../store/AppStore';
import { ErrorBoundary, AppIconButton, AppIcon } from '../../components';
import SideBar from '../../components/SideBar/SideBar';
import { LinkToPage } from '../../utils/type';

const TITLE_PUBLIC = 'Some App';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh', // Full screen height
    paddingTop: 56, // on Small screen
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64, // on Large screen
    },
  },
  header: {},
  toolbar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  title: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  content: {
    flexGrow: 1, // Takes all possible space
    padding: theme.spacing(1),
  },
  footer: {},
}));

/**
 * "Link to Page" items in Sidebar
 */
const SIDE_BAR_PUBLIC_ITEMS: Array<LinkToPage> = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

/**
 * Renders "Public Layout" composition
 */
const PublicLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [state, dispatch] = useAppStore();
  const history = useHistory();

  const title = TITLE_PUBLIC;
  document.title = title; // Also Update Tab Title

  const handleSwitchDarkMode = useCallback(() => {
    dispatch({
      type: 'SET_DARK_MODE',
      darkMode: !state.darkMode,
      payload: !state.darkMode,
    });
  }, [state, dispatch]);

  const handleSideBarOpen = useCallback(() => {
    if (!openSideBar) setOpenSideBar(true);
  }, [openSideBar]);

  const handleSideBarClose = useCallback(() => {
    if (openSideBar) setOpenSideBar(false);
  }, [openSideBar]);

  const handleBottomNavigationChange = (event: React.ChangeEvent<{}>, value: any) => {
    history.push(value);
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.header} component="header">
        <AppBar component="div">
          <Toolbar className={classes.toolbar} disableGutters>
            <AppIconButton icon="logo" onClick={handleSideBarOpen} />

            <Typography className={classes.title} variant="h6">
              {title}
            </Typography>

            <AppIconButton
              icon={state.darkMode ? 'day' : 'night'}
              title={state.darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
              color="primary"
              onClick={handleSwitchDarkMode}
            />
          </Toolbar>
        </AppBar>

        <SideBar
          anchor="left"
          open={openSideBar}
          variant="temporary"
          items={SIDE_BAR_PUBLIC_ITEMS}
          onClose={handleSideBarClose}
        />
      </Grid>

      <Grid item className={classes.content} component="main">
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Grid>

      <Grid item className={classes.footer} component="footer">
        <BottomNavigation onChange={handleBottomNavigationChange} showLabels>
          <BottomNavigationAction label="Login" value="/auth/login" icon={<AppIcon icon="login" />} />
          <BottomNavigationAction label="Signup" value="/auth/signup" icon={<AppIcon icon="signup" />} />
          <BottomNavigationAction label="About" value="/about" icon={<AppIcon icon="info" />} />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
};

export default PublicLayout;
