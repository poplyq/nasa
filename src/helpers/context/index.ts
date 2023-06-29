import { Auth } from 'firebase/auth'
import { createContext } from 'react'

// поступаемый в контект тип Auth конфликтует с типом <any , AnyAction > Context
// на будущее пускай побудет тут any
// eslint-disable-next-line
export const Context = createContext<Auth | null>(null);
