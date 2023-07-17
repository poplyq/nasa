import { AnyAction, Middleware, MiddlewareAPI, createListenerMiddleware } from '@reduxjs/toolkit'
import { setUser } from '../slices/userSlice'

export const logger: Middleware = (store) => (next) => (action: AnyAction) => {
  console.log('state:', store.getState())
  return next(action)
}

export const addUserMiddleware = createListenerMiddleware()
addUserMiddleware.startListening({
  actionCreator: setUser,
  effect: async (action, store: MiddlewareAPI) => {
    action.payload = {
      ...action.payload,
      serviсeMesssage: `Добро пожаловать ${action.payload.email}`,
    }
    store.dispatch(setUser(action.payload))
  },
})
