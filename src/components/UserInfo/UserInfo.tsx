import { Avatar, Stack, Typography } from '@mui/material';
import AppLink from '../AppLink';

interface UserInfoProps {
  className?: string;
  showAvatar?: boolean;
  user?: any;
}

/**
 * Renders User info with Avatar
 * @component UserInfo
 * @param {string} [className] - optional className for <div> tag
 * @param {boolean} [showAvatar] - user's avatar picture is shown when true
 * @param {object} [user] - logged user data {name, email, avatar...}
 */
const UserInfo = ({ className, showAvatar = false, user, ...restOfProps }: UserInfoProps) => {
  const fullName = user?.name || [user?.nameFirst || '', user?.nameLast || ''].join(' ').trim();
  const srcAvatar = user?.avatar ? user?.avatar : undefined;
  const userPhoneOrEmail = user?.phone || (user?.email as string);

  return (
    <Stack alignItems="center" minHeight="fit-content" marginBottom={2} {...restOfProps}>
      {showAvatar ? (
        <AppLink to="/user" underline="none">
          <Avatar
            sx={{
              width: 64,
              height: 64,
              fontSize: '3rem',
            }}
            alt={fullName || 'User Avatar'}
            src={srcAvatar}
          />
        </AppLink>
      ) : null}
      <Typography sx={{ mt: 1 }} variant="h6">
        {fullName || 'Current User'}
      </Typography>
      <Typography variant="body2">{userPhoneOrEmail || 'Loading...'}</Typography>
    </Stack>
  );
};

export default UserInfo;
