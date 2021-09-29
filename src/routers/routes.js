import * as path from './paths';
import * as page from 'page';

import NavbarLayout from 'layout/NavbarLayout';

export const routes = [
  {
    path: path.APP_LOGIN,
    component: page.Login,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    layout: {
      component: NavbarLayout,
    },
    meta: {
      title: '首页',
    },
    routes: [
      {
        path: path.APP_HOME,
        component: page.Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: path.APP_PROFILE,
        component: page.Profile,
        meta: {
          title: '我的',
        },
      },
      {
        path: path.APP_ERROR_404,
        component: page.Error404,
        meta: {
          title: '404',
        },
      },
    ],
  },
];
