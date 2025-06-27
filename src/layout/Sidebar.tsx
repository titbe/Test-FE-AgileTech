import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "./Sidebar.module.css";
import { useLogout } from "../hooks/useLogout";

const Sidebar = () => {

  const { handleLogout } = useLogout();

  return (
    <div className={styles.container}>
      <Link to="/" style={{ alignSelf: "center" }}>
        <img src={logo} alt="logo" />
      </Link>
      <p className={styles.btn}>Posts</p>
      <p onClick={handleLogout} className={styles.btn}>
        Logout
      </p>
    </div>
  );
};

export default Sidebar;
