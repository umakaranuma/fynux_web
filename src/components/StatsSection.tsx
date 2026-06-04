"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Globe2, Trophy, Clock } from "lucide-react";
import styles from "./components.module.css";

const stats = [
  { icon: <Trophy size={32} />, value: 5, suffix: "+", label: "Projects Delivered" },
  { icon: <Globe2 size={32} />, value: 2, suffix: "+", label: "Countries Served" },
  { icon: <Users size={32} />, value: 10, suffix: "+", label: "Enterprise Clients" },
  { icon: <Clock size={32} />, value: 99.99, suffix: "%", label: "SLA Uptime", decimals: 2 },
];

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.statItem}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>
                <CountUp end={stat.value} duration={2.5} decimals={stat.decimals || 0} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
