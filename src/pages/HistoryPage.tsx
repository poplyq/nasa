import { useEffect } from 'react'
import { getSearch } from '../helpers/functions/getSearch'
import { useAppDispatch, useAppSelector } from '../store/store'
import HistoryModule from '../modules/HistoryModule'

const HistoryPage = () => {
  const { user } = useAppSelector((state) => state.userState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    user && dispatch(getSearch({ email: user.email, request: 'search' }))
  }, [dispatch, user])
  const { history } = useAppSelector((state) => state.historyState)

  return <HistoryModule histories={history} />
}

export default HistoryPage
