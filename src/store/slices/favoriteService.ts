import { createSlice } from '@reduxjs/toolkit'
import { HistoryResponse } from '../../types/response/historyResponse'
import { getHistory } from '../actions/getHistory'

interface InitialStateProps {
  favorites: HistoryResponse[] | []
  error: string
}

const initialState: InitialStateProps = {
  favorites: [],
  error: '',
}

export const favoritesSlice = createSlice({
  initialState,
  name: 'historySlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHistory.fulfilled, (state, { payload: favorites }) => {
      if (favorites) {
        state.favorites = favorites
      }
    })
  },
})

export default favoritesSlice.reducer
