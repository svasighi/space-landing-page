import { lazy, LazyExoticComponent, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from '../layouts/Main';


const loadable = (Component: LazyExoticComponent<() => JSX.Element>) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<>Loading</>}>
      <Component {...props} />
    </Suspense>
  );
}

const Home = loadable(lazy(() => import('../Pages/Home')));
const Destination = loadable(lazy(() => import('../Pages/Destination')));
const Crew = loadable(lazy(() => import('../Pages/Crew')));
const Technology = loadable(lazy(() => import('../Pages/Technology')));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true
      },
      {
        path: '/destination',
        element: <Destination />,
      },
      {
        path: '/crew',
        element: <Crew />,
      },
      {
        path: '/technology',
        element: <Technology />,
      }
    ],
  },
]);

export default router