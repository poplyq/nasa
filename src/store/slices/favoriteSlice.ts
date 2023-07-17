import { createSlice } from '@reduxjs/toolkit'
import { getFavorites } from '../actions/getFavorites'
import { FavoritesResponse } from '../../types/response/favoritesresponse'
import { getIsFavorite } from '../actions/getIsFavorite'
import { deleteFavorite } from '../actions/deleteFavorite'
import { postFavorite } from '../actions/postFavorite'

interface InitialStateProps {
  favorite: string | null | undefined
  favorites: FavoritesResponse[] | null
  serviceMessage: string
}

const initialState: InitialStateProps = {
  favorites: null,
  favorite: null,
  serviceMessage: '',
}

export const favoritesSlice = createSlice({
  initialState,
  name: 'historySlice',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIsFavorite.fulfilled, (state, { payload: favorites }) => {
        state.favorite = favorites
      })
      .addCase(postFavorite.fulfilled, (state, { payload: favorite }) => {
        state.favorite = favorite
      })
      .addCase(getFavorites.fulfilled, (state, { payload: favorites }) => {
        state.favorites = favorites
        state.serviceMessage = ''
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.serviceMessage = 'Карточка удалена'
      })
  },
})

export default favoritesSlice.reducer
