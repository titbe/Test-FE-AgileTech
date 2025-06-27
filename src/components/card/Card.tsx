import styles from "./Card.module.css";

interface CardProps {
  imgBg: string;
  imgCard: string;
  title: string;
  description: string;
}

const Card = ({ imgBg, imgCard, title, description }: CardProps) => {
  return (
    <div
      className={styles.mobileColumn}
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        gap: "28px",
        marginTop: "130px",
      }}
    >
      <div className={styles.img}>
        <img src={imgBg} alt="bg-card" />
      </div>

      <div>
        <img src={imgCard} alt="img-card" />
      </div>

      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.btn}>
          <a href="#">Learn more</a>
          <svg
            className={styles.icon}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
