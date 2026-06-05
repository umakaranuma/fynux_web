"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Smartphone, Server, ShoppingCart, Workflow, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Enterprise Mobile Engineering",
    description: "We engineer production-ready cross-platform mobile apps using the Flutter framework. To guarantee native-level performance, our team writes custom platform channels in Kotlin and Swift, ensuring seamless background processing, hardware integration, and zero compromise on execution speed.",
    icon: <Smartphone size={32} />,
    details: [
      "Cross-platform frameworks (Flutter)",
      "Native Kotlin and Swift optimizations",
      "High-performance iOS and Android"
    ]
  },
  {
    title: "Robust Backend & Cloud Architecture",
    description: "We build the heavy-duty infrastructure that powers front-end experiences. Utilizing NestJS and Django REST Framework, we design highly secure, scalable APIs and advanced relational database architectures optimized for low-latency queries and high-throughput reliability.",
    icon: <Server size={32} />,
    details: [
      "Scalable API layers",
      "Relational data systems",
      "Heavy data traffic & security"
    ]
  },
  {
    title: "Digital Commerce Solutions",
    description: "We develop comprehensive e-commerce systems featuring robust client-side performance, secure international payment gateways (such as Stripe integration), advanced local data caching, and synchronized inventory tracking.",
    icon: <ShoppingCart size={32} />,
    details: [
      "Secure, end-to-end storefronts",
      "Real-time tracking capabilities",
      "Payment gateway integration"
    ]
  },
  {
    title: "Custom Automated Workflows",
    description: "We build tailored business tooling, including advanced institute/shop management configurations, real-time synchronization engines, and background messaging pipelines engineered using WebSockets for instantaneous data delivery.",
    icon: <Workflow size={32} />,
    details: [
      "Internal management tools",
      "Real-time sync engines",
      "Complex operational logic"
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
            Our Core Services
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
              style={{ paddingBottom: '4.5rem' }} // Space for the arrow button
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc} style={{ marginBottom: '1.5rem' }}>{feature.description}</p>
              
              <ul className={styles.featureList}>
                {feature.details.map((detail, dIdx) => (
                  <li key={dIdx}>
                    <div className={styles.featureDot} />
                    {detail}
                  </li>
                ))}
              </ul>
              
              <div className={styles.cardArrowBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
