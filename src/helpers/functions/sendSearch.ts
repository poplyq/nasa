import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'

export const sendSearch = async (email: string, search: string) => {
  const now = new Date()
  await addDoc(collection(db, 'search'), {
    email,
    search,
    createdAt: now.toString(),
  })
}
