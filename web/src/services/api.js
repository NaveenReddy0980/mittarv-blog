import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => '/posts' }),
    getPostBySlug: builder.query({ query: (slug) => `/posts/${slug}` }),
    createPost: builder.mutation({ query: (body) => ({ url: '/posts', method: 'POST', body }) }),
    login: builder.mutation({ query: (credentials) => ({ url: '/auth/login', method: 'POST', body: credentials }) }),
    register: builder.mutation({ query: (data) => ({ url: '/auth/register', method: 'POST', body: data }) }),
  }),
});

export const { useGetPostsQuery, useGetPostBySlugQuery, useCreatePostMutation, useLoginMutation, useRegisterMutation } = api;
