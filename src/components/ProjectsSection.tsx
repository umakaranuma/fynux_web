"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Subscription-Based E-Learning Ecosystem",
    category: "EdTech Solution",
    challenge: "Building a mobile learning platform requiring high-fidelity video distribution, secure payment handling, and offline usability.",
    delivery: "Implemented an automated subscription billing pipeline, custom native audio/video focus configurations for mobile operating systems, and advanced local database caching strategies to ensure a seamless offline-first experience.",
    tags: ["Flutter", "Hive", "Payments", "Video Streaming"]
  },
  {
    title: "Real-Time Communication & Messaging Platform",
    category: "Enterprise Communication",
    challenge: "Developing a low-latency, real-time messaging environment capable of operating reliably under unstable network conditions.",
    delivery: "Designed a high-throughput synchronization engine using advanced state management architectures, paired with encrypted local storage layers and background push-notification delivery frameworks.",
    tags: ["WebSockets", "State Management", "Encryption", "Push Notifications"]
  },
  {
    title: "High-Performance Retail Storefronts",
    category: "Digital Commerce",
    challenge: "Launching an asynchronous mobile commerce application with absolute state tracking across cart management and checkout funnels.",
    delivery: "Built a modular frontend integrated with complex enterprise REST APIs, introducing automated token-refresh mechanics, bulletproof error handling, and flawless cross-platform performance.",
    tags: ["REST APIs", "E-Commerce", "Cross-Platform", "Token Mechanics"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="solutions" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Proven Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Showcasing the digital experiences and enterprise architectures we've brought to life.
          </motion.p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className={styles.projectCard}
            >
              {/* Image Placeholder Block */}
              <div className={styles.projectImageBlock}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectPill}>{project.category}</span>
                
                <p className={styles.projectDesc}>{project.challenge} {project.delivery}</p>
                
                <div className={styles.projectActionRow}>
                  <div className={styles.projectBtn}>View Details</div>
                  <div className={styles.projectIconBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
