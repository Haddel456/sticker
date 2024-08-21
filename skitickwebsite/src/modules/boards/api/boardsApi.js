import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseQuery } from "../../rdx/rdxUtilites";


export const boardsApi = createApi({
  reducerPath: "boardsApi",
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({

    getBoards: builder.query({
      query: (id) => ({
        url: `boards/${id}`,
        method: "GET",
      }),
    }),

    getBoard: builder.query({
      query: () => ({
        url: `boards/`,
        method: "GET",
      }),
    }),

    
    addBoard: builder.mutation({
      query: (boardData) => {
        return {
          url: `boards/`,
          method: "POST",
          body: boardData,
        };
      },
    }),

    deleteBoard: builder.mutation({
      query: ({ id }) => ({
        url: `boards/${id}`,
        method: "DELETE",
      }),
    }),

    updateBoard: builder.mutation({
      query: ({ formData, id }) => {
        return {
          url: `boards/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
  }),
});

export const {
    useGetBoards,
    useGetBoard,
    useAddBoard,
    useDeleteBoard,
    useUpdateBoard,
    useLazyGetBoard,
  
} = boardsApi;