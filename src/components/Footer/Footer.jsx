import styles from "./Footer.module.css";

import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <h2 className={styles.title}>Ananya Yadav</h2> */}
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
      <p className={styles.text}>
        Created by Ananya Yadav | Copyright &copy; {new Date().getFullYear()} |
        All Rights Reserved.
      </p>
    </footer>
  );
}
