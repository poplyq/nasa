import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { dataResponse } from '../../../types/response/dataResponse';
import { dataRequest } from '../../../types/request/dataRequest';
import { podResponse } from '../../../types/response/podResponse';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov',
  }),
  tagTypes: ['Data'],
  endpoints: (build) => ({
    getData: build.query<dataResponse, dataRequest>({
      query({ rover, sol, camera, page }) {
        return {
          url: `/mars-photos/api/v1/rovers/${rover}/photos?sol${sol}&camera${camera}&page${page}&api_key=${process.env.REACT_APP_API_KEY}`,
        };
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {}
      },
    }),
    getPhotoOfDay: build.query<podResponse[], void>({
      query() {
        return {
          url: `/planetary/apod?count=1&api_key=${process.env.REACT_APP_API_KEY}`,
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
         const {data} =  await queryFulfilled;
        } catch (e) {}
      },
    }),
  
  }),
});

export const { useGetDataQuery , useGetPhotoOfDayQuery} = dataApi;
