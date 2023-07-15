import { Card, CollectionResponse } from '../../types/ui/collection'

export const transformOnlyFirstChild = (response: CollectionResponse) => {
  const transformedResponse: Card[] = response.collection.items.map((item) => {
    return {
      id: item.data[0].nasa_id,
      date: item.data[0].date_created,
      title: item.data[0].title,
      location: item.data[0].location,
      description: item.data[0].description,
      photographer: item.data[0].photographer,
      image: item.links[0].href,
    }
  })
  return transformedResponse[0]
}
