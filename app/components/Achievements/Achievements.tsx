import styles from './Achievements.module.css';

export default function Achievements() {
    return (
        <section id="achievements" className="section">
            <div className="container">
                <h2 className={styles.heading}>Achievements</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <span className={styles.icon}>🏆</span>
                        <div className={styles.details}>
                            <h3 className={styles.title}>Won MongoDB Track & 4th Overall</h3>
                            <p className={styles.event}>DevsHouse25</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.icon}>🥈</span>
                        <div className={styles.details}>
                            <h3 className={styles.title}>Finalist</h3>
                            <p className={styles.event}>Qualcomm Edge AI Hackathon 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
