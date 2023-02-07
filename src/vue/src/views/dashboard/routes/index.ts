import { RouteRecordRaw } from 'vue-router';

const RouterDashBoard: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('../pages/IndexPage.vue'),
  },
];

export default RouterDashBoard;
