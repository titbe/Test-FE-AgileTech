import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App";
// import Home from "./pages/home/Home.tsx";
// import SignIn from "./pages/sign-in/SignIn.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
