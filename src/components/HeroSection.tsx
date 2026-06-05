"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import Link from "next/link";
import { ArrowRight, Smartphone, Server, Database } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}></div>
      <div className={`container ${styles.heroSplit}`}>
        <div className={styles.heroContentLeft}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroTitleLeft}
          >
            Engineering Scalable <br />
            <span className="text-gradient">Mobile & Full-Stack</span> <br/>
            Digital Products.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.heroDescriptionLeft}
          >
            We architect production-grade mobile applications and robust backend ecosystems designed for enterprise stability, seamless performance, and global scale.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.heroActionsLeft}
          >
            <Link href="#contact" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              Schedule a Technical Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.heroVisualRight}
        >
          <div className={styles.abstractGraphic}>
            <div className={`${styles.graphicBlock} ${styles.mobileBlock}`}>
              <Smartphone size={32} className="text-gradient" />
              <span>Mobile Interface</span>
            </div>
            <div className={styles.graphicLines}>
              <div className={styles.animatedLine}></div>
              <div className={styles.animatedLine}></div>
            </div>
            <div className={`${styles.graphicBlock} ${styles.apiBlock}`}>
              <Server size={32} color="var(--brand-primary)" />
              <span>API Gateway</span>
            </div>
            <div className={styles.graphicLines}>
              <div className={styles.animatedLine}></div>
            </div>
            <div className={`${styles.graphicBlock} ${styles.dbBlock}`}>
              <Database size={32} />
              <span>Relational Storage</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
