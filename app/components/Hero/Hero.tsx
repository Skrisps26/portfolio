import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.titleContainer}>
                    <span className={styles.greeting}>HELLO_WORLD.INIT()</span>
                    <h1 className={styles.title}>
                        <span className={styles.titleRow}>SAI</span>
                        <span className={styles.titleRow}>KRISHNA</span>
                    </h1>
                </div>

                <div className={styles.descriptionBox}>
                    <p className={styles.description}>
                        CS UNDERGRADUATE AT VIT CHENNAI BUILDING RELIABLE AI AND BACKEND SYSTEMS — FROM GPU-CONSTRAINED LLM INFERENCE TO HIGH-THROUGHPUT AUTOMATION.
                    </p>
                    <div className={styles.actions}>
                        <a href="#projects" className="btn btn-primary">VIEW_PROJECTS</a>
                        <a href="/Sai_Krishna_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">DOWNLOAD_CV</a>
                        <a href="#contact" className="btn">CONTACT_ME</a>
                    </div>
                </div>
            </div>

            <div className={styles.marqueeLine}>
                <span>/// AI/ML SYSTEMS /// BACKEND ARCHITECTURE /// LLM BENCHMARKING /// CLOUD ORCHESTRATION /// </span>
                <span>/// AI/ML SYSTEMS /// BACKEND ARCHITECTURE /// LLM BENCHMARKING /// CLOUD ORCHESTRATION /// </span>
                <span>/// AI/ML SYSTEMS /// BACKEND ARCHITECTURE /// LLM BENCHMARKING /// CLOUD ORCHESTRATION /// </span>
                <span>/// AI/ML SYSTEMS /// BACKEND ARCHITECTURE /// LLM BENCHMARKING /// CLOUD ORCHESTRATION /// </span>
            </div>
        </section>
    );
}
