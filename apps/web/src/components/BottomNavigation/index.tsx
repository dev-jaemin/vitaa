import MUIBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';

import { useFlow } from '../../layouts/stackflow';

export function BottomNavigation() {
  const { push } = useFlow();

  // @TODO - Add a type for the activity
  const handleClick = (_: React.SyntheticEvent<Element, Event>, activity: 'MainActivity' | 'SettingsActivity') => {
    push(activity, {});
  };

  return (
    <MUIBottomNavigation showLabels onChange={handleClick}>
      <BottomNavigationAction label="메인" value="MainActivity" icon={<ListIcon />} />
      <BottomNavigationAction label="설정" value="SettingsActivity" icon={<SettingsIcon />} />
    </MUIBottomNavigation>
  );
}
