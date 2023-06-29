import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './firebase'

import { getAuth } from 'firebase/auth'
import { Context } from './helpers/context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Auth = getAuth()

root.render(
  <Context.Provider value={Auth}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Context.Provider>,
)
