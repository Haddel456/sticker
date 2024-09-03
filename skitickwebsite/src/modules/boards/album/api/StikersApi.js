import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseQuery } from "../../rdx/rdxUtilites";

/// need to fix 
export const StikersListApi = createApi({
  reducerPath: "StikersListApi",
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({

    getStikers: builder.query({
      query: (id) => ({
        url: `/${id}`,     // TO FILL
        method: "GET",
      }),
    }),

    
    addStikersList: builder.mutation({
      query: (stickerData) => {
        return {
          url: `/`,     // TO FILL
          method: "POST",
          body: stickerData,
        };
      },
    }),

    deleteStikersList: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}`,   // TO FILL
        method: "DELETE",
      }),
    }),


  }),
});

export const {
    
  
} = StikersListApi;