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
    },
    {
        id: "04",
        title: "Neural Global Illumination Engine",
        tech: ["PyTorch", "MLP", "Ray Tracing", "CUDA"],
        points: [
            "Reframed Global Illumination as a regression task — MLP predicts radiance instead of ray-tracing.",
            "Brought per-frame compute from 26ms to 11ms with +4.1dB PSNR improvement. 60+ FPS with dynamic lighting."
        ],
        year: "2025"
    },
    {
        id: "05",
        title: "PowerBench-Consumer",
        tech: ["PyTorch", "TRL", "GRPO", "LLaMA"],
        points: [
            "Benchmarked LLM inference and GRPO training on RTX 2050 (4GB VRAM), extending DREAM:Lab's Jetson Orin AGX methodology.",
            "Key finding: INT8 inference is ~3x slower than FP16 on consumer GPUs — quantization gains are not portable across architectures."
        ],
        year: "2025"
    },
    {
        id: "06",
        title: "NEXUS — Neural Embedding Search",
        tech: ["Python", "HNSW", "SimHash", "FastAPI"],
        points: [
            "Semantic search with soft cluster assignments, entropy-adaptive cache thresholds, and two-level caching.",
            "In-process HNSW for sub-linear lookup with full research-style write-up on trade-offs and failure modes."
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
