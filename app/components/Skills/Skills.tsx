import styles from './Skills.module.css';

const skills = {
    "AI/ML & Systems": ["PyTorch", "CUDA", "GRPO RL", "QLoRA", "Transformers", "TFLite", "Ollama", "LangGraph", "HNSW", "SimHash", "OpenCV"],
    "Backend & APIs": ["Python", "FastAPI", "Django", "Node.js", "Express", "REST API Design", "Jira REST API", "Pytest", "Jest"],
    "Cloud & DevOps": ["AWS Lambda", "Amazon Bedrock", "AWS Step Functions", "AWS S3 / DynamoDB", "Docker", "LocalStack", "GitHub Actions", "Linux"],
    "Databases & Storage": ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "ChromaDB", "FalkorDB", "Supabase"],
    "Languages": ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL", "Bash", "Golang"]
};

export default function Skills() {
    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <div className="container">
                <h2 className={styles.heading}>Tech_Stack_Db</h2>
                <div className={styles.grid}>
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className={styles.column}>
                            <h3 className={styles.categoryTitle}>{category}</h3>
                            <div className={styles.list}>
                                {items.map(skill => (
                                    <span key={skill} className={styles.skillItem}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
