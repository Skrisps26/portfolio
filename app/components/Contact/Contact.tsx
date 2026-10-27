import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <h2 className={styles.heading}>Get In Touch</h2>
                <div className={styles.layout}>
                    <div className={styles.info}>
                        <p className={styles.text}>
                            Available for a 6-month Winter/Spring Internship / Co-op starting January 2027 (Pre-placement leading to New Grad 2027). Open to software engineering, backend systems, and AI/ML infrastructure roles.
                        </p>
                        <div className={styles.links}>
                            <a href="mailto:saikris.dev@gmail.com" className={styles.link}>Email</a>
                            <a href="https://linkedin.com/in/saik26" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                            <a href="https://github.com/skrisps26" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                            <a href="/Sai_Krishna_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Resume_PDF</a>
                        </div>
                    </div>
                    <form
                        className={styles.form}
                        action="https://formspree.io/f/xldqpavo"
                        method="POST"
                    >
                        <div className={styles.group}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.group}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.group}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                className={styles.textarea}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn">INITIATE_HANDSHAKE</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
