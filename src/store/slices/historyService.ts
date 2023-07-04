import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryResponse } from '../../types/response/historyResponse'
import { getSearch } from '../../helpers/functions/getSearch'
import { stringify } from 'querystring'

interface initialStateProps {
  history: HistoryResponse[] | []
  error: string
}

const initialState: initialStateProps = {
  history: [],
  error: '',
}

export const historySlice = createSlice({
  initialState,
  name: 'historySlice',
  reducers: {
    addHistory: (state, action: PayloadAction<HistoryResponse>) => {
      state.history = [...state.history, action.payload]
      state.error = ''
    },
    error(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    clearHistory: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getSearch.fulfilled, (state, { payload: history }) => {
      if (history) {
        state.history = history
      }
    })
  },
})

export default historySlice.reducer

export const { addHistory, error, clearHistory } = historySlice.actions
