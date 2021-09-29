import { lazy } from 'react';

export const Home = lazy(() => import('./home'));
export const Login = lazy(() => import('./login'));
export const Profile = lazy(() => import('./profile'));

export const Error404 = lazy(() => import('./404'));
