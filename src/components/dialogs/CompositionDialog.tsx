import { FunctionComponent, ReactNode, SyntheticEvent } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogProps } from '@mui/material';
import { AppDialogTitle } from './components';
import { useDialogMinWidth } from './utils';

interface Props extends DialogProps {
  title?: string;
  content?: ReactNode;
  actions?: ReactNode;
  onClose?: (event: SyntheticEvent) => void;
}

/**
 * Makes composition of Content and Actions inside the Dialog.
 * @component CompositionDialog
 */
const CompositionDialog: FunctionComponent<Props> = ({
  actions,
  open = false, // Don't show dialog by default
  children = null,
  content = null,
  title = 'Missing title...',
  onClose,
  ...restOfProps
}) => {
  const paperMinWidth = useDialogMinWidth();

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
      <DialogContent sx={{ py: 1 }}>
        {/* Box is temporary fix for https://github.com/mui-org/material-ui/issues/27851 */}
        {/* TODO: verify do we still need this fix */}
        <Box pt={1}>
          {content}
          {children}
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>{actions}</DialogActions>
    </Dialog>
  );
};

export default CompositionDialog;
