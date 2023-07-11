import { AnyAction, Middleware } from '@reduxjs/toolkit'

export const logger: Middleware = (store) => (next) => (action: AnyAction) => {
  console.log('state:', store.getState())
  return next(action)
}
