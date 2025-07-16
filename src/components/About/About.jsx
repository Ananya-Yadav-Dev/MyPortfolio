import React from "react";

// import { FaDownload } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./About.module.css";

import aboutProfile from "/assets/about/myProfile.png";

import cursorIcon from "/assets/about/cursorIcon.png";
import serverIcon from "/assets/about/serverIcon.png";
import uiIcon from "/assets/about/uiIcon.png";

export function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.profile}>
          {/* <img
            src={aboutProfile}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          /> */}
          <div className={styles["about-image"]}>
            <img src={aboutProfile} />
          </div>
          <div className={styles.details}>
            <p>
              A professional web developer with a knack for crafting visually
              stunning and highly functional websites. Combining creativity and
              technical expertise, I transform your vision into digital
              masterpieces that excel in both appearance and performance.
            </p>
            {/* <div className={styles.stats}>
              <div className={styles.stat}>
                <h2>
                  45<span className={styles.plus}> +</span>
                </h2>
                <p>Project done</p>
              </div>
              <div className={styles.stat}>
                <h2>
                  5<span className={styles.plus}> +</span>
                </h2>
                <p>Years of experience</p>
              </div>
            </div> */}
          </div>
          <a
            href="https://drive.google.com/file/d/1X6JC9uqLakQl9R-hRgZyp6doSeg9t9Mo/view?usp=sharing"
            target="_blank"
            className={styles.cvBtn}
          >
            <button className={styles.contactBtn}>
              Resume&nbsp; <FaFileAlt className={styles.icon} />
            </button>
          </a>{" "}
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
