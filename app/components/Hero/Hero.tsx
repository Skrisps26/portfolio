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
                        A COMPUTER SCIENCE ENGINEER OBSESSED WITH BUILDING SCALABLE SYSTEMS AND BREAKING DESIGN NORMS.
                    </p>
                    <div className={styles.actions}>
                        <a href="#projects" className="btn btn-primary">VIEW_PROJECTS</a>
                        <a href="#contact" className="btn">CONTACT_ME</a>
                    </div>
                </div>
            </div>

            <div className={styles.marqueeLine}>
                <span>/// FULL STACK DEVELOPER /// AI ENGINEER /// SYSTEM ARCHITECT /// CREATIVE CODER /// </span>
                <span>/// FULL STACK DEVELOPER /// AI ENGINEER /// SYSTEM ARCHITECT /// CREATIVE CODER /// </span>
                <span>/// FULL STACK DEVELOPER /// AI ENGINEER /// SYSTEM ARCHITECT /// CREATIVE CODER /// </span>
                <span>/// FULL STACK DEVELOPER /// AI ENGINEER /// SYSTEM ARCHITECT /// CREATIVE CODER /// </span>
            </div>
        </section>
    );
}
