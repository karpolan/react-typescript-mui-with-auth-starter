import { ReactNode, useCallback } from 'react';
import { makeStyles, createStyles, Dialog, DialogActions, DialogContent, DialogProps } from '@material-ui/core';
import { AppButton } from '..';
import { AppDialogTitle } from './components';
import { ColorName, dialogStyles } from '../../utils/style';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    ...dialogStyles(theme),
  })
);

/**
 * Shows generic "Common" dialog
 * @param {function} props.onConfirm - event for Confirm button, called as onConfirm(data)
 * @param {function} props.onClose - event for Close and Cancel buttons and the backdrop
 */
interface Props extends DialogProps {
  data?: unknown;
  title?: string;
  text?: string;
  body?: ReactNode;
  hideCancelButton?: boolean;
  confirmButtonText?: string;
  confirmButtonColor?: ColorName;
  onConfirm?: (data: unknown) => void;
  onClose?: (event: {}) => void;
}
const CommonDialog: React.FC<Props> = ({
  open = false, // Don't show dialog by default
  data, // optional data passed to onConfirm callback
  title = 'Missing title...',
  text = 'Text is missing...',
  body, // JSX to render instead of .text
  hideCancelButton = false,
  confirmButtonText = 'Confirm',
  confirmButtonColor = 'primary',
  onConfirm,
  onClose,
  ...props
}) => {
  const classes = useStyles();

  const handleOnConfirm = useCallback(() => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm(data);
    }
  }, [data, onConfirm]);

  return (
    <Dialog
      className={classes.root}
      classes={{ paper: classes.paper }}
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      {...props}
    >
      <AppDialogTitle id="form-dialog-title" onClose={onClose}>
        {title}
      </AppDialogTitle>
      <DialogContent>{body || text}</DialogContent>
      <DialogActions className={classes.actions}>
        {!hideCancelButton && <AppButton onClick={onClose}>Cancel</AppButton>}
        <AppButton onClick={handleOnConfirm} color={confirmButtonColor} mr={0}>
          {confirmButtonText}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
