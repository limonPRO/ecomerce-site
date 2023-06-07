import { lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Home'));


const routes = [

  { path: '/', element: Dashboard },
 
];

export default routes;
