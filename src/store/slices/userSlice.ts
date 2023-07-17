import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserResponse } from '../../types/response/user'

interface initialStateProps {
  user: UserResponse | null
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
    setUser: (state, { payload }: PayloadAction<UserResponse>) => {
      console.log(payload)
      state.user = payload
      state.error = ''
    },
    errorUser(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
  },
})

export default userSlice.reducer

export const { setUser, logout, errorUser } = userSlice.actions
