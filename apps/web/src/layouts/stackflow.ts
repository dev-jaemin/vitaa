import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import MainActivity from '../activities/MainActivity'
import Settings from '../activities/Settings'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'

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
        Settings: '/settings',
      },
      fallbackActivity: () => 'MainActivity',
    }),
  ],
  activities: { MainActivity, Settings },
  initialActivity: () => 'MainActivity',
})
