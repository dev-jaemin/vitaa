import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import MainActivity from '../activities/MainActivity';
import SettingsActivity from '../activities/Settings';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    historySyncPlugin({
      routes: {
        MainActivity: '/',
        SettingsActivity: '/settings',
      },
      fallbackActivity: () => 'MainActivity',
    }),
  ],
  activities: {
    MainActivity,
    SettingsActivity,
  },
});
