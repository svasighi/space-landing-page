import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Main = lazy(() => import('../layouts/Main'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/destination',
        element: "destination",
      },
      {
        path: '/crew',
        element: "destination",
      },
      {
        path: '/technology',
        element: "destination",
      }
    ],
  },
]);

export default router