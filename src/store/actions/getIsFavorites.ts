import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const getHistory = createAsyncThunk(
  'user/getFavorites',
  async (id: string, { getState }) => {
    const state = getState() as RootState
    const q = query(
      collection(db, 'favorites'),
      where('email', '==', `${state.userState.user?.email}`),
      where('id', '==', `${id}`),
    )
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      console.log(doc.exists())
    })
  },
)
