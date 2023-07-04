import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { HistoryResponse } from '../../types/response/historyResponse'
import { firestoreRequest } from '../../types/request/firestoreRequest'

export const getSearch = createAsyncThunk(
  'user/getFavoriteIds',
  async (request: firestoreRequest) => {
    const q = query(collection(db, `${request.request}`), where('email', '==', `${request.email}`))
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
