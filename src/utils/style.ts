import { Theme } from '@mui/material/styles';

export type ColorName =
  | 'default' // TODO: MUI 5.x removes 'default' form Buttons, we need to fix this
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'false'
  | 'true';

/**
 * Makes style to use for Material UI Paper components across the App
 */
export const paperStyle = (theme: Theme) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
});

/**
 * Makes style for Forms across the App
 */
export const formStyle = (theme: Theme) => ({
  width: '100%',
  maxWidth: '40rem', // 640px
});

/**
 * Makes style to use with Material UI dialogs across the App
 */
export const dialogStyles = (
  theme: Theme
): { xButton: any; paper: any; formControl: any; content: any; actions: any } => ({
  xButton: {
    position: 'absolute',
    right: theme.spacing(1) / 2, // TODO: MUI v5 returns '16px' instead of 16
    top: theme.spacing(1) / 2, // TODO: MUI v5 returns '16px' instead of 16
  },
  paper: {
    [theme.breakpoints.up('md')]: {
      minWidth: theme.breakpoints.values.md / 2, // TODO: Verify MUI v5 theme.breakpoints.values, maybe it is also number with 'px' now
    },
    [theme.breakpoints.down('md')]: {
      // TODO: 'sm' was changed to 'md' by CodeMod
      minWidth: theme.breakpoints.values.sm / 2, // TODO: Verify MUI v5 theme.breakpoints.values, maybe it is also number with 'px' now
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  actions: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
});

/**
 * Makes "filled" styles for Material UI names 'primary', 'secondary', 'warning', and so on
 */
export const filledStylesByNames = (theme: Theme) => ({
  // Standard MUI names
  default: {}, // TODO: MUI 5.x removes 'default' form Buttons, we need to fix this
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  info: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  // Boolean
  false: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  true: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
});

/**
 * Makes "text" styles for Material UI names 'primary', 'secondary', 'warning', etc.
 * Also adds 'true' and 'false' classes
 */
export const textStylesByNames = (theme: Theme) => ({
  // Standard MUI names
  default: {}, // TODO: MUI 5.x removes 'default' form Buttons, we need to fix this
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  info: {
    color: theme.palette.info.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  // Boolean
  false: {
    color: theme.palette.error.main,
  },
  true: {
    color: theme.palette.success.main,
  },
});

/**
 * Makes "filled" + "hover" (like in Buttons) styles for Material UI names 'primary', 'secondary', 'warning', and so on
 * Note: Fully compatible with variant="contained" only
 */
export const buttonStylesByNames = (theme: Theme) => ({
  // Standard MUI names
  default: {}, // TODO: MUI 5.x removes 'default' form Buttons, we need to fix this
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.error.light,
    },
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
      color: theme.palette.warning.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.warning.light,
    },
  },
  info: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.info.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.info.light,
    },
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.success.light,
    },
  },
  // Boolean
  false: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.error.light,
    },
  },
  true: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.success.light,
    },
  },
});
