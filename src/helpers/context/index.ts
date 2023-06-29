
import { createContext } from 'react';
// поступаемый в контект тип Auth конфликтует с типом <any , AnyAction > Context
export const Context = createContext<any>(null);
