import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <h2 className={styles.heading}>Get In Touch</h2>
                <div className={styles.layout}>
                    <div className={styles.info}>
                        <p className={styles.text}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <div className={styles.links}>
                            <a href="mailto:saikris.dev@gmail.com" className={styles.link}>Email</a>
                            <a href="https://linkedin.com/in/Saik26" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                            <a href="https://github.com/Skrisps26" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
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
