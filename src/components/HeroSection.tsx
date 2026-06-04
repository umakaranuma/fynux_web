"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}></div>
      <div className={`container ${styles.heroContent}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroTitle}
        >
          Next-Generation <br />
          <span className="text-gradient">Digital Experiences</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.heroDescription}
        >
          Fynux empowers forward-thinking businesses with scalable, secure, and visually stunning technology solutions that drive growth.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.heroActions}
        >
          <Link href="#services" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            Explore Solutions <ArrowRight size={18} />
          </Link>
          <Link href="#contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
