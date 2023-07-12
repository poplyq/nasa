import React from 'react'
import { HistoryResponse } from '../../types/response/historyResponse'
import HistoryBlock from '../../components/historypage/HistoryBlock'
import './historymodule.scss'
interface HistoryModuleProps {
  histories: HistoryResponse[]
}
const HistoryModule = ({ histories }: HistoryModuleProps) => {
  return (
    <div className='historyModule'>
      <h2>Search History</h2>
      {histories.map((history) => (
        <HistoryBlock key={history.createdAt} history={history} />
      ))}
    </div>
  )
}

export default HistoryModule
