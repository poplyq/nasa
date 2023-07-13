import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const getIsFavorite = createAsyncThunk<string | null, string, { state: RootState }>(
  'user/getIsFavorites',
  async (id: string, { getState }) => {
    const { userState } = getState()
    const q = query(
      collection(db, 'favorites'),
      where('email', '==', `${userState.user?.email}`),
      where('search', '==', `${id}`),
    )
    const querySnapshot = await getDocs(q)
    if (querySnapshot.docs[0].exists()) {
      return querySnapshot.docs[0].data().search
    }
  },
)
