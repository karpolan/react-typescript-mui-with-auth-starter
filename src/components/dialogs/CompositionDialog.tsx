import { ReactNode } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
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
        {/* Box is temporary fix for https://github.com/mui-org/material-ui/issues/27851 */}
        <Box pt={1}>
          {content}
          {children}
        </Box>
      </DialogContent>
      <DialogActions className={classes.actions}>{actions}</DialogActions>
    </Dialog>
  );
};

export default CompositionDialog;
