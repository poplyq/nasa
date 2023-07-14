import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Card, CollectionResponse, CollectionType } from '../../../types/ui/collection'
import { transformSearchResponse } from '../../../helpers/functions/transformSearchResponse'

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
            params: { q: value, page_size: '20', media_type: 'image' },
          }
        },
        transformResponse: (response: CollectionResponse): CollectionType => {
          return {
            url: response.collection.href,
            cards: transformSearchResponse(response),
          }
        },
      }),
      getCardSearch: build.query<Card, { value: string | null }>({
        query(req) {
          const { value } = req
          return {
            url: '/search',
            params: { q: value, page_size: '1', media_type: 'image' },
          }
        },
        transformResponse: (response: CollectionResponse): Card =>
          transformSearchResponse(response)[0],
      }),
    }
  },
})

export const { useGetDataSearchQuery, useGetCardSearchQuery } = searchApi
