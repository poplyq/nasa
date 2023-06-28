
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/ui/user';
import { User, UserCredential } from 'firebase/auth';

interface initialStateProps {
  user: any | null;
  error: boolean;
}

const initialState: initialStateProps = {
  user: null,
  error: false,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.error = false;
    },
    errorUser(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser, logout, errorUser } = userSlice.actions;