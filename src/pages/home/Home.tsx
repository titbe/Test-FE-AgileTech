import { useEffect, useRef } from 'react';
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import styles from "./Home.module.css";
import img1 from "../../assets/image11.png";
import Card from "../../components/card/Card";
import { cardData } from "../../components/card/dataCard";
import Testimonials from "../../components/testimonials/Testimonials";
import { carosels } from "../../components/testimonials/dataTestimonials";

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const cardsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Different observer options for mobile and desktop
    const isMobile = window.innerWidth <= 768;
    
    const observerOptions = {
      threshold: isMobile ? 0.1 : 0.15,
      rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        } else {
          // Remove animate class when element leaves viewport
          entry.target.classList.remove(styles.animate);
        }
      });
    }, observerOptions);

    const sections = [
      headerRef.current,
      heroRef.current,
      featuresRef.current,
      cardsRef.current,
      testimonialsRef.current,
      footerRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div ref={headerRef} className={`${styles.headerSection} ${styles.slideInDown}`}>
        <Header />
      </div>

      {/* Save your data storage here. */}
      <div className={`${styles.container} ${styles.fadeInUp}`} ref={heroRef}>
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

      {/* Feature */}
      <div className={styles.container}>
        <div className={`${styles.wrapper2} ${styles.fadeInUp}`} ref={featuresRef}>
          <h2 className={styles.features}>Features</h2>
          <p className={styles.p1} style={{ maxWidth: "584px" }}>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>

        {/* Card */}
        <div className={`${styles.cardGridContainer} ${styles.staggeredCards}`} ref={cardsRef}>
          {cardData.map((item, index) => (
            <div key={index} className={styles.cardWrapper} style={{ animationDelay: `${index * 0.2}s` }}>
              <Card
                imgBg={item.imgBg}
                imgCard={item.imgCard}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={`${styles.testimonialsSection} ${styles.fadeInUp}`} ref={testimonialsRef}>
          <Testimonials data={carosels} />
        </div>
      </div>
      
      {/* Footer */}
      <div ref={footerRef} className={`${styles.footerSection} ${styles.slideInUp}`}>
        <Footer />
      </div>
    </>
  );
};

export default Home;