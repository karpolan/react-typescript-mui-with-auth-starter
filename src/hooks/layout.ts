import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

/**
 * Hook to detect onMobile vs. onDesktop using "resize" event listener
 * @returns {boolean} true when on onMobile, false when on onDesktop
 */
export function useOnMobileByTrackingWindowsResize() {
  const theme = useTheme();
  const [onMobile, setOnMobile] = useState(false);

  const handleResize = useCallback(() => {
    setOnMobile(window.innerWidth < theme.breakpoints.values.sm); // sx, sm are "onMobile"
  }, [theme.breakpoints.values.sm]);

  useEffect(() => {
    window.addEventListener('resize', handleResize); // Set resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Remove resize listener
    };
  }, [handleResize]);

  return onMobile;
}

/**
 * Hook to detect onMobile vs. onDesktop using Media Query
 * @returns {boolean} true when on onMobile, false when on onDesktop
 */
export function useOnMobileByMediaQuery() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
}

// export const useOnMobile = useOnMobileByTrackingWindowsResize;
export const useOnMobile = useOnMobileByMediaQuery;

/**
 * Hook to detect Wide Screen (lg, xl) using Media Query
 * @returns {boolean} true when on screen is wide enough
 */
export function useOnWideScreen() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
}
