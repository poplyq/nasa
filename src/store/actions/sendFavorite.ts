import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const sendFavorite = createAsyncThunk(
  'user/sendFavorites',
  async (search: string, { getState }) => {
    const state = getState() as RootState
    await addDoc(collection(db, 'favorites'), {
      email: state.userState.user?.email,
      search,
    })
  },
)
