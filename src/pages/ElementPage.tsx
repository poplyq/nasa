import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetDataSearchQuery } from '../store/api/searchApi/serchApi'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useAppSelector } from '../store/store'
import Element from '../components/elementpage/Element'
import Loader from './Loader'

const ElementPage = () => {
  const [searchParams] = useSearchParams()
  const { user } = useAppSelector((state) => state.userState)
  const { data, isSuccess } = useGetDataSearchQuery(searchParams.get('search'))

  const sendDb = async () => {
    if (user && data) {
      const now = new Date()
      await addDoc(collection(db, `${user.email}`), {
        search: `${data.url}`,
        createdAt: now,
      })
    }
  }

  useEffect(() => {
    sendDb()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  if (isSuccess) {
    return <Element cards={data.cards} />
  } else {
    return <Loader />
  }
}

export default ElementPage
