import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseQuery } from "../../rdx/rdxUtilites";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const boardsApi = createApi({ reducerPath: "boardsApi",baseQuery: getBaseQuery(),endpoints: (builder) => ({
  

    getBoard: builder.query({
      query: (id) => ({
        url: `${baseUrl}/api/boards/get-by-id/${id}`,
        method: "GET",
      }),
    }),

    getBoards: builder.query({
      query: () => ({
        url: `${baseUrl}/api/boards/getAll/`,
        method: "GET",
      }),
    }),

    
    addBoard: builder.mutation({
      query: (boardData) => {
        return {
          url: `${baseUrl}/api/boards/insert/`,
          method: "POST",
          body: JSON.stringify(boardData),
        };
      },
    }),

    deleteBoard: builder.mutation({
      query: ({ id }) => ({
        url: `${baseUrl}/api/boards/delete-by-id/${id}`,
        method: "DELETE",
      }),
    }),

    updateBoard: builder.mutation({
      query: ({ formData, id }) => {
        return {
          url: `${baseUrl}/api/boards/set-active/${id}`,
          method: "PUT",
          body: JSON.stringify(formData),
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