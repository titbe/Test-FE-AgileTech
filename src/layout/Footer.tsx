import styles from "./Footer.module.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import message from "../assets/message.svg";

const Footer = () => {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(156, 105, 226, 0.2)",

        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Link to="/" style={{ display: "flex", gap: "20px" }}>
            <img src={logo} alt="logo" />
            <p className={styles.textLogo}>DataWarehouse</p>
          </Link>
          <p
            style={{ fontWeight: "600", maxWidth: "230px", marginTop: "60px" }}
          >
            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
          </p>
          <div style={{ fontStyle: "italic" }}>
            <p>info@warehouse.project</p>
            <p>1-232-3434 (Main)</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <p className={styles.title}>About</p>
          <Link to="/" className={styles.btn}>
            Profile
          </Link>
          <Link to="/" className={styles.btn}>
            Features
          </Link>
          <Link to="/" className={styles.btn}>
            Careers
          </Link>
          <Link to="/" className={styles.btn}>
            DW News
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <p className={styles.title}>Help</p>
          <Link to="/" className={styles.btn}>
            Support
          </Link>
          <Link to="/" className={styles.btn}>
            Sign up
          </Link>
          <Link to="/" className={styles.btn}>
            Guide
          </Link>
          <Link to="/" className={styles.btn}>
            Reports
          </Link>
          <Link to="/" className={styles.btn}>
            Q&A
          </Link>
        </div>
        <div>
          <p className={styles.title}>Social Media</p>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
            }}
          >
            <li className={styles.social}></li>
            <li className={styles.social}></li>
            <li className={styles.social}></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div style={{}}>
          <p>© Datawarehouse™, 2020. All rights reserved. Company</p>
          <p>Registration Number: 21479524.</p>
        </div>
        <button className={styles.messageBtn}>
          <img src={message} alt="Message Icon" className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
