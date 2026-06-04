"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Cloud, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Cloud Infrastructure",
    description: "Robust, scalable, and secure cloud environments tailored to your enterprise needs, ensuring 99.99% uptime.",
    icon: <Cloud size={32} />
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence to automate workflows and unlock data-driven insights.",
    icon: <Cpu size={32} />
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and advanced threat detection systems to keep your sensitive data protected.",
    icon: <ShieldCheck size={32} />
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
            Built for the Future
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            We combine elegant design with powerful engineering to deliver solutions that give you a competitive edge.
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
              whileHover={{ y: -10 }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
