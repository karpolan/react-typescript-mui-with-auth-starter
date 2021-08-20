import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import { useAppStore } from '../../store';
import TopBar from '../../components/TopBar';
import { ErrorBoundary } from '../../components';
import SideBar from '../../components/SideBar/SideBar';
import { LinkToPage } from '../../utils/type';

const TITLE_PRIVATE = 'Private Web App';
const MOBILE_SIDEBAR_ANCHOR = 'left'; // 'right';
const DESKTOP_SIDEBAR_ANCHOR = 'left'; // 'right';
export const SIDEBAR_WIDTH = 240; // 240px

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh', // Full screen height
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  header: {},
  shiftContent: {
    paddingLeft: DESKTOP_SIDEBAR_ANCHOR.includes('left') ? SIDEBAR_WIDTH : 0,
    paddingRight: DESKTOP_SIDEBAR_ANCHOR.includes('right') ? SIDEBAR_WIDTH : 0,
  },
  content: {
    flexGrow: 1, // Takes all possible space
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  footer: {},
}));

/**
 * Centralized place in the App to update document.title
 */

function updateDocumentTitle(title = '') {
  if (title) {
    document.title = `${title} - ${TITLE_PRIVATE}`;
  } else {
    document.title = TITLE_PRIVATE;
  }
  return document.title;
}

/**
 * "Link to Page" items in Sidebar
 */
const SIDE_BAR_PRIVATE_ITEMS: Array<LinkToPage> = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    title: 'Profile',
    path: '/user',
    icon: 'account',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
  {
    title: 'Dev Tools',
    path: '/dev',
    icon: 'settings',
  },
];

/**
 * Renders "Private Layout" composition
 */
const PrivateLayout: React.FC = ({ children }) => {
  const [state] = useAppStore();
  const [openSideBar, setOpenSideBar] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true });
  const history = useHistory();

  const handleLogoClick = useCallback(() => {
    // Navigate to '/' when clicking on Logo/Menu icon when the SideBar is already visible
    history.push('/');
  }, [history]);

  const handleSideBarOpen = useCallback(() => {
    if (!openSideBar) setOpenSideBar(true);
  }, [openSideBar]);

  const handleSideBarClose = useCallback(() => {
    if (openSideBar) setOpenSideBar(false);
  }, [openSideBar]);

  const classRoot = clsx({
    [classes.root]: true,
    [classes.shiftContent]: isDesktop,
  });
  const title = updateDocumentTitle();
  const shouldOpenSideBar = isDesktop ? true : openSideBar;

  return (
    <Grid container direction="column" className={classRoot}>
      <Grid item className={classes.header} component="header">
        <TopBar
          isAuthenticated={state.isAuthenticated}
          title={title}
          onMenu={shouldOpenSideBar ? handleLogoClick : handleSideBarOpen}
        />

        <SideBar
          anchor={isDesktop ? DESKTOP_SIDEBAR_ANCHOR : MOBILE_SIDEBAR_ANCHOR}
          open={shouldOpenSideBar}
          variant={isDesktop ? 'persistent' : 'temporary'}
          items={SIDE_BAR_PRIVATE_ITEMS}
          onClose={handleSideBarClose}
        />
      </Grid>

      <Grid className={classes.content} component="main">
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default PrivateLayout;
