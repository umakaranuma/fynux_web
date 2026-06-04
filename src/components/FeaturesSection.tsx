import styles from "./components.module.css";

const features = [
  {
    title: "Cloud Infrastructure",
    description: "Robust, scalable, and secure cloud environments tailored to your enterprise needs, ensuring 99.99% uptime.",
    icon: "☁️"
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence to automate workflows and unlock data-driven insights.",
    icon: "🧠"
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and advanced threat detection systems to keep your sensitive data protected.",
    icon: "🛡️"
  }
];

export default function FeaturesSection() {
  return (
    <section id="services" className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Built for the Future</h2>
          <p className={styles.sectionSubtitle}>
            We combine elegant design with powerful engineering to deliver solutions that give you a competitive edge.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
