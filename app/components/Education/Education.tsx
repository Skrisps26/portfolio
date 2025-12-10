import styles from './Education.module.css';

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className={styles.heading}>Education</h2>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h3 className={styles.degree}>B.Tech in Computer Science and Engineering</h3>
                        <span className={styles.year}>2023 – 2027 (Expected)</span>
                    </div>
                    <p className={styles.school}>Vellore Institute of Technology, Chennai</p>
                </div>
            </div>
        </section>
    );
}
