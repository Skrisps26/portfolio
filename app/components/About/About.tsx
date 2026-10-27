import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <h2 className={styles.heading}>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>
                            I am a Computer Science & Engineering undergraduate at Vellore Institute of Technology (VIT), Chennai (Class of 2027 | CGPA: 8.22 / 10.0), actively seeking a six-month software / AI engineering internship starting January 2027.
                        </p>
                        <p>
                            As a Software Engineering Intern at CGI, I designed and deployed a Python automation platform on the Jira REST API that slashed timesheet collection effort by 80% and engineered an SLA escalation engine for 500+ active tickets that cut breaches by 60%.
                        </p>
                        <p>
                            In open-source ML research, I build and benchmark systems under tight real-world constraints: profiling Qwen3 LLM inference and GRPO reasoning RL across 448 attention heads on consumer GPUs (<a href="https://github.com/skrisps26/powerbench" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>PowerBench</a>), developing sub-millisecond cluster-routed semantic caches (<a href="https://github.com/skrisps26/nexus" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>NEXUS</a>), and training compressed language models under 16MB for OpenAI's Parameter Golf challenge.
                        </p>
                        <p>
                            My focus is high-agency engineering: bridging robust backend architecture (FastAPI, Docker, OOP design), modern AI/RL pipelines (PyTorch, LangGraph), and reliable cloud orchestration (AWS Lambda, Bedrock, Step Functions).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
