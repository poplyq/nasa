import { createSlice } from '@reduxjs/toolkit'
import { getIsFavorites } from '../actions/getIsFavorites'
import { sendFavorite } from '../actions/sendFavorite'

interface InitialStateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  favorites: string | null
  error: string
}

const initialState: InitialStateProps = {
  favorites: null,
  error: '',
}

export const favoritesSlice = createSlice({
  initialState,
  name: 'historySlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIsFavorites.fulfilled, (state, { payload: favorites }) => {
      state.favorites = favorites
    })
    builder.addCase(sendFavorite.fulfilled, () => {
      initialState
    })
  },
})

export default favoritesSlice.reducer
