// import {
//     createSlice,
//     createEntityAdapter,
//     createSelector
//   } from '@reduxjs/toolkit'
  
//   import { searchApi } from './serchApi'


// const searchAdapter = createEntityAdapter()

// const initialState = searchAdapter.getInitialState()


// // Calling `someEndpoint.select(someArg)` generates a new selector that will return
// // the query result object for a query with those parameters.
// // To generate a selector for a specific query argument, call `select(theQueryArg)`.
// // In this case, the users query has no params, so we don't pass anything to select()
// export const extendedSearchApi = searchApi.injectEndpoints({
//         endpoints: (build) => ({
//             getDataSearch: build.query<any, string>({
//               query(req) {
//                 return {
//                   url: `/search?q=${req}&page_size=2&media_type=image`,
//                 };
//               }, 
//               transformResponse: responseData => {
//                 return searchAdapter.setAll(initialState, responseData)
//               } 
//             }),
//     })
//   })
  
//   export const { useGetDataSearchQuery } = extendedSearchApi
  
// export const selectSearchResult = searchApi.endpoints.getDataSearch.select()

// const emptySearch:any = []

// export const selectAllData = createSelector(
//     selectSearchResult,
//   searchResult => searchResult?.data ?? emptySearch
// )

// export const selectDataById = createSelector(
//     selectAllData,
//   (state, dataId) => dataId,
//   (data, dataId) => data.find(data => data.id === dataId)
// )

// export const { selectAll: selectAllData, selectById: selectDataById } =
//   searchAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
// /* Temporarily ignore selectors - we'll come back to this later
// export const {
//   selectAll: selectAllUsers,
//   selectById: selectUserById,
// } = usersAdapter.getSelectors((state) => state.users)
// */
export const a = 1


