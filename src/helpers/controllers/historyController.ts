import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import { HistoryResponse } from '../../types/response/historyResponse'

class History {
  constructor(readonly search: string, readonly createdAt: string, readonly title: string) {
    this.search = search
    this.createdAt = createdAt
    this.title = title
  }
  toString() {
    return this.search + ', ' + this.createdAt + ', ' + this.title
  }
}

export const historyConverter = {
  toFirestore: (history: HistoryResponse): DocumentData => {
    return {
      search: history.search,
      createdAt: history.createdAt,
      title: history.title,
    }
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): HistoryResponse => {
    const data = snapshot.data(options)
    return new History(data.search, data.createdAt, data.title)
  },
}
// const postSnap = await
//   .firestore()
//   .collection('posts')
//   .withConverter(historyConverter)
//   .doc()
//   .get()
// const post = postSnap.data()
// if (post !== undefined) {
//   post.title // string
//   post.toString() // Should be defined
//   post.someNonExistentProperty // TS error
// }
