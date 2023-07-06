import { ComponentType, lazy } from 'react'
const SearchPage = lazy(() => import('../pages/SearchPage'))
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))
const HistoryPage = lazy(() => import('../pages/HistoryPage'))
const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const LogoutPage = lazy(() => import('../pages/LogoutPage'))
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'))

import {
  ELEMENT_ROUTE,
  FAVORITES_ROUTE,
  HISTORY_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  MAIN_ROUTE,
  SIGNUP_ROUTE,
} from './variebles'

export interface RoutesType {
  path: string
  component: ComponentType
}
export const publickRoutes: RoutesType[] = [
  {
    path: LOGIN_ROUTE,
    component: LoginPage,
  },
  {
    path: SIGNUP_ROUTE,
    component: RegistrationPage,
  },
  {
    path: MAIN_ROUTE,
    component: LoginPage,
  },
  {
    path: ELEMENT_ROUTE,
    component: SearchPage,
  },
]
export const privateRoutes: RoutesType[] = [
  {
    path: HOME_ROUTE,
    component: HomePage,
  },
  {
    path: FAVORITES_ROUTE,
    component: FavoritesPage,
  },
  {
    path: HISTORY_ROUTE,
    component: HistoryPage,
  },
  {
    path: LOGOUT_ROUTE,
    component: LogoutPage,
  },
  {
    path: ELEMENT_ROUTE,
    component: SearchPage,
  },
]
