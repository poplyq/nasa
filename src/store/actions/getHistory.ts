import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { HistoryResponse } from '../../types/response/historyResponse'
import { RootState } from '../store'

export const getHistory = createAsyncThunk<HistoryResponse[], void, { state: RootState }>(
  'user/getHistory',
  async (_arg, { getState }) => {
    const { userState } = getState()
    const q = query(collection(db, 'search'), where('email', '==', `${userState.user?.email}`))
    const querySnapshot = await getDocs(q)

    let newarr: HistoryResponse[] = []
    querySnapshot.forEach((doc) => {
      newarr = [
        ...newarr,
        {
          title: doc.data().title,
          createdAt: doc.data().createdAt.split(' ').slice(0, 5).join(' '),
          search: doc.data().search,
        },
      ]
    })
    return newarr
  },
)
