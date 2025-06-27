// src/api/postApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import type { createPostsDtoReq, getPostsDtoRes, Post } from "../dto/PostDto";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<
      getPostsDtoRes,
      { title?: string; tags?: string; page?: number }
    >({
      query: ({ title, tags, page = 1 }) => {
        const params: Record<string, string | number> = { page };

        if (title) params.title = title;
        if (tags) params.tags = tags;

        return {
          url: "/posts",
          method: "GET",
          params,
        };
      },
      providesTags: ["Posts"],
    }),
    getTags: builder.query<string[], void>({
      query: () => ({
        url: "/posts/tags",
        method: "GET",
      }),
    }),
    createPost: builder.mutation<void, createPostsDtoReq>({
      query: (data) => ({
        url: `/posts`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<void, { postId: string; data: Partial<Post> }>(
      {
        query: ({ postId, data }) => ({
          url: `/posts/${postId}`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["Posts"],
      }
    ),
    deletePost: builder.mutation<void, string>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetTagsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
