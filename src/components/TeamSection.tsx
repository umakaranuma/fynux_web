"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Code, Database, ShieldCheck, Smartphone, PenTool, Cloud } from "lucide-react";

const teamMembers = [
  { title: "Frontend Developers", icon: <Code size={32} /> },
  { title: "Backend Developers", icon: <Database size={32} /> },
  { title: "Quality Assurance Team", icon: <ShieldCheck size={32} /> },
  { title: "Mobile Developers", icon: <Smartphone size={32} /> },
  { title: "UI/UX Designers", icon: <PenTool size={32} /> },
  { title: "Cloud & DevOps Experts", icon: <Cloud size={32} /> },
];

export default function TeamSection() {
  return (
    <section id="team" className={styles.teamSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
            style={{ marginBottom: "1rem" }}
          >
            Our Team
          </motion.h2>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={styles.teamCard}
            >
              <div className={styles.teamIconGlow}></div>
              <div className={styles.teamIconWrapper}>
                {member.icon}
              </div>
              <div className={styles.teamTitle}>{member.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
