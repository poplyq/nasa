import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSearch } from '../helpers/functions/getSearch'

const HistoryPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // ошибка Аргумент типа "AsyncThunkAction<HistoryResponse[], string, AsyncThunkConfig>" нельзя назначить параметру типа "AnyAction"
    dispatch(getSearch(''))
  })
  return <div></div>
}

export default HistoryPage
