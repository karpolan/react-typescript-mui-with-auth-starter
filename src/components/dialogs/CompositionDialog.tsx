import { ReactNode } from 'react';
import { makeStyles, createStyles, Dialog, DialogActions, DialogContent, DialogProps } from '@material-ui/core';
import { AppDialogTitle } from './components';
import { dialogStyles } from '../../utils/style';

const useStyles = makeStyles((theme) =>
  createStyles({
    ...dialogStyles(theme),
  })
);

/**
 * Makes composition of Content and Actions inside the Dialog.
 */
interface Props extends DialogProps {
  title?: string;
  content?: ReactNode;
  actions?: ReactNode;
  onClose?: (event: {}) => void;
}
const CompositionDialog: React.FC<Props> = ({
  actions,
  open = false, // Don't show dialog by default
  children = null,
  content = null,
  title = 'Missing title...',
  onClose,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      {...props}
    >
      <AppDialogTitle id="form-dialog-title" onClose={onClose}>
        {title}
      </AppDialogTitle>
      <DialogContent className={classes.content}>
        {content}
        {children}
      </DialogContent>
      <DialogActions className={classes.actions}>{actions}</DialogActions>
    </Dialog>
  );
};

export default CompositionDialog;
