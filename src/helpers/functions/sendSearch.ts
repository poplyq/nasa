import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'

export const sendSearch = async (email: string, search: string, title: string) => {
  const now = new Date()
  await addDoc(collection(db, 'search'), {
    email,
    search,
    title,
    createdAt: now.toString(),
  })
}
