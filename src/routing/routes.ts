import { ComponentType, lazy } from 'react'
const ElementPage = lazy(() => import('../pages/ElementPage'))
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))
const HistoryPage = lazy(() => import('../pages/HistoryPage'))
const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const LogoutPage = lazy(() => import('../pages/LogoutPage'))
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'))
// const Home = lazy(() => import('./routes/Home'));
// import FavoritesPage from '../pages/FavoritesPage'
// import HistoryPage from '../pages/HistoryPage'
// import HomePage from '../pages/HomePage'
// import LoginPage from '../pages/LoginPage'
// import LogoutPage from '../pages/LogoutPage'
// import RegistrationPage from '../pages/RegistrationPage'
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
    component: ElementPage,
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
]
