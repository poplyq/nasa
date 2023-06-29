import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types/ui/user'

interface initialStateProps {
  user: IUser | null
  error: string
}

const initialState: initialStateProps = {
  user: null,
  error: '',
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.error = ''
    },
    errorUser(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
  },
})

export default userSlice.reducer

export const { setUser, logout, errorUser } = userSlice.actions
