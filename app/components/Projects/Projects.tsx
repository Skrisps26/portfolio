import styles from './Projects.module.css';

const projects = [
    {
        id: "01",
        title: "AI Website Builder",
        tech: ["AWS Lambda", "Bedrock", "Next.js"],
        points: [
            "Natural-language → React Code Pipeline.",
            "Automated CI/CD via S3 + CloudFront."
        ],
        year: "2025"
    },
    {
        id: "02",
        title: "Deepfake Detector",
        tech: ["PyTorch", "CNN", "Python"],
        points: [
            "98.5% Accuracy on Video Streams.",
            "Real-time processing < 200ms."
        ],
        year: "2025"
    },
    {
        id: "03",
        title: "CosmoMap AI",
        tech: ["YOLOv8", "FastAPI", "Leaflet"],
        points: [
            "Aerial Object Detection.",
            "Geospatial Visulization."
        ],
        year: "2025"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className={styles.heading}>Project_Archive_</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.meta}>
                                <span className={styles.year}>{project.year}</span>
                                <span className={styles.id}>{project.id}</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <div className={styles.tags}>
                                        {project.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                                    </div>
                                </div>
                                <ul className={styles.list}>
                                    {project.points.map((point, i) => (
                                        <li key={i} className={styles.text}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
