import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { dataApi } from './api/dataApi/dataApi'
import userReducer from './slices/userSlice'
import historyReducer from './slices/historyService'
import favoritesReducer from './slices/favoriteService'
import { logger } from './middleware/logger'
import { searchApi } from './api/searchApi/searchApi'

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    userState: userReducer,
    historyState: historyReducer,
    favoritesState: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([dataApi.middleware, searchApi.middleware, logger]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
