import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { dataApi } from './api/dataApi/dataApi';
import userReducer from './slices/userSlice';


export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    userState: userReducer,
  },
middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([dataApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;