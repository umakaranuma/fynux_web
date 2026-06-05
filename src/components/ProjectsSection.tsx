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
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                <div>
                  <strong style={{color: "var(--brand-primary)"}}>The Challenge:</strong>
                  <p className={styles.projectDesc} style={{marginBottom: "1rem", marginTop: "0.25rem"}}>{project.challenge}</p>
                </div>
                
                <div>
                  <strong style={{color: "var(--text-primary)"}}>Our Delivery:</strong>
                  <p className={styles.projectDesc} style={{marginBottom: "2rem", marginTop: "0.25rem"}}>{project.delivery}</p>
                </div>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
