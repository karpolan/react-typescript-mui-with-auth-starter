import { ElementType, FunctionComponent, useMemo } from 'react';
import { Tooltip, IconButton, IconButtonProps } from '@mui/material';
import AppIcon from '../AppIcon';
import AppLink from '../AppLink';
import { alpha } from '@mui/material';

const MUI_ICON_BUTTON_COLORS = ['inherit', 'default', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];

interface Props extends Omit<IconButtonProps, 'color'> {
  color?: string; // Not only 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  icon?: string;
  // Missing props
  component?: ElementType; // Could be RouterLink, AppLink, <a>, etc.
  to?: string; // Link prop
  href?: string; // Link prop
  openInNewTab?: boolean; // Link prop
}

/**
 * Renders MUI IconButton with SVG image by given Icon name
 * @component AppIconButton
 * @param {string} [color] - color of background and hover effect. Non MUI values is also accepted.
 * @param {boolean} [disabled] - the IconButton is not active when true, also the Tooltip is not rendered.
 * @param {string} [href] - external link URI
 * @param {string} [icon] - name of Icon to render inside the IconButton
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true
 * @param {string} [size] - size of the button: 'small', 'medium' or 'large'
 * @param {Array<func| object| bool> | func | object} [sx] - additional CSS styles to apply to the button
 * @param {string} [title] - when set, the IconButton is rendered inside Tooltip with this text
 * @param {string} [to] - internal link URI
 */
const AppIconButton: FunctionComponent<Props> = ({
  color = 'default',
  component,
  children,
  disabled,
  icon,
  sx,
  title,
  ...restOfProps
}) => {
  const componentToRender = !component && (restOfProps?.href || restOfProps?.to) ? AppLink : component ?? IconButton;

  const isMuiColor = useMemo(() => MUI_ICON_BUTTON_COLORS.includes(color), [color]);

  const IconButtonToRender = useMemo(() => {
    const colorToRender = isMuiColor ? (color as IconButtonProps['color']) : 'default';
    const sxToRender = {
      ...sx,
      ...(isMuiColor
        ? {}
        : {
            color: color,
            ':hover': {
              backgroundColor: alpha(color, 0.04),
            },
          }),
    };
    return (
      <IconButton
        component={componentToRender}
        color={colorToRender}
        disabled={disabled}
        sx={sxToRender}
        {...restOfProps}
      >
        <AppIcon icon={icon} />
        {children}
      </IconButton>
    );
  }, [color, componentToRender, children, disabled, icon, isMuiColor, sx, restOfProps]);

  // When title is set, wrap the IconButton with Tooltip.
  // Note: when IconButton is disabled the Tooltip is not working, so we don't need it
  return title && !disabled ? <Tooltip title={title}>{IconButtonToRender}</Tooltip> : IconButtonToRender;
};

export default AppIconButton;
