import Link from "next/link";
import styles from "./components.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <Link href="/" className={styles.logo} style={{ display: "inline-block", marginBottom: "1rem" }}>
              Fynux<span className={styles.logoDot}>.</span>
            </Link>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Innovating the future with premium technology solutions tailored for modern businesses.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Solutions</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#" className={styles.footerLink}>Cloud Architecture</Link></li>
              <li><Link href="#" className={styles.footerLink}>AI Integration</Link></li>
              <li><Link href="#" className={styles.footerLink}>Cybersecurity</Link></li>
              <li><Link href="#" className={styles.footerLink}>Data Analytics</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="#" className={styles.footerLink}>Careers</Link></li>
              <li><Link href="#" className={styles.footerLink}>Blog</Link></li>
              <li><Link href="#" className={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Fynux Inc. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="#" className={styles.footerLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
