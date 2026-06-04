import styles from "./components.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={`${styles.heroTitle} animate-fade-in stagger-1`}>
          Next-Generation <br />
          <span className="text-gradient">Digital Experiences</span>
        </h1>
        <p className={`${styles.heroDescription} animate-fade-in stagger-2`}>
          Fynux empowers forward-thinking businesses with scalable, secure, and visually stunning technology solutions that drive growth.
        </p>
        <div className={`${styles.heroActions} animate-fade-in stagger-3`}>
          <Link href="#services" className="btn btn-primary">
            Explore Solutions
          </Link>
          <Link href="#contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
