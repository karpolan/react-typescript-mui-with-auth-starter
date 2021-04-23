import clsx from 'clsx';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { buttonStylesByNames, ColorName } from '../../utils/style';

const APP_BUTTON_VARIANT = 'contained'; // | 'text' | 'outlined'

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    display: 'inline-block',
  },
  // Add "filled" styles for Material UI names 'primary', 'secondary', 'warning', and so on
  ...buttonStylesByNames(theme),
}));

interface Props extends Omit<ButtonProps, 'color'> {
  color?: ColorName | 'inherit';
  label?: string; // Alternate to text
  text?: string; // Alternate to label
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  // Missing props
  component?: React.ElementType; // Could be RouterLink, AppLink, etc.
  to?: string; // Link prop
  href?: string; // Link prop
  underline?: 'none' | 'hover' | 'always'; // Link prop
}

/**
 * Application styled Material UI Button
 * @class AppButton
 * @param {string} [color] - name of color from Material UI palette 'primary', 'secondary', 'warning', and so on
 * @param {string} [children] - content to render, overrides .label and .text
 * @param {string} [label] - text to render, alternate to .text
 * @param {string} [text] - text to render, alternate to .label
 */
const AppButton: React.FC<Props> = ({
  className,
  children,
  color = 'default',
  label,
  text,
  m = 0,
  mt = 1,
  mb = 1,
  ml = 1,
  mr = 1,
  underline = 'none',
  ...restOfProps
}) => {
  const classes = useStyles();
  const classButton = clsx(classes[color as ColorName], className);
  return (
    <Box {...{ m, mt, mb, ml, mr }} className={classes.box}>
      <Button className={classButton} variant={APP_BUTTON_VARIANT} {...{ ...restOfProps, underline }}>
        {children || label || text}
      </Button>
    </Box>
  );
};

export default AppButton;
