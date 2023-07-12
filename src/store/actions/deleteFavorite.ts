import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { collection, deleteDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { getFavorites } from './getFavorites'

export const deleteFavorites = createAsyncThunk(
  'user/deleteFavorites',
  async (value: string, { dispatch, getState }) => {
    const state = getState() as RootState
    const q = query(
      collection(db, 'favorites'),
      where('email', '==', `${state.userState.user?.email}`),
      where('search', '==', `${value}`),
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref)
    })
    dispatch(getFavorites())
  },
)
