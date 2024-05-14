import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';

import MainActivity from '../activities/MainActivity';
import SettingsActivity from '../activities/Settings';
import CameraActivity from '../activities/CameraActivity';
import ProfileActivity from '../activities/ProfileActivity';
import CalendarModal from '../activities/_modals/CalendarModal';
import CapturedActivity from '../activities/CapturedActivity';
import AuthActivity from '../activities/AuthActivity';
import MealActivity from '../activities/MealActivity';
import MealSelectionModal from '../activities/_modals/MealSelectionModal';
import '@stackflow/plugin-basic-ui/index.css';
import { AuthCallbackActivity } from '../activities/AuthCallbackActivity';
import { providersPlugin } from './plugins/providersPlugin';
import ChatBottomSheet from '../activities/_bottomsheets/ChatBottomSheet';
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
        MealActivity: '/meal',
        AuthCallbackActivity: '/auth/callback',
        /**모달 */
        CalendarModal: '/calendar',
        MealSelectionModal: '/meal-selection',
        /**바텀시트 */
        ChatBottomSheet: '/chat?message',
      },
      fallbackActivity: () => 'MainActivity',
    }),
    providersPlugin,
  ],
  activities: {
    /**페이지 */
    MainActivity,
    CameraActivity,
    ProfileActivity,
    CapturedActivity,
    MealActivity,
    SettingsActivity,
    AuthActivity,
    AuthCallbackActivity,
    /**모달 */
    CalendarModal,
    MealSelectionModal,
    /**바텀시트 */
    ChatBottomSheet,
  },
  initialActivity: () => 'MainActivity',
});
