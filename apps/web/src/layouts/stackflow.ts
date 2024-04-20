import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';

import MainActivity from '../activities/MainActivity';
import SettingsActivity from '../activities/Settings';
import CameraActivity from '../activities/CameraActivity';
import ProfileActivity from '../activities/ProfileActivity';
import CalendarModal from '../components/Modals/CalendarModal';
import CapturedActivity from '../activities/CapturedActivity';
import AuthActivity from '../activities/AuthActivity';

import '@stackflow/plugin-basic-ui/index.css';
import { AuthCallbackActivity } from '../activities/AuthCallbackActivity';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    historySyncPlugin({
      routes: {
        /**페이지 */
        MainActivity: '/',
        CameraActivity: '/camera',
        ProfileActivity: '/profile',
        SettingsActivity: '/settings',
        CapturedActivity: '/captured',
        AuthActivity: '/auth',
        AuthCallbackActivity: '/auth/callback',
        /**모달 */
        CalendarModal: '/calendar',
      },
      fallbackActivity: () => 'MainActivity',
    }),
  ],
  activities: {
    /**페이지 */
    MainActivity,
    CameraActivity,
    ProfileActivity,
    CapturedActivity,
    SettingsActivity,
    AuthActivity,
    AuthCallbackActivity,
    /**모달 */
    CalendarModal,
  },
  initialActivity: () => 'MainActivity',
});
