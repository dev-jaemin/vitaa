import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '../../layouts/stackflow';
import { BottomNavigation } from '../../components/BottomNavigation';

const MainActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push('SettingsActivity', {
      name: 'Jaemin',
    });
  };

  return (
    <AppScreen appBar={{ title: 'My Activity' }}>
      <div>My MainActivity</div>
      <button onClick={onClick}>Go to settings page</button>
      <BottomNavigation />
    </AppScreen>
  );
};

export default MainActivity;
