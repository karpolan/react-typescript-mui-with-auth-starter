import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AppIcon from '../../components/AppIcon';
import { LinkToPage } from '../../utils/type';

interface Props {
  items: Array<LinkToPage>;
}

/**
 * Renders horizontal Navigation Bar using MUI BottomNavigation component
 * @component BottomBar
 */
const BottomBar: FunctionComponent<Props> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavigationChange = useCallback(
    (event: ChangeEvent<{}>, newValue: string) => {
      navigate(newValue);
    },
    [navigate]
  );

  return (
    <BottomNavigation
      value={location.pathname} // Automatically highlights bottom navigation for current page
      showLabels // Always show labels on bottom navigation, otherwise label visible only for active page
      onChange={onNavigationChange}
    >
      {items.map(({ title, path, icon }) => (
        <BottomNavigationAction key={`${title}-${path}`} label={title} value={path} icon={<AppIcon icon={icon} />} />
      ))}
    </BottomNavigation>
  );
};

export default BottomBar;
