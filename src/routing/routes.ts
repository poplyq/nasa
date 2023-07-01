import { ComponentType } from 'react'
import ElementPage from '../pages/ElementPage'
import FavoritesPage from '../pages/FavoritesPage'
import HistoryPage from '../pages/HistoryPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import RegistrationPage from '../pages/RegistrationPage'
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

interface PrivateRoutesType {
  path: string
  component: ComponentType
}
export const publickRoutes = [
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
export const privateRoutes: PrivateRoutesType[] = [
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
