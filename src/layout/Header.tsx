import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import logo from "../../public/logo.svg";

// import { useAuth } from "../hooks/useAuth";

const Header = () => {
  // const accessToken = useAuth();
  const accessToken = localStorage.getItem("accessToken");
  const { handleLogout } = useLogout();

  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      {accessToken ? (
        <div className={styles.authButtons}>
          <Link to="/profile">
            <button className={styles.btn}>Profile</button>
          </Link>
          <button onClick={handleLogout} className={styles.btn}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/signin">
          <button className={styles.btn}>Sign In</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
