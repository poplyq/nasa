import { createSlice } from '@reduxjs/toolkit'
import { HistoryResponse } from '../../types/response/historyResponse'
import { getHistory } from '../../helpers/actions/getHistory'

interface InitialStateProps {
  history: HistoryResponse[] | []
  error: string
}

const initialState: InitialStateProps = {
  history: [],
  error: '',
}

export const historySlice = createSlice({
  initialState,
  name: 'historySlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHistory.fulfilled, (state, { payload: history }) => {
      if (history) {
        state.history = history
      }
    })
  },
})

export default historySlice.reducer
