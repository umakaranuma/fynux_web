"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Smartphone, Monitor, Rocket, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Production-Grade Mobile Development",
    description: "High-performance applications for Android and iOS engineered for various business needs.",
    icon: <Smartphone size={32} />,
    details: [
      "Custom Cross-Platform Apps with Flutter",
      "Native Integration for OS-level features",
      "E-Commerce Solutions with secure payments",
      "Offline-First Apps using Hive and SQLite"
    ]
  },
  {
    title: "Full-Stack Web & Backend Solutions",
    description: "Comprehensive business systems built with React, NestJS, and Django REST Framework.",
    icon: <Monitor size={32} />,
    details: [
      "Corporate & Portfolio Websites",
      "Scalable Enterprise APIs",
      "Tuition & Management Systems",
      "Real-Time Comm. via WebSockets & Ably"
    ]
  },
  {
    title: "Specialized Technical Consulting",
    description: "Senior technical advisory to ensure your architecture is built to last and perform.",
    icon: <Rocket size={32} />,
    details: [
      "Clean Architecture Audits",
      "Performance Optimization",
      "Firebase & Serverless Cloud Strategy",
      "Real-time Databases for Rapid Scaling"
    ]
  }
];

export default function FeaturesSection() {
  return (
    <section id="services" className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Delivering robust engineering and technical leadership across all digital platforms.
          </motion.p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
              
              <ul className={styles.featureList}>
                {feature.details.map((detail, dIdx) => (
                  <li key={dIdx}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
