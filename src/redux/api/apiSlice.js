import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Users", "Lenses"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_server,
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
  }),
});

export const { useGetAllUsersQuery, useSaveUserMutation, useGetUserMutation } =
  api;
