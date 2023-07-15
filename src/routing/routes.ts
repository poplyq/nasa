import { ComponentType, lazy } from 'react'
const CardUnAuthPage = lazy(() => import('../pages/Cardpage/CardUnAuthPage'))
const CardAuthPage = lazy(() => import('../pages/Cardpage/CardAuthPage'))
const FavoritesPage = lazy(() => import('../pages/Favoritepage/FavoritesPage'))
const HistoryPage = lazy(() => import('../pages/Historypage/HistoryPage'))
const HomePage = lazy(() => import('../pages/Homepage/HomePage'))
const LoginPage = lazy(() => import('../pages/Loginpage/LoginPage'))
const RegistrationPage = lazy(() => import('../pages/Registrationpage/RegistrationPage'))
const SearchPage = lazy(() => import('../pages/Searchpage/SearchPage'))

import {
  CARD_ROUTE,
  FAVORITES_ROUTE,
  HISTORY_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  SIGNUP_ROUTE,
  SEARCH_ROUTE,
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
    path: CARD_ROUTE,
    component: CardUnAuthPage,
  },
  {
    path: HOME_ROUTE,
    component: HomePage,
  },
  {
    path: SEARCH_ROUTE,
    component: SearchPage,
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
    path: CARD_ROUTE,
    component: CardAuthPage,
  },
  {
    path: SEARCH_ROUTE,
    component: SearchPage,
  },
  {
    path: '*',
    component: HomePage,
  },
]
