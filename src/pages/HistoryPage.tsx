import { useEffect } from 'react'
import { getSearch } from '../helpers/functions/getSearch'
import { useAppDispatch, useAppSelector } from '../store/store'

const HistoryPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // ошибка Аргумент типа "AsyncThunkAction<HistoryResponse[], string, AsyncThunkConfig>" нельзя назначить параметру типа "AnyAction"
    dispatch(getSearch('initial@gmail.com'))
  }, [dispatch])
  const { history } = useAppSelector((state) => state.historyState)
  console.log(history)
  return <div></div>
}

export default HistoryPage
