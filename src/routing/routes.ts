import { ComponentType, lazy } from 'react'
const SearchPage = lazy(() => import('../pages/Searchpage/SearchPage'))
const CardPage = lazy(() => import('../pages/Cardpage/CardPage'))
const FavoritesPage = lazy(() => import('../pages/Favoritepage/FavoritesPage'))
const HistoryPage = lazy(() => import('../pages/Historypage/HistoryPage'))
const HomePage = lazy(() => import('../pages/Homepage/HomePage'))
const LoginPage = lazy(() => import('../pages/Loginpage/LoginPage'))
const LogoutPage = lazy(() => import('../pages/Logoutpage/LogoutPage'))
const RegistrationPage = lazy(() => import('../pages/Registrationpage/RegistrationPage'))

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
  {
    path: HOME_ROUTE,
    component: HomePage,
  },
  {
    path: '*',
    component: LoginPage,
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
    component: CardPage,
  },
  {
    path: '*',
    component: HomePage,
  },
]
