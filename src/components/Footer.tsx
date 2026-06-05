import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./components.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerBrandCenter}>
          <div className={styles.footerLogoCenter}>
            Fynux.
          </div>
          <p className={styles.footerSubtitleCenter}>
            Innovating the future with premium technology solutions tailored for modern businesses. We build the digital foundation for tomorrow.
          </p>
        </div>

        <div className={styles.footerGrid}>
          {/* Column 1: Connect With Us */}
          <div className={styles.footerCol}>
            <h4>Connect With Us</h4>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className={styles.footerCol}>
            <h4>Solutions</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#" className={styles.footerLink}>Web Applications</Link></li>
              <li><Link href="#" className={styles.footerLink}>Mobile Applications</Link></li>
              <li><Link href="#" className={styles.footerLink}>SaaS Products</Link></li>
              <li><Link href="#" className={styles.footerLink}>Custom Software</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#" className={styles.footerLink}>Terms & Conditions</Link></li>
              <li><Link href="#" className={styles.footerLink}>Privacy Policy</Link></li>
              <li><Link href="#" className={styles.footerLink}>Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className={styles.footerCol}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <Mail />
                <span>fynux.bussiness@gmail.com</span>
              </div>
              <div className={styles.contactInfoItem}>
                <Phone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactInfoItem}>
                <MapPin />
                <span>Global - Remote Software Development Services</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Fynux Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

