import { RouteRecordRaw } from 'vue-router';
import RouterDashBoard from '../views/dashboard/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [...RouterDashBoard],
  },
];

export default routes;
