// src/routes/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/sign-in/SignIn";
import { store } from "../store";
import { Provider, useDispatch } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/profile/Profile";
import { useEffect } from "react";
import { setCredentials, logout } from "../store/authSlice";
import { useRefreshTokenMutation } from "../api/authApi";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const [refreshTokenApi] = useRefreshTokenMutation();

  useEffect(() => {
    const refresh = async () => {
      const token = localStorage.getItem("refreshToken");
      if (!token) return;

      try {
        const res = await refreshTokenApi({ refreshToken: token }).unwrap();
        dispatch(setCredentials({ accessToken: res.accessToken }));
      } catch {
        dispatch(logout());
      }
    };

    refresh();
  }, [dispatch, refreshTokenApi]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}
