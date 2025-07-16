import React from "react";

import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Hero.module.css";
import heroImage from "/assets/hero/hero-img.png";

export function Hero() {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi! I'm <span className="name">Ananya</span>
        </h1>
        <h3 className={styles.profession}>
          <Typewriter
            words={[
              "Software Developer",
              "Freelancer",
              "MERN Stack Developer",
              "UI/UX Designer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p className={styles.description}>
          I build responsive, scalable web applications with seamless frontend
          experiences and robust backend solutions. With a passion for clean
          code and user-centric design, I turn ideas into efficient digital
          products.
        </p>
        <button className={styles.contactBtn}>
          <a href="#contact">Let's Connect</a>
        </button>

        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/ananya_6082"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.social} />
          </a>
          <a
            href="https://linkedin.com/in/ananya-yadav-783702332"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.social} />
          </a>
          <a
            href="https://github.com/Ananya-Yadav-Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.social} />
          </a>
          <a href="mailto:ananyayadav0940@gmail.com">
            <FaEnvelope className={styles.social} />
          </a>
        </div>
      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
