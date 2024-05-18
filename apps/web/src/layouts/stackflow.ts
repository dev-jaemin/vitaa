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
import RegisterActivity from '../activities/RegisterActivity';
import MyInformationActivity from '../activities/MyInformationActivity';
import RulesBottomSheet from '../activities/_bottomsheets/RulesBottomSheet';
import PersonalNutrientBottomSheet from '../activities/_bottomsheets/PersonalNutrientBottomSheet';

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
