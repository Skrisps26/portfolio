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
                            <h3 className={styles.title}>1st Place MongoDB Track & 4th Overall</h3>
                            <p className={styles.event}>DevsHouse25 Hackathon</p>
                            <p className={styles.desc}>Built and shipped a full-stack solution under 24-hour constraints; ranked in top 0.5% of teams.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.icon}>🥈</span>
                        <div className={styles.details}>
                            <h3 className={styles.title}>Finalist</h3>
                            <p className={styles.event}>Qualcomm Edge AI Hackathon 2025</p>
                            <p className={styles.desc}>Selected from 2,000+ teams for edge inference detecting objects from satellite imagery on compute-constrained hardware.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.icon}>⚡</span>
                        <div className={styles.details}>
                            <h3 className={styles.title}>OpenAI Parameter Golf Submission</h3>
                            <p className={styles.event}>OpenAI Research Challenge 2026</p>
                            <p className={styles.desc}>PR #354: Trained 14.45MB model using 13-layer MLA, SmearGate, Muon, and mixed INT5/INT6 quantization (1.3559 val bpb).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
