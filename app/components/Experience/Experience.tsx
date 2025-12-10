import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className={styles.heading}>System_Log</h2>

                <div className={styles.timeline}>
                    <div className={styles.item}>
                        <div className={styles.meta}>
                            <span className={styles.date}>2024 - NOW</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h3 className={styles.role}>Tech Team Member</h3>
                                <div className={styles.company}>ACM-VIT</div>
                            </div>
                            <ul className={styles.list}>
                                <li>Delivered 5+ REST APIs and internal tools.</li>
                                <li>Engineered backend systems in C/Python.</li>
                                <li>Reduced onboarding time by 60% via doc restructuring.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Add more items here if needed, keeping structure */}
                </div>
            </div>
        </section>
    );
}
