"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Ready to start your next project? We'd love to hear from you.
          </motion.p>
        </div>

        <div className={styles.contactContainer}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.contactInfo}
          >
            <h3>Contact Information</h3>
            <p className={styles.contactDesc}>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <Phone size={24} className={styles.infoIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.infoItem}>
                <Mail size={24} className={styles.infoIcon} />
                <span>fynux.bussiness@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <MapPin size={24} className={styles.infoIcon} />
                <span>Global Headquaters, USA</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.contactForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4} placeholder="Tell us about your project..." required></textarea>
            </div>
            
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
