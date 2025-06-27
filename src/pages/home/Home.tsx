import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import styles from "./Home.module.css";
import img1 from "../../assets/image11.png";
import Card from "../../components/card/Card";
import { cardData } from "../../components/card/dataCard";
import Testimonials from "../../components/testimonials/Testimonials";
import { carosels } from "../../components/testimonials/dataTestimonials";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Save your data storage here. */}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Save your data storage here.</h1>
          <p className={styles.p1} style={{ maxWidth: "377px" }}>
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button className={styles.btn}>Learn more</button>
        </div>
        <img src={img1} alt="img1" className={styles.img1} />
      </div>

      {/* Feature  */}
      <div className={styles.container}>
        <div className={styles.wrapper2}>
          <h2>Features</h2>
          <p className={styles.p1} style={{ maxWidth: "584px" }}>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>

        {/* Card */}
        <div className={styles.cardGridContainer}>
          {cardData.map((item) => (
            <Card
              imgBg={item.imgBg}
              imgCard={item.imgCard}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Testimonials */}
        <Testimonials data={carosels} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
