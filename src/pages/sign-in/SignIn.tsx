import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import styles from "./SignIn.module.css";
import { setCredentials } from "../../store/authSlice";
import { useLoginMutation } from "../../api/authApi";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ username }).unwrap();

      if (!res.accessToken) {
        alert(`Login failed => username: "${username}" is invalid`);
        return;
      }

      dispatch(setCredentials({ accessToken: res.accessToken }));
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      navigate("/");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      alert(`Login failed: ${errorMessage}`);
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Sign In</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            id="username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className={styles.btn}
            disabled={!username.trim() || isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
