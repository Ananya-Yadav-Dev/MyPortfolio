import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import menuIcon from "/assets/nav/menuIcon.png";
import closeIcon from "/assets/nav/closeIcon.png";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBlog } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items data
  const menuItems = [
    { href: "#home", icon: FaHome, label: "Home" },
    { href: "#about", icon: FaUser, label: "About" },
    { href: "#skills", icon: FaFileAlt, label: "Skills" },
    { href: "#projects", icon: FaProjectDiagram, label: "Projects" },
    { href: "#contact", icon: AiOutlinePhone, label: "Contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <a className={styles.title} href="/">
        Ananya Yadav
      </a>
      <div className={styles.menu}>
      <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        ></img>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <a href={item.href}>
                <item.icon className={styles.icon} /> 
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
        <a href="https://drive.google.com/file/d/1X6JC9uqLakQl9R-hRgZyp6doSeg9t9Mo/view?usp=sharing" target="_blank" className={styles.rightSection}>
          <button className={styles.resumeBtn}>Resume</button>
        </a>
    </nav>
  );
}