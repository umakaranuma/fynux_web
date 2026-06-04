"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Store, GraduationCap, Building2, Zap } from "lucide-react";

const industries = [
  {
    category: "Retail / Shops",
    title: "RetailGo Mobile",
    description: "Integrated payments, inventory sync, and push notifications for sales.",
    icon: <Store size={28} />
  },
  {
    category: "Education",
    title: "EduSystem Pro",
    description: "Student tracking, video streaming for lessons, and automated billing.",
    icon: <GraduationCap size={28} />
  },
  {
    category: "Corporate",
    title: "Enterprise Core",
    description: "Secure internal employee tools with custom workflow engines.",
    icon: <Building2 size={28} />
  },
  {
    category: "Startups",
    title: "MVP Launchpad",
    description: "Rapid development of a 'Minimum Viable Product' to get to market fast.",
    icon: <Zap size={28} />
  }
];

export default function IndustriesSection() {
  return (
    <section className={styles.industriesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Industry Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Tailored digital platforms designed specifically for your sector's unique challenges.
          </motion.p>
        </div>
        
        <div className={styles.industriesGrid}>
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={styles.industryCard}
            >
              <div className={styles.industryHeader}>
                <div className={styles.industryIcon}>{industry.icon}</div>
                <span className={styles.industryCategory}>{industry.category}</span>
              </div>
              <h3 className={styles.industryTitle}>{industry.title}</h3>
              <p className={styles.industryDesc}>{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
