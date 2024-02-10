import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Users", "Lenses"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    // get all users
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),

    // register user
    saveUser: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),

    // login user
    getUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    // ---- CAUSES ---
    // get all causes
    getCauses: builder.query({
      query: () => ({
        url: "/causes",
        method: "GET",
      }),
      providesTags: ["Causes"],
    }),

    // get single cause
    getSingleCause: builder.query({
      query: (id) => ({
        url: `/causes/${id}`,
        method: "GET",
      }),
    }),

    // create cause
    addCause: builder.mutation({
      query: (data) => ({
        url: "/causes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Causes"],
    }),

    // update cause
    updateCause: builder.mutation({
      query: (data) => ({
        url: `/causes/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Causes"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useSaveUserMutation,
  useGetUserMutation,
  useGetCausesQuery,
  useGetSingleCauseQuery,
  useAddCauseMutation,
  useUpdateCauseMutation,
} = api;
