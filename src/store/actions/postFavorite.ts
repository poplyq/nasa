import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const postFavorite = createAsyncThunk<string, string, { state: RootState }>(
  'user/sendFavorites',
  async (search: string, { getState }) => {
    const { userState } = getState()
    await addDoc(collection(db, 'favorites'), {
      email: userState.user?.email,
      search,
    })
    return search
  },
)
