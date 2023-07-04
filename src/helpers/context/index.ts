import { Auth } from 'firebase/auth'
import { createContext } from 'react'

export const Context = createContext<Auth | null>(null)
