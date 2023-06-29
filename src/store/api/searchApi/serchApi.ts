import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { searchResponse } from '../../../types/response/searchResponse';
import { collectionType } from '../../../types/ui/collection';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://images-api.nasa.gov',
  }),
  tagTypes: ['Data'],
  endpoints: (build) => ({
    getDataSearch: build.query({
      query(req) {
        return {
          url: `/search?q=${req}&page_size=2&media_type=image`,
        };
      },
      transformResponse: (response: searchResponse) =>
        ({
          urlRequest: response.collection.href,
          items: response.collection.items,
        } as unknown as collectionType),
    }),
  }),
});

export const { useGetDataSearchQuery } = searchApi;
