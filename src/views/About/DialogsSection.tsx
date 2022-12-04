import { ChangeEvent, useState, ReactNode, useCallback } from 'react';
import { Card, CardHeader, Grid, TextField } from '@mui/material';
import { AppButton, AppIconButton } from '../../components';
import {
  CommonDialog as MessageDialog,
  CommonDialog as ConfirmationDialog,
  CompositionDialog as EmailEditDialog,
} from '../../components/dialogs';

/**
 * Renders demo section for Dialogs
 */
const DialogsSection = () => {
  const [modal, setModal] = useState<ReactNode | null>(null);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [email, setEmail] = useState('i@karpolan.com');

  const onDialogClose = useCallback(() => {
    setModal(null);
  }, []);

  const onMessageDialogConfirm = useCallback((data: unknown) => {
    console.info('onMessageDialogConfirm() - data:', data);
    setModal(null);
  }, []);

  const onMessageDialogOpen = () => {
    setModal(
      <MessageDialog
        open
        hideCancelButton
        confirmButtonText="OK"
        data="Dialog Data can be object, string, number, boolean, etc. It is passed to onConfirm callback"
        title="Simple Message"
        text={`Use props.text to pass string message here. 
			         If you need to render JSX content inside the dialog use props.body. 
			         Text and color of the "Confirm" button is customizable.
					     The "Cancel" button can be hidden`}
        onClose={onDialogClose}
        onConfirm={onMessageDialogConfirm}
      />
    );
  };

  const onConfirmDialogConfirm = useCallback((data: unknown) => {
    console.info('onConfirmDialogConfirm() - data:', data);
    setModal(null);
  }, []);

  const onConfirmDialogOpen = () => {
    const dialogData = {
      id: 123,
      name: 'Sample data for Confirm Dialog',
    };
    setModal(
      <ConfirmationDialog
        open
        data={dialogData}
        title="Do you really want to do something?"
        body={
          <>
            <div>JSX content can be easily added into the dialog via props.body</div>
            <br />
            <AppIconButton title="Default icon, no color specified" />
            <AppIconButton icon="close" color="primary" title="Close icon with Primary color" />
            <AppIconButton icon="menu" color="secondary" title="Menu icon with Secondary color" />
            <AppIconButton icon="settings" color="error" title="Settings icon with Error color" />
            <AppIconButton icon="search" color="warning" title="Search icon with Warning color" />
            <AppIconButton icon="info" color="info" title="Info icon with Info color" />
            <AppIconButton icon="home" color="success" title="Home icon with Success color" />
            <AppIconButton
              icon="visibilityoff"
              color="#FF8C00"
              title="VisibilityOff icon with DarkOrange (#FF8C00) color"
            />
            <AppIconButton
              icon="visibilityon"
              color="rgb(50, 205, 50)"
              title="VisibilityOn icon with LimeGreen (rgb(50, 205, 50)) color"
            />
            <AppIconButton icon="account" color="inherit" title="Account icon with Inherit color" />
            {/* <AppIconButton icon="close" color="primary" disabled title="Disabled Close icon with Primary color" /> */}
            <br />
            <br />
            <div>
              The props.body takes precedence over props.text. So JSX content is rendered, but the text is ignored
            </div>
          </>
        }
        text="!!! This text will not be rendered !!!"
        confirmButtonText="Confirm and do something"
        onClose={onDialogClose}
        onConfirm={onConfirmDialogConfirm}
      />
    );
  };

  const onEditEmailDialogClose = useCallback((data: unknown) => {
    setOpenEmailDialog(false);
  }, []);

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onEditEmailDialogOpen = () => {
    setOpenEmailDialog(true);
  };

  return (
    <>
      {modal}
      {openEmailDialog && (
        <EmailEditDialog
          open
          title="Edit Email"
          onClose={onEditEmailDialogClose}
          content={
            <div>
              <TextField variant="outlined" label="Email address" fullWidth value={email} onChange={onEmailChange} />
              <p>This is CompositionDialog with JSX in props.content and props.actions</p>
            </div>
          }
          actions={
            <>
              <AppButton onClick={onEditEmailDialogClose}>Cancel</AppButton>
              <AppButton sx={{ mr: 0 }} color="success" onClick={onEditEmailDialogClose}>
                OK
              </AppButton>
            </>
          }
        />
      )}

      <Card>
        <CardHeader title="Dialogs" />
        <Grid container direction="column" alignItems="center">
          <AppButton size="small" label="Simple Message" color="default" onClick={onMessageDialogOpen} />
          <AppButton size="small" label="Confirmation Dialog" color="primary" onClick={onConfirmDialogOpen} />
          <AppButton
            size="small"
            label="Edit Email - Composition Dialog"
            color="secondary"
            onClick={onEditEmailDialogOpen}
          />
          <br />
        </Grid>
      </Card>
    </>
  );
};

export default DialogsSection;
