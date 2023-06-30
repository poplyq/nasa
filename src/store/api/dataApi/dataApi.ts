import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { DataResponse } from '../../../types/response/dataResponse'
import { DataRequest } from '../../../types/request/dataRequest'
import { PodResponse } from '../../../types/response/podResponse'

import { errorUser } from '../../slices/userSlice'

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov',
  }),
  tagTypes: ['Data'],
  endpoints: (build) => ({
    getData: build.query<DataResponse, DataRequest>({
      query({ rover, sol, camera, page }) {
        return {
          url: `/mars-photos/api/v1/rovers/${rover}/photos?sol${sol}&camera${camera}&page${page}&api_key=${process.env.REACT_APP_API_KEY}`,
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          // на будущее пускай побудет тут any
          // eslint-disable-next-line
        } catch (e: any) {
          dispatch(errorUser(e))
        }
      },
    }),
    getPhotoOfDay: build.query<PodResponse[], void>({
      query() {
        return {
          url: `/planetary/apod?count=1&api_key=${process.env.REACT_APP_API_KEY}`,
        }
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          // на будущее пускай побудет тут any
          // eslint-disable-next-line
        } catch (e: any) {
          dispatch(errorUser(e))
        }
      },
    }),
  }),
})

export const { useGetDataQuery, useGetPhotoOfDayQuery } = dataApi
