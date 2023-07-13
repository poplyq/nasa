import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { FavoritesResponse } from '../../types/response/favoritesresponse'

export const getFavorites = createAsyncThunk<FavoritesResponse[], void, { state: RootState }>(
  'user/getFavorites',
  async (_arg, { getState }) => {
    const { userState } = getState()
    const q = query(collection(db, 'favorites'), where('email', '==', `${userState.user?.email}`))
    const querySnapshot = await getDocs(q)
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
  },
)
