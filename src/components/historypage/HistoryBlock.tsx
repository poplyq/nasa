import React from 'react'
import { HistoryResponse } from '../../types/response/historyResponse'
import { Link } from 'react-router-dom'
interface HistoryBlockProps {
  history: HistoryResponse
}
const HistoryBlock = ({ history }: HistoryBlockProps) => {
  return (
    <Link to={`/search?search=${history.search}`}>
      Вы искали {history.search} {history.createdAt}
    </Link>
  )
}

export default HistoryBlock
