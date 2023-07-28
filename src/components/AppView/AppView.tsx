import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack, StackProps, useMediaQuery, useTheme } from '@mui/material';
import { CONTENT_MAX_WIDTH, CONTENT_MIN_WIDTH } from '../config';

/**
 * Renders View container composition with limited width
 * @component AppView
 */
const AppView: FunctionComponent<PropsWithChildren<StackProps>> = ({ children, minWidth, ...restOfProps }) => {
  const theme = useTheme();
  const onSmallScreens = useMediaQuery(theme.breakpoints.down('sm'));
  const minWidthToRender = onSmallScreens ? '100%' : minWidth ?? CONTENT_MIN_WIDTH;

  return (
    <Stack alignSelf="center" gap={2} maxWidth={CONTENT_MAX_WIDTH} minWidth={minWidthToRender} {...restOfProps}>
      {children}
    </Stack>
  );
};

export default AppView;
