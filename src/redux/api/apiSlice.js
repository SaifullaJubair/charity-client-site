import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Users", "Lenses"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://charity-server.vercel.app",
  }),
  endpoints: (builder) => ({
    // get all users
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Users"],
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

    // get single user

    getSingleUser: builder.query({
      query: (email) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    // update user role
    updateUserRole: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Users"],
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

    // delete cause
    deleteCause: builder.mutation({
      query: (id) => ({
        url: `/causes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Causes"],
    }),

    // update cause
    updateCause: builder.mutation({
      query: ({ data, id }) => ({
        url: `/causes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Causes"],
    }),

    // donation history
    getAllDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["Donations"],
    }),

    getDonationByEmail: builder.query({
      query: (email) => ({
        url: `/donations/${email}`,
        method: "GET",
      }),
    }),

    addDonate: builder.mutation({
      query: (data) => ({
        url: "/donations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Donations"],
    }),

    // endpoints
  }),
});

export const {
  useGetAllUsersQuery,
  useSaveUserMutation,
  useGetUserMutation,
  useGetSingleUserQuery,
  useUpdateUserRoleMutation,
  useGetCausesQuery,
  useGetSingleCauseQuery,
  useAddCauseMutation,
  useUpdateCauseMutation,
  useDeleteCauseMutation,
  useGetAllDonationsQuery,
  useAddDonateMutation,
  useGetDonationByEmailQuery,
} = api;
