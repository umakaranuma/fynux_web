"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import Image from "next/image";

const pins = [
  { id: 1, name: "North America", clients: "3+", top: "35%", left: "22%" },
  { id: 2, name: "Europe", clients: "2+", top: "30%", left: "52%" }
];

export default function GlobalPresenceSection() {
  return (
    <section className={styles.globalSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Global Reach, Local Impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.sectionSubtitle}
          >
            Delivering cutting-edge solutions for clients across the globe.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.mapContainer}
        >
          <img src="/world_map_simple.svg" alt="World Map" className={styles.mapImage} style={{ opacity: 0.15 }} />
          
          {pins.map((pin) => (
            <div 
              key={pin.id} 
              className={styles.mapPin} 
              style={{ top: pin.top, left: pin.left }}
            >
              <div className={styles.pinTooltip}>
                <strong>{pin.name}</strong>
                <div>{pin.clients} Clients</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
