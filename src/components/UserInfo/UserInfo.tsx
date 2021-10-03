import clsx from 'clsx';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppLink from '../AppLink';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 64,
    height: 64,
    fontSize: '3rem',
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

interface UserInfoProps {
  className?: string;
  showAvatar?: boolean;
  user?: any;
}

/**
 * Renders User info with Avatar
 * @param {string} [className] - optional className for <div> tag
 * @param {boolean} [showAvatar] - user's avatar picture is shown when true
 * @param {object} [user] - logged user data {name, email, avatar...}
 */
const UserInfo = ({ className, showAvatar = false, user, ...restOfProps }: UserInfoProps) => {
  const classes = useStyles();

  const fullName = user?.name || [user?.nameFirst || '', user?.nameLast || ''].join(' ').trim();
  const srcAvatar = user?.avatar ? user?.avatar : undefined;
  const userPhoneOrEmail = user?.phone || (user?.email as string);

  return (
    <div {...restOfProps} className={clsx(classes.root, className)}>
      {showAvatar ? (
        <AppLink to="/user" underline="none">
          <Avatar alt={fullName || 'User Avatar'} className={classes.avatar} src={srcAvatar} />
        </AppLink>
      ) : null}
      <Typography className={classes.name} variant="h6">
        {fullName || 'Current User'}
      </Typography>
      <Typography variant="body2">{userPhoneOrEmail || 'Loading...'}</Typography>
    </div>
  );
};

export default UserInfo;
