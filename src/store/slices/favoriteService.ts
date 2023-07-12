import { createSlice } from '@reduxjs/toolkit'
import { getIsFavorites } from '../actions/getIsFavorites'
import { sendFavorite } from '../actions/sendFavorite'
import { getFavorites } from '../actions/getFavorites'
import { FavoritesResponse } from '../../types/response/favoritesresponse'
import { deleteFavorites } from '../actions/deleteFavorite'

interface InitialStateProps {
  favorite: string | null
  favorites: FavoritesResponse[] | null
  error: string
}

const initialState: InitialStateProps = {
  favorites: null,
  favorite: null,
  error: '',
}

export const favoritesSlice = createSlice({
  initialState,
  name: 'historySlice',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIsFavorites.fulfilled, (state, { payload: favorites }) => {
        state.favorite = favorites
      })
      .addCase(sendFavorite.fulfilled, () => {
        initialState
      })
      .addCase(getFavorites.fulfilled, (state, { payload: favorites }) => {
        state.favorites = favorites
      })
      .addCase(deleteFavorites.fulfilled, (state) => {
        state
      })
  },
})

export default favoritesSlice.reducer
