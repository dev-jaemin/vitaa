import MUIBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useFlow } from '../../layouts/stackflow';
import { Camera, Home, Person } from '@mui/icons-material';
import { Box } from '@mui/material';

// TEMP TYPE
type Activity = 'MainActivity' | 'CameraActivity' | 'ProfileActivity';

export function BottomNavigation() {
  const { push } = useFlow();

  // @TODO - Add a type for the activity
  const handleClick = (_: React.SyntheticEvent<Element, Event>, activity: Activity) => {
    push(activity, {}, { animate: false });
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999 }}>
      <MUIBottomNavigation showLabels onChange={handleClick}>
        <BottomNavigationAction label="HOME" value="MainActivity" icon={<Home />} />
        <BottomNavigationAction label="CAMERA" value="CameraActivity" icon={<Camera />} />
        <BottomNavigationAction label="MY" value="ProfileActivity" icon={<Person />} />
      </MUIBottomNavigation>
    </Box>
  );
}
