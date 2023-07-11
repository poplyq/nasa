import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { FavoritesResponse } from '../../types/response/favoritesresponse'

export const getFavorites = createAsyncThunk('user/getFavorites', async (_arg, { getState }) => {
  const state = getState() as RootState
  const q = query(
    collection(db, 'favorites'),
    where('email', '==', `${state.userState.user?.email}`),
  )
  const querySnapshot = await getDocs(q)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let newarr: FavoritesResponse[] = []
  querySnapshot.forEach((doc) => {
    newarr = [
      ...newarr,
      {
        search: doc.data().search,
      },
    ]
  })
  return newarr
})
