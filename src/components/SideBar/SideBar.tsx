import { useCallback } from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { useAppStore } from '../../store/AppStore';
import { AppIconButton } from '../../components';
import UserInfo from '../UserInfo/UserInfo';
import SideBarNavigation from './SideBarNavigation';
import { SIDEBAR_WIDTH } from '../../routes/Layout/PrivateLayout';
import { LinkToPage } from '../../utils/type';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  paperInDrawer: {
    width: SIDEBAR_WIDTH,
    [theme.breakpoints.up('md')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  profile: {
    marginBottom: theme.spacing(2),
  },
  nav: {},
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
}));

/**
 * Renders SideBar with Menu and User details
 * Actually for Authenticated users only, rendered in "Private Layout"
 * @class SideBar
 * @param {string} [prop.anchor] - 'left' or 'right'
 * @param {string} [prop.className] - optional className for <div> tag
 * @param {boolean} props.open - the Drawer is visible when true
 * @param {string} props.variant - variant of the Drawer, one of 'permanent', 'persistent', 'temporary'
 * @param {func} [props.onClose] - called when the Drawer is closing
 */
interface Props extends Pick<DrawerProps, 'anchor' | 'className' | 'open' | 'variant' | 'onClose'> {
  items: Array<LinkToPage>;
}
const SideBar: React.FC<Props> = ({ anchor, className, open, variant, items, onClose, ...restOfProps }) => {
  const [state, dispatch] = useAppStore();
  const classes = useStyles();

  const handleSwitchDarkMode = useCallback(() => {
    dispatch({
      type: 'SET_DARK_MODE',
      darkMode: !state.darkMode,
      payload: !state.darkMode,
    });
  }, [state, dispatch]);

  const handleOnLogout = useCallback(async () => {
    // await api.auth.logout();
    dispatch({ type: 'LOG_OUT' });
  }, [dispatch]);

  const handleAfterLinkClick = useCallback(
    (event: React.MouseEvent) => {
      if (variant === 'temporary' && typeof onClose === 'function') {
        onClose(event, 'backdropClick');
      }
    },
    [variant, onClose]
  );

  const drawerClasses = {
    // See: https://material-ui.com/api/drawer/#css
    paper: classes.paperInDrawer,
  };
  const classRoot = clsx(classes.root, className);

  return (
    <Drawer anchor={anchor} classes={drawerClasses} open={open} variant={variant} onClose={onClose}>
      <div className={classRoot} {...restOfProps} onClick={handleAfterLinkClick}>
        {state.isAuthenticated /*&& state?.currentUser*/ && (
          <>
            <UserInfo className={classes.profile} user={state.currentUser} showAvatar />
            <Divider />
          </>
        )}

        <SideBarNavigation className={classes.nav} items={items} showIcons />
        <Divider />

        <div className={classes.buttons}>
          <Tooltip title={state.darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}>
            <FormControlLabel
              label={!state.darkMode ? 'Light mode' : 'Dark mode'}
              control={<Switch checked={state.darkMode} onChange={handleSwitchDarkMode} />}
            />
          </Tooltip>

          {state.isAuthenticated && (
            <AppIconButton icon="logout" title="Logout Current User" onClick={handleOnLogout} />
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
