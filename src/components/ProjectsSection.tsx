"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { ExternalLink, ArrowRight, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Finzo",
    category: "Finance & Fintech",
    description: "A comprehensive cross-platform money manager application. We built the high-performance mobile app using Flutter and Hive, complemented by a seamless web platform.",
    webLink: "https://finzo-nu.vercel.app/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.fynux.finzo&pcampaignid=web_share",
    tags: ["Flutter", "Hive", "Next.js", "Cross-Platform"]
  },
  {
    title: "Finemart",
    category: "E-Commerce",
    description: "A complete mobile storefront solution featuring secure payment gateways, cart management, and real-time order tracking for retail businesses.",
    webLink: "#",
    playStoreLink: "#",
    tags: ["Flutter", "Stripe", "Node.js", "E-Commerce"]
  },
  {
    title: "MedLearning",
    category: "Education Technology",
    description: "An educational platform designed for video streaming lessons, student progress tracking, and automated subscription billing.",
    webLink: "#",
    playStoreLink: "#",
    tags: ["React", "NestJS", "Video Streaming", "EdTech"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Our Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Showcasing the digital experiences and platforms we've brought to life.
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
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {project.webLink && (
                      <a href={project.webLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink} title="Web Platform">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink} title="Play Store">
                        <Smartphone size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                  {project.playStoreLink && (
                    <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className={styles.projectAction}>
                      Play Store <ArrowRight size={16} />
                    </a>
                  )}
                  {project.webLink && (
                    <a href={project.webLink} target="_blank" rel="noopener noreferrer" className={styles.projectAction}>
                      Web Platform <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
