import React from 'react'
import { HistoryResponse } from '../types/response/historyResponse'
import HistoryBlock from '../components/historypage/HistoryBlock'
interface HistoryModuleProps {
  histories: HistoryResponse[]
}
const HistoryModule = ({ histories }: HistoryModuleProps) => {
  return (
    <div>
      {histories.map((history) => (
        <HistoryBlock key={history.createdAt} history={history} />
      ))}
    </div>
  )
}

export default HistoryModule
