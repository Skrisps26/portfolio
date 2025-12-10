import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <h2 className={styles.heading}>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>
                            I am a pre-final year Computer Science and Engineering student at Vellore Institute of Technology, Chennai.
                            My technical journey is driven by a passion for building scalable backend systems and exploring the potential of Artificial Intelligence.
                        </p>
                        <p>
                            Currently serving as a Tech Team Member at ACM-VIT Chennai, I have hands-on experience in delivering REST APIs,
                            optimizing deployment workflows, and leading agile engineering teams. I thrive in environments that challenge
                            me to optimize latency, ensure reliability, and design intuitive developer experiences.
                        </p>
                        <p>
                            When I'm not coding hackathon-winning projects or engineering deepfake detectors, I'm mentoring peers
                            in API design and Git workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
