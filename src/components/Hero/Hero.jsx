import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amruta J.</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:amrutajodagudri@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="" className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
