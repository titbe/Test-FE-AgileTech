// src/api/authApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import type { LoginDtoReq, LoginDtoRes } from "../dto/LoginDto";
import type {
  refreshTokenDtoReq,
  refreshTokenDtoRes,
} from "../dto/refreshTokenDto";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginDtoRes, LoginDtoReq>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "DELETE",
      }),
    }),
    refreshToken: builder.mutation<refreshTokenDtoRes, refreshTokenDtoReq>({
      query: (data) => ({
        url: "/auth/refresh-token",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshTokenMutation } =
  authApi;
