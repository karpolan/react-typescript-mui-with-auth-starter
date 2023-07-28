import { FunctionComponent } from 'react';
import { CircularProgress, CircularProgressProps, LinearProgress, Stack, StackProps } from '@mui/material';
import { APP_LOADING_COLOR, APP_LOADING_SIZE, APP_LOADING_TYPE } from '../config';

interface Props extends StackProps {
  color?: CircularProgressProps['color'];
  size?: number | string;
  type?: 'circular' | 'linear';
  value?: number;
}

/**
 * Renders MI circular progress centered inside Stack
 * @component AppLoading
 * @prop {string} [size] - size of the progress component. Numbers means pixels, string can be '2.5rem'
 */
const AppLoading: FunctionComponent<Props> = ({
  color = APP_LOADING_COLOR,
  size = APP_LOADING_SIZE,
  type = APP_LOADING_TYPE,
  value,
  ...restOfProps
}) => {
  const alignItems = type === 'linear' ? undefined : 'center';
  return (
    <Stack my={2} alignItems={alignItems} {...restOfProps}>
      {type === 'linear' ? (
        <LinearProgress color={color} value={value} />
      ) : (
        <CircularProgress color={color} size={size} value={value} />
      )}
    </Stack>
  );
};

export default AppLoading;
