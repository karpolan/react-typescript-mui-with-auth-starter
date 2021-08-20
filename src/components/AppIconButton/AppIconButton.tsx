import clsx from 'clsx';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { PropTypes, Tooltip } from '@material-ui/core';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import { ColorName, buttonStylesByNames } from '../../utils/style';
import AppIcon from '../AppIcon';

const useStyles = makeStyles((theme: Theme) => ({
  // Add styles for Material UI names 'primary', 'secondary', 'warning', and so on
  ...buttonStylesByNames(theme),
}));

function getValidMuiColor(color: string | undefined): PropTypes.Color | undefined {
  if (color && ['inherit', 'primary', 'secondary', 'default'].includes(color)) {
    return color as PropTypes.Color;
  } else {
    return undefined;
  }
}

/**
 * Renders Material UI IconButton with SVG icon by given Name
 * @param {string} [props.icon] - name of Icon to render inside the IconButton
 */
interface Props extends Omit<IconButtonProps, 'color'> {
  color?: ColorName | 'inherit';
  icon?: string;
  // Missing props
  component?: React.ElementType; // Could be RouterLink, AppLink, etc.
  to?: string; // Link prop
  href?: string; // Link prop
}
const AppIconButton: React.FC<Props> = ({ color, className, children, disabled, icon, title, ...restOfProps }) => {
  const classes = useStyles();
  const classButton = clsx(classes[color as ColorName], className);
  const colorButton = getValidMuiColor(color);

  const renderIcon = () => (
    <IconButton className={classButton} color={colorButton} disabled={disabled} {...restOfProps}>
      <AppIcon icon={icon} />
      {children}
    </IconButton>
  );

  // When title is set, wrap te IconButton with Tooltip.
  // Note: when IconButton is disabled the Tooltip is not working, so we don't need it
  if (title && !disabled) {
    return <Tooltip title={title}>{renderIcon()}</Tooltip>;
  }

  return title && !disabled ? <Tooltip title={title}>{renderIcon()}</Tooltip> : renderIcon();
};

export default AppIconButton;
