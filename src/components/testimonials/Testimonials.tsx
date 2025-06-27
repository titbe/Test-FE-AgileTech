import { useState } from "react";
import styles from "./Testimonials.module.css";
import type { CaroselsProps } from "./dataTestimonials";

const Testimonials = ({ data }: CaroselsProps) => {
  const [current, setCurrent] = useState(0);
  const total = data.length;

  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);
  const goNext = () => setCurrent((c) => (c + 1) % total);
  const choose = (idx: number) => setCurrent(idx);

  return (
    <div className={styles.container}>
      <h2>Testimonials</h2>

      <div className={styles.slider}>
        <p
          className={`${styles.navButton} ${styles.prev}`}
          onClick={goPrev}
        >
          ←
        </p>

        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item, idx) => (
            <div className={styles.card} key={idx}>
              <img src={item.img} alt="avatar" className={styles.avatar} />
              <div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.website}>{item.website}</div>
                <p className={styles.cmt}>{item.cmt}</p>
              </div>
            </div>
          ))}
        </div>

        <p
          className={`${styles.navButton} ${styles.next}`}
          onClick={goNext}
        >
          →
        </p>
      </div>

      <div className={styles.pagination}>
        {data.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${current === idx ? styles.active : ""}`}
            onClick={() => choose(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
