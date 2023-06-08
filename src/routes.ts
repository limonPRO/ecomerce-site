import { lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Home'));
const productDetails = lazy(()=> import('./pages/Details'))

const routes = [

  { path: '/', element: Dashboard },
  {path: '/details/:id', element:productDetails}
 
];

export default routes;
