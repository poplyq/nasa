import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, deleteDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { getFavorites } from './getFavorites'
import { RootState } from '../store'

export const deleteFavorite = createAsyncThunk<void, string, { state: RootState }>(
  'user/deleteFavorites',
  async (value: string, { dispatch, getState }) => {
    const { userState } = getState()
    const q = query(
      collection(db, 'favorites'),
      where('email', '==', `${userState.user?.email}`),
      where('search', '==', `${value}`),
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref)
    })
    dispatch(getFavorites())
  },
)
