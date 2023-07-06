import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Card, CollectionResponse, CollectionType } from '../../../types/ui/collection'

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://images-api.nasa.gov',
  }),
  tagTypes: ['Data'],
  endpoints: (build) => {
    return {
      getDataSearch: build.query<CollectionType, { value: string | null }>({
        query(req) {
          const { value } = req
          return {
            url: '/search',
            params: { q: value, page_size: '5', media_type: 'image' },
          }
        },
        transformResponse: (response: CollectionResponse): CollectionType => {
          return {
            url: response.collection.href,
            cards: response.collection.items.map((item) => {
              return {
                id: item.data[0].nasa_id,
                date: item.data[0].date_created,
                title: item.data[0].title,
                location: item.data[0].location,
                description: item.data[0].description,
                photographer: item.data[0].photographer,
                image: item.links[0].href,
              }
            }),
          }
        },
      }),
      getCardSearch: build.query<Card, { value: string | null }>({
        query(req) {
          const { value } = req
          return {
            url: '/search',
            params: { q: value, page_size: '5', media_type: 'image' },
          }
        },
        transformResponse: (response: CollectionResponse): Card => {
          return {
            id: response.collection.items[0].data[0].nasa_id,
            date: response.collection.items[0].data[0].date_created,
            title: response.collection.items[0].data[0].title,
            location: response.collection.items[0].data[0].location,
            description: response.collection.items[0].data[0].description,
            photographer: response.collection.items[0].data[0].photographer,
            image: response.collection.items[0].links[0].href,
          }
        },
      }),
    }
  },
})

export const { useGetDataSearchQuery, useGetCardSearchQuery } = searchApi
