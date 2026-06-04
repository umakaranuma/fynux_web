"use client";

import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Layers, Zap, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

const whyPartner = [
  {
    title: "Multi-Stack Mastery",
    description: "We bring a rare depth of full-stack expertise to the table. Whether engineering smooth frontends in Flutter and React or architecting heavy-duty, secure backends in NestJS and Django REST Framework, we align every layer of your platform seamlessly.",
    icon: <Layers size={28} />
  },
  {
    title: "Native-Level Performance",
    description: "We refuse to compromise on speed or stability. By combining cross-platform framework efficiency with custom native engineering in Kotlin and Swift, we tap directly into platform-specific configurations and hardware.",
    icon: <Zap size={28} />
  },
  {
    title: "Globally Validated",
    description: "Our technical expertise isn't just self-proclaimed—it is verified by the global engineering ecosystem. We are active open-source contributors, with multiple packages published on Pub.dev (Flutter) and PyPI (Python).",
    icon: <Globe size={28} />
  },
  {
    title: "Senior-Led Execution",
    description: "Your project is guided from blueprint to deployment by a veteran technical lead. We actively eliminate communication barriers, unoptimized code, and state management bugs common with junior-level teams.",
    icon: <ShieldCheck size={28} />
  }
];

const ecosystem = [
  { category: "Mobile Architecture", tech: "Flutter, Android SDK, iOS SDK, BLOC State Management, Platform Channels" },
  { category: "Native Core Development", tech: "Kotlin, Swift" },
  { category: "Web & Backend Frameworks", tech: "NestJS, Django REST Framework, React" },
  { category: "Data & Cloud Infrastructure", tech: "Hive, SQLite, Drift, PostgreSQL, Firebase Ecosystem, Secure REST/GraphQL APIs" },
  { category: "Quality Assurance & DevOps", tech: "Advanced Unit/Widget Testing, CI/CD Pipeline Automation (GitHub Actions, Codemagic, Fastlane)" }
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        
        {/* Intro */}
        <div className={styles.aboutIntro}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.aboutText}
          >
            <h2 className={styles.aboutTitle}>Engineering Digital Products with Architectural Excellence</h2>
            <p>At Fynux, we don't just write code—we engineer scalable, production-grade software ecosystems designed to fuel business growth. Founded by a Senior Software Engineer with a rich background in mobile system design and relational database architecture, our agency bridges the gap between complex enterprise logic and exceptional user experiences.</p>
            <p>We specialize in crafting high-performance cross-platform mobile applications and robust full-stack architectures. Our foundational development philosophy is rooted in Clean Architecture, SOLID principles, and modular design. This ensures that every line of code we deliver is maintainable, secure, and built to scale alongside your business.</p>
          </motion.div>
        </div>

        {/* Why Partner With Us */}
        <div className={styles.whyPartnerWrap}>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitleCenter}
          >
            Why Leading Brands and Startups Partner With Us
          </motion.h3>
          <div className={styles.whyPartnerGrid}>
            {whyPartner.map((item, idx) => (
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
          
          <div className={styles.ecosystemList}>
            {ecosystem.map((eco, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={styles.ecoItem}
              >
                <div className={styles.ecoCategory}>{eco.category}</div>
                <div className={styles.ecoTech}>{eco.tech}</div>
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
