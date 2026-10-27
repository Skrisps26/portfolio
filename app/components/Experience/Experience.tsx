import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className={styles.heading}>System_Log</h2>

                <div className={styles.timeline}>
                    <div className={styles.item}>
                        <div className={styles.meta}>
                            <span className={styles.date}>JUN 2026 – JUL 2026</span>
                            <span className={styles.location}>Bengaluru, India</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h3 className={styles.role}>Software Engineering Intern</h3>
                                <div className={styles.company}>CGI</div>
                            </div>
                            <ul className={styles.list}>
                                <li>Built and deployed a Python automation platform on the Atlassian Jira REST API automating timesheet collection and submission — cut manual effort by 80%, saving 15+ analyst-hours weekly and eliminating manual reporting errors.</li>
                                <li>Designed an SLA monitoring and escalation engine with configurable threshold rules for 500+ active tickets, reducing SLA breaches by 60% and improving on-time resolution by 35%.</li>
                                <li>Applied object-oriented design to build modular Python packages for Jira issue lifecycle management (triage, assignment, transitions, closure) eliminating duplicate code.</li>
                                <li>Analyzed throughput, breach frequency, and sprint-velocity data to identify operational bottlenecks, cutting process cycle time by 25%.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.meta}>
                            <span className={styles.date}>2024 – 2026</span>
                            <span className={styles.location}>Chennai, India</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h3 className={styles.role}>Tech Team Member</h3>
                                <div className={styles.company}>ACM-VIT</div>
                            </div>
                            <ul className={styles.list}>
                                <li>Delivered 5+ REST APIs and internal developer tools in Python and C.</li>
                                <li>Engineered backend systems and automated deployment workflows.</li>
                                <li>Reduced new team onboarding time by 60% through API documentation restructuring and developer workflow guidelines.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
