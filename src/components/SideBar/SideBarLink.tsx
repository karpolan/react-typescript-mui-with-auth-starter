import { forwardRef } from 'react';
import clsx from 'clsx';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1, // takes all width
  },
  link: {
    color: theme.palette.text.secondary,
  },
  linkActive: {
    color: theme.palette.text.primary,
  },
}));

/**
 * Router link with styling to use in SideBar, highlights the current url.
 */
const SideBarLink = forwardRef<any, NavLinkProps>(({ className, ...restOfProps }, ref) => {
  const classes = useStyles();
  const classLink = clsx(className, classes.link);
  return (
    <div ref={ref} className={classes.root}>
      <NavLink exact className={classLink} activeClassName={classes.linkActive} {...restOfProps} />
    </div>
  );
});

export default SideBarLink;
