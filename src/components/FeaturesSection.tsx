"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Smartphone, Monitor, Rocket } from "lucide-react";

const features = [
  {
    title: "Mobile App Development",
    description: "We build high-performance, cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    icon: <Smartphone size={32} />
  },
  {
    title: "Web Development",
    description: "From stunning corporate websites to complex enterprise platforms, we engineer scalable and secure web solutions.",
    icon: <Monitor size={32} />
  },
  {
    title: "SaaS Products",
    description: "End-to-end development of Software-as-a-Service platforms designed for rapid growth, subscription management, and seamless scalability.",
    icon: <Rocket size={32} />
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
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            We combine elegant design with powerful engineering to deliver digital solutions that give you a competitive edge.
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
