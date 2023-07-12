import { useEffect } from 'react'
import { getHistory } from '../../store/actions/getHistory'
import { useAppDispatch, useAppSelector } from '../../store/store'
import HistoryModule from '../../modules/historypage/HistoryModule'

const HistoryPage = () => {
  const { history } = useAppSelector((state) => state.historyState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistory())
  }, [dispatch])

  return <HistoryModule histories={history} />
}

export default HistoryPage
