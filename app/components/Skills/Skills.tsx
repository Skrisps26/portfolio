import styles from './Skills.module.css';

const skills = {
    "Languages": ["JavaScript", "Python", "C", "C++", "Golang", "SQL"],
    "Frameworks": ["React", "Node.js", "Express", "Django", "FastAPI"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
    "AI/ML": ["PyTorch", "NumPy", "Pandas", "OpenCV"],
    "DevOps/MLOps": ["Git", "Docker", "Linux", "MLflow", "DVC", "AWS", "Azure"]
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
