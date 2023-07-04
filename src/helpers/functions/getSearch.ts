import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { historyConverter } from '../controllers/historyController'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { HistoryResponse } from '../../types/response/historyResponse'

export const getSearch = createAsyncThunk('user/getFavoriteIds', async (email: string) => {
  const querySnapshot = await getDocs(collection(db, `${email}`).withConverter(historyConverter))
  let newarr: HistoryResponse[] = []
  querySnapshot.forEach((doc) => {
    newarr = [
      ...newarr,
      {
        title: doc.data().title,
        createdAt: doc.data().createdAt,
        search: doc.data().search,
      },
    ]
  })
  return newarr
})
