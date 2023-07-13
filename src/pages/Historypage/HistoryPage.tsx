import { useEffect } from 'react'
import { getHistory } from '../../store/actions/getHistory'
import { useAppDispatch } from '../../store/store'
import HistoryModule from '../../modules/historypage/HistoryModule'
import { getStateHistory } from '../../store/selectors/selectors'
import { useSelector } from 'react-redux'

const HistoryPage = () => {
  const history = useSelector(getStateHistory)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistory())
  }, [dispatch])

  return <HistoryModule histories={history} />
}

export default HistoryPage
