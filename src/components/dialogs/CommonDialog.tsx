import { FunctionComponent, ReactNode, SyntheticEvent, useCallback } from 'react';
import { Dialog, DialogActions, DialogContent, DialogProps } from '@mui/material';
import { AppButton } from '..';
import { AppDialogTitle } from './components';
import { ColorName } from '../../utils/style';
import { useDialogMinWidth } from './utils';

interface Props extends DialogProps {
  data?: unknown;
  title?: string;
  text?: string;
  body?: ReactNode;
  hideCancelButton?: boolean;
  confirmButtonText?: string;
  confirmButtonColor?: ColorName;
  onConfirm?: (data: unknown) => void;
  onClose?: (event: SyntheticEvent) => void;
}

/**
 * Shows generic "Common" dialog
 * @component CommonDialog
 * @param {function} props.onConfirm - event for Confirm button, called as onConfirm(data)
 * @param {function} props.onClose - event for Close and Cancel buttons and the backdrop
 */
const CommonDialog: FunctionComponent<Props> = ({
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
  ...restOfProps
}) => {
  const paperMinWidth = useDialogMinWidth();

  const handleOnConfirm = useCallback(() => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm(data);
    }
  }, [data, onConfirm]);

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      open={open}
      PaperProps={{
        sx: {
          minWidth: paperMinWidth,
        },
      }}
      onClose={onClose}
      {...restOfProps}
    >
      <AppDialogTitle id="form-dialog-title" onClose={onClose}>
        {title}
      </AppDialogTitle>
      <DialogContent sx={{ py: 1 }}>{body || text}</DialogContent>
      <DialogActions sx={{ px: 3 }}>
        {!hideCancelButton && <AppButton onClick={onClose}>Cancel</AppButton>}
        <AppButton onClick={handleOnConfirm} color={confirmButtonColor} sx={{ mr: 0 }}>
          {confirmButtonText}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
