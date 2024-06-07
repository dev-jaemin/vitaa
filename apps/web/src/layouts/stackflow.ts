import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import '@stackflow/plugin-basic-ui/index.css';
import { providersPlugin } from './plugins/providersPlugin';
import ChatBottomSheet from '../activities/_bottomsheets/ChatBottomSheet';
import PersonalNutrientBottomSheet from '../activities/_bottomsheets/PersonalNutrientBottomSheet';
import RulesBottomSheet from '../activities/_bottomsheets/RulesBottomSheet';
import CalendarModal from '../activities/_modals/CalendarModal';
import MealSelectionModal from '../activities/_modals/MealSelectionModal';
import AuthActivity from '../activities/AuthActivity';
import { AuthCallbackActivity } from '../activities/AuthCallbackActivity';
import CameraActivity from '../activities/CameraActivity';
import CapturedActivity from '../activities/CapturedActivity';
import MainActivity from '../activities/MainActivity';
import MealActivity from '../activities/MealActivity';
import MyInformationActivity from '../activities/MyInformationActivity';
import ProfileActivity from '../activities/ProfileActivity';
import RegisterActivity from '../activities/RegisterActivity';
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
        /**페이지 */
        MainActivity: '/',
        CameraActivity: '/camera',
        SettingsActivity: '/settings',
        CapturedActivity: '/captured',
        MealActivity: '/meal',
        /** 프로필 페이지 */
        ProfileActivity: '/profile',
        MyInformationActivity: '/my-information',
        /** Auth 관련 페이지 */
        AuthActivity: '/auth',
        RegisterActivity: '/register',
        LandingActivity: '/landing',
        AuthCallbackActivity: '/auth/callback',
        /**모달 */
        CalendarModal: '/calendar',
        MealSelectionModal: '/meal-selection',
        /**바텀시트 */
        ChatBottomSheet: '/chat?message',
        RulesBottomSheet: '/rules',
        PersonalNutrientBottomSheet: '/nutrients',
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
    RegisterActivity,
    MyInformationActivity,
    /**모달 */
    CalendarModal,
    MealSelectionModal,
    /**바텀시트 */
    ChatBottomSheet,
    RulesBottomSheet,
    PersonalNutrientBottomSheet,
  },
  initialActivity: () => 'MainActivity',
});
