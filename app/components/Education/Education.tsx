import styles from './Education.module.css';

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className={styles.heading}>Education</h2>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h3 className={styles.degree}>B.Tech in Computer Science and Engineering</h3>
                        <div className={styles.badges}>
                            <span className={styles.year}>2023 – 2027</span>
                            <span className={styles.cgpaBadge}>CGPA: 8.22 / 10.0</span>
                        </div>
                    </div>
                    <p className={styles.school}>Vellore Institute of Technology (VIT), Chennai, India</p>
                    <div className={styles.details}>
                        <p>
                            <span className={styles.label}>Relevant Coursework: </span>
                            Deep Learning (TensorFlow, CNNs, RNNs, Transformers); Probability & Statistics; Data Analytics.
                        </p>
                        <p>
                            <span className={styles.label}>Availability: </span>
                            Open for 6-Month Winter/Spring Internship / Co-op starting January 2027 (Leading to New Grad 2027).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
