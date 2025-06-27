// import axios from "axios";
// import { store } from "../store";
// import { setCredentials, logout } from "../store/authSlice";

// const baseURL = "https://api-test-web.agiletech.vn";

// const api = axios.create({ baseURL });

// api.interceptors.request.use((config) => {
//   const token = store.getState().auth.accessToken;
//   if (token && config.headers) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalReq = error.config;
//     if (error.response?.status === 401 && !originalReq._retry) {
//       originalReq._retry = true;
//       const refreshToken = localStorage.getItem("refreshToken");
//       if (refreshToken) {
//         try {
//           const res = await api.post("/auth/refresh-token", { refreshToken });
//           store.dispatch(setCredentials({ accessToken: res.data.accessToken }));
//           localStorage.setItem("accessToken", res.data.accessToken);
//           originalReq.headers[
//             "Authorization"
//           ] = `Bearer ${res.data.accessToken}`;
//           return api(originalReq);
//         } catch {
//           store.dispatch(logout());
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://api-test-web.agiletech.vn",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
