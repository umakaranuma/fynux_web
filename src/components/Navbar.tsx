"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./components.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/app_icon.png" alt="Fynux Logo" width={32} height={32} />
          <span>Fynux<span className={styles.logoDot}>.</span></span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="#services" className={styles.navLink}>Services</Link></li>
          <li><Link href="#projects" className={styles.navLink}>Our Work</Link></li>
          <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>
        <Link href="#contact" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
