"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Layers, Zap, Globe, ShieldCheck, Smartphone, Terminal, Server, Database, Cog } from "lucide-react";
import Link from "next/link";

const qualityStandards = [
  {
    title: "95%+ Test Coverage Guarantees",
    description: "Every application we deliver undergoes rigorous unit, widget, and structural integration testing to completely eliminate regression bugs before deployment.",
    icon: <ShieldCheck size={28} />
  },
  {
    title: "Clean Architecture Enforcement",
    description: "We build using strictly decoupled, modular architectures. This ensures your codebase never becomes technical debt and remains easy for any engineering team to scale in the future.",
    icon: <Layers size={28} />
  },
  {
    title: "Open-Source Validated Core",
    description: "Our internal utility solutions are backed by components trusted by the global software community, with verified packages published on the official Pub.dev and PyPI engineering registries.",
    icon: <Globe size={28} />
  }
];

const ecosystem = [
  { 
    category: "Mobile Frameworks", 
    description: "Cross-platform and native integrations tailored for high performance.",
    tech: ["Flutter", "Dart", "iOS SDK", "Android SDK"],
    icon: <Smartphone size={24} />
  },
  { 
    category: "Native Operating Core", 
    description: "Low-level system access and complex hardware integrations.",
    tech: ["Kotlin", "Swift"],
    icon: <Terminal size={24} />
  },
  { 
    category: "Web & API Backends", 
    description: "Scalable API architectures and interactive frontends.",
    tech: ["NestJS", "Django REST Framework", "React"],
    icon: <Server size={24} />
  },
  { 
    category: "Data Systems", 
    description: "Robust data persistence and real-time synchronization.",
    tech: ["PostgreSQL", "MySQL", "Hive Databases", "SQLite", "Drift", "SharedPreferences"],
    icon: <Database size={24} />
  },
  { 
    category: "DevOps & Quality Assurance", 
    description: "Automated pipelines and test-driven deployment systems.",
    tech: ["GitHub Actions", "Automated CI-CD Pipelines", "Fastlane", "App Store & Play Store Delivery"],
    icon: <Cog size={24} />
  }
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        
        {/* Intro */}
        <div className={styles.aboutSplit}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className={styles.aboutLogoContainer}
          >
            <motion.div 
              className={styles.aboutLogoGraphic}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              F
            </motion.div>
            <div className={styles.aboutLogoText}>Fynux</div>
            <div className={styles.aboutLogoSub}>Engineering Excellence</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.aboutContent}
          >
            <div>
              <h2 className={styles.aboutTitle}>About Fynux</h2>
              <p className={styles.aboutSubtitle}>Where Logic Meets Imagination</p>
            </div>
            <div className={styles.aboutText}>
              <p>At Fynux, we don't just write code—we engineer scalable, production-grade software ecosystems designed to fuel business growth. Founded by a Senior Software Engineer with a rich background in mobile system design and relational database architecture, our agency bridges the gap between complex enterprise logic and exceptional user experiences.</p>
              <p>We specialize in crafting high-performance cross-platform mobile applications and robust full-stack architectures. Our foundational development philosophy is rooted in Clean Architecture, SOLID principles, and modular design. This ensures that every line of code we deliver is maintainable, secure, and built to scale alongside your business.</p>
            </div>
          </motion.div>
        </div>

        {/* Trust & Quality Standards */}
        <div className={styles.whyPartnerWrap} id="tech-stack">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitleCenter}
          >
            Trust & Quality Standards
          </motion.h3>
          <div className={styles.whyPartnerGrid}>
            {qualityStandards.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={styles.whyCard}
              >
                <div className={styles.whyIcon}>{item.icon}</div>
                <h4 className={styles.whyTitle}>{item.title}</h4>
                <p className={styles.whyDesc}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Ecosystem */}
        <div className={styles.ecosystemWrap}>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitleCenter}
          >
            Our Technical Ecosystem
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitleCenter}
          >
            We carefully select elite modern technologies to build robust, future-proof software.
          </motion.p>
          
          <div className={styles.ecosystemGrid}>
            {ecosystem.map((eco, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={styles.ecoCard}
              >
                <div className={styles.ecoHeader}>
                  <div className={styles.ecoIcon}>{eco.icon}</div>
                  <h4 className={styles.ecoCategoryTitle}>{eco.category}</h4>
                </div>
                <p className={styles.ecoDescription}>{eco.description}</p>
                <div className={styles.ecoTechTags}>
                  {eco.tech.map((t, i) => (
                    <span key={i} className={styles.ecoTag}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.aboutCta}
        >
          <p>From complex e-commerce storefronts with secure payment rails to real-time communication tools and workflow management engines, we turn ambitious digital ideas into reliable enterprise solutions.</p>
          <Link href="#contact" className="btn btn-primary">
            Let's build something built to last
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
