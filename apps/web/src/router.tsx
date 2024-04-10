import { Suspense } from 'react'
import { Navigate, type RouteObject } from 'react-router'

import SuspenseLoader from './components/SuspenseLoader'

const Loader = (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  )

const routes: RouteObject[] = [
  /**
   * @TODO : Routing
   */
  //   {
  //     path: '',
  //     element: <Layout />,
  //     children: [],
  //   },

  {
    path: '*',
    element: <Navigate to="/status/404" replace />,
  },
]

export default routes
