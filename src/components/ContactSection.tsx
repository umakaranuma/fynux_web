"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./components.module.css";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import CustomSelect from "./CustomSelect";

const subjectOptions = [
  { value: "Project Inquiry", label: "Project Inquiry" },
  { value: "Technical Consulting", label: "Technical Consulting" },
  { value: "Partnership Opportunity", label: "Partnership Opportunity" },
  { value: "General Question", label: "General Question" }
];

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
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Whether you have a project in mind or just want to say hello, we'd love to hear from you.
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
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@company.com" required />
                </div>

                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <CustomSelect 
                    name="subject" 
                    options={subjectOptions} 
                    placeholder="How can we help you?" 
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Tell us about your project, question, or idea..." 
                    required
                  ></textarea>
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
