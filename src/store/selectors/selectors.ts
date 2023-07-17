import { FavoritesResponse } from '../../types/response/favoritesresponse'
import { HistoryResponse } from '../../types/response/historyResponse'
import { UserResponse } from '../../types/response/user'
import { RootState } from '../store'

export const getStateFavorite = (state: RootState): string | null | undefined =>
  state.favoritesState.favorite
export const getStateError = (state: RootState): string | null => state.userState.error
export const getStateUser = (state: RootState): UserResponse | null => state.userState.user
export const getStateFavorites = (state: RootState): FavoritesResponse[] | null =>
  state.favoritesState.favorites
export const getStateHistory = (state: RootState): HistoryResponse[] => state.historyState.history
export const getMessageFavorite = (state: RootState): string => state.favoritesState.serviceMessage
