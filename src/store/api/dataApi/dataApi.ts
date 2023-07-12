import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { PodResponse } from '../../../types/response/podResponse'

import { errorUser } from '../../slices/userSlice'

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov',
  }),
  tagTypes: ['Data'],
  endpoints: (build) => ({
    getPhotoOfDay: build.query<PodResponse[], void>({
      query() {
        return {
          url: '/planetary/apod',
          params: { count: '1', api_key: process.env.REACT_APP_API_KEY },
        }
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (e) {
          dispatch(errorUser('Ошибка при загрузке данных'))
        }
      },
    }),
  }),
})

export const { useGetPhotoOfDayQuery } = dataApi
