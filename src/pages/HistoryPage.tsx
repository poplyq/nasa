import { useEffect } from 'react'
import { getHistory } from '../store/actions/getHistory'
import { useAppDispatch, useAppSelector } from '../store/store'
import HistoryModule from '../modules/HistoryModule'

const HistoryPage = () => {
  const { user } = useAppSelector((state) => state.userState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    user && dispatch(getHistory())
  }, [dispatch, user])
  const { history } = useAppSelector((state) => state.historyState)

  return <HistoryModule histories={history} />
}

export default HistoryPage
