import styles from './Projects.module.css';

interface Project {
    id: string;
    title: string;
    tech: string[];
    points: string[];
    year: string;
    link?: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "PowerBench — LLM & GRPO Benchmarks",
        tech: ["PyTorch", "Qwen3", "QLoRA", "GRPO", "CUDA"],
        points: [
            "Benchmarked LLM inference and GRPO reasoning RL training (Qwen3-0.6B, QLoRA rank-16) on consumer GPU (RTX 2050, 4GB VRAM), profiling latency, throughput, and power draw across FP16/INT8/INT4 precisions.",
            "Measured batch-1 inference latency: 3,061.50ms (FP16), 9,642.51ms (INT8), and 3,403.60ms (INT4). Scored 448 attention heads via TV-distance to identify reasoning-sensitive heads for pruning."
        ],
        year: "2026",
        link: "https://github.com/skrisps26/powerbench"
    },
    {
        id: "02",
        title: "NEXUS — Semantic Retrieval Cache",
        tech: ["Python", "HNSW", "SimHash", "Vector Embeddings", "FastAPI"],
        points: [
            "Built an in-process HNSW index and two-level SimHash & cluster-routed semantic cache for 18,000+ documents; routed lookups achieved 0.81ms vs. 1.51ms baseline (1.9× faster) with 0.11ms warm-cache p50.",
            "Implemented entropy-adaptive similarity thresholds improving cache classification F1 score by +56% (0.889 vs. 0.571 baseline) while preserving 0.8330 NDCG@10 retrieval quality."
        ],
        year: "2026",
        link: "https://github.com/Skrisps26/nexus"
    },
    {
        id: "03",
        title: "ChronosOps — Incident Intelligence",
        tech: ["FastAPI", "LangGraph", "FalkorDB", "Amazon Bedrock", "React"],
        points: [
            "Built a FastAPI and LangGraph triage and remediation workflow investigating simulated outages, querying service ownership topology, and proposing cost-bounded recovery actions.",
            "FalkorDB graph evidence and deterministic query contracts guard simulated actions with source citations and evidence-bound expiring approval records for human review."
        ],
        year: "2026",
        link: "https://github.com/Skrisps26/chronosops"
    },
    {
        id: "04",
        title: "Parameter Golf — OpenAI Model Challenge",
        tech: ["PyTorch", "Quantization", "MLA", "Muon", "FineWeb"],
        points: [
            "Trained a compressed GPT-style language model under a 16MB compressed artifact constraint scored via FineWeb validation bits-per-byte.",
            "Submitted PR #354 utilizing 13-layer MLA, SmearGate, BigramHash, Muon optimizer, and mixed INT5/INT6 quantization: 14.449MB artifact, 1.2838 pre-quant and 1.3559 post-quant validation bpb."
        ],
        year: "2026",
        link: "https://github.com/openai/parameter-golf/pull/354"
    },
    {
        id: "05",
        title: "Prompt2Deploy — Serverless NL-to-React",
        tech: ["AWS Lambda", "Amazon Bedrock", "Step Functions", "Next.js", "Docker"],
        points: [
            "Architected an end-to-end natural-language-to-React platform orchestrating Bedrock prompt ingestion, code generation, artifact packaging, CI execution, and CloudFront preview deployment.",
            "Coordinated multi-stage state machines in AWS Step Functions with retry-aware fault handling, ensuring deterministic artifact deployment from generative requests."
        ],
        year: "2025",
        link: "https://github.com/Skrisps26/website_builder"
    },
    {
        id: "06",
        title: "Project Edge — IoT Anomaly Detection",
        tech: ["Raspberry Pi", "TFLite", "Mosquitto MQTT", "FastAPI", "Docker", "Leaflet"],
        points: [
            "Engineered a distributed edge-to-cloud IoT pipeline detecting road anomalies in real time on Raspberry Pi using TFLite inference and streaming telemetry over Mosquitto MQTT.",
            "Built Dockerized fog service with FastAPI, LocalStack (S3/DynamoDB), and OwnTracks GPS integration to deduplicate and geotag anomalies on an interactive Leaflet dashboard."
        ],
        year: "2026",
        link: "https://github.com/Skrisps26/project_edge"
    },
    {
        id: "07",
        title: "Predictive Neural Radiance Caching",
        tech: ["PyTorch", "Hash Grids", "CUDA", "Neural Rendering", "Python"],
        points: [
            "Reframed global illumination as spatial regression with a shallow MLP and multi-resolution hash grid encoding; reduced average frame time from ~26ms to ~11ms (~60 FPS on GPU).",
            "Implemented predictive camera lookahead training signal and uncertainty-aware Gaussian NLL loss, enabling adaptive ray tracing fallback at shadow boundaries."
        ],
        year: "2026",
        link: "https://github.com/skrisps26/neural_ray_tracer"
    },
    {
        id: "08",
        title: "ClearClass — Decision Support Assistant",
        tech: ["Python", "AWS Lambda", "Strands", "Amazon Bedrock", "Cedar", "Next.js"],
        points: [
            "Engineered a school decision-support app combining air-quality forecasts, Cedar deterministic policy evaluation, and physical ventilation estimates with tool-grounded conversational AI.",
            "Separated deterministic policy verdicts and physical models from Bedrock generative explanations, providing verifiable source citations and explicit limitations."
        ],
        year: "2026",
        link: "https://github.com/Skrisps26/clearclass"
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
                                    <div className={styles.titleRow}>
                                        <h3 className={styles.title}>{project.title}</h3>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.linkButton}
                                                aria-label={`View ${project.title} repository`}
                                            >
                                                VIEW_SRC ↗
                                            </a>
                                        )}
                                    </div>
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
