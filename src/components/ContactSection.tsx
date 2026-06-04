"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Start a Project
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Ready to build something incredible? Provide your project details below.
          </motion.p>
        </div>

        <div className={styles.contactContainer}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.contactInfo}
          >
            <h3>Contact Information</h3>
            <p className={styles.contactDesc}>Fill out the form and our principal architect will get back to you within 24 hours to schedule a discovery call.</p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <Phone size={24} className={styles.infoIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.infoItem}>
                <Mail size={24} className={styles.infoIcon} />
                <span>fynux.bussiness@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <MapPin size={24} className={styles.infoIcon} />
                <span>Global Headquaters, USA</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSuccess ? (
              <div className={styles.successMessage}>
                <CheckCircle2 size={48} className={styles.successIcon} />
                <h3>Inquiry Received!</h3>
                <p>We've successfully received your project details. Please check your email for a confirmation message. We will be in touch shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name / Company Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe / Acme Corp" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Work Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@acme.com" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectType">Project Type</label>
                  <select id="projectType" name="projectType" required defaultValue="">
                    <option value="" disabled>Select a project type...</option>
                    <option value="Cross-Platform Mobile App (iOS & Android)">Cross-Platform Mobile App (iOS & Android)</option>
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Enterprise E-Commerce Store">Enterprise E-Commerce Store</option>
                    <option value="Custom Backend/API Integration">Custom Backend/API Integration</option>
                    <option value="Technical Consulting/Audit">Technical Consulting/Audit</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget">Estimated Project Budget</label>
                  <select id="budget" name="budget" required defaultValue="">
                    <option value="" disabled>Select your budget range...</option>
                    <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                    <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                    <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="description">Project Description & Goals</label>
                  <textarea 
                    id="description" 
                    name="description" 
                    rows={4} 
                    placeholder="Please share a brief overview of your app, target audience, and any specific technical requirements (e.g., Stripe payment gateway, real-time chat, offline support)." 
                    required
                  ></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="timeline">Desired Launch Timeline</label>
                  <select id="timeline" name="timeline" required defaultValue="">
                    <option value="" disabled>Select your timeline...</option>
                    <option value="Broad Idea / Research Stage">Broad Idea / Research Stage</option>
                    <option value="Within 1–2 Months">Within 1–2 Months</option>
                    <option value="Within 3–6 Months">Within 3–6 Months</option>
                    <option value="Urgent Launch Needed">Urgent Launch Needed</option>
                  </select>
                </div>
                
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Inquiry"} {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
