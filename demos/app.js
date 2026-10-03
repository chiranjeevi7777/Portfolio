/**
 * Chiranjeevi R - Project Showcases & Interactive Demo Engine
 * Manages 20 repository data structures, interactive domain simulators,
 * architecture flow renderers, and deep-link routing.
 */

const GITHUB_USERNAME = "chiranjeevi7777";
const REPO_BASE = `https://github.com/${GITHUB_USERNAME}`;

// ===================================================================
// Complete Database of 20 Projects
// ===================================================================
const PROJECTS = [
  {
    id: "cardiovision-ai",
    name: "CardioVision-AI",
    repo: "CardioVision-AI",
    category: "Vision & Deep Learning",
    badge: "InceptionV3 Ensemble Stacking",
    headline: "AI Diagnostic System for Congenital Heart Disease (CHD) from Chest X-Rays",
    description: "An advanced deep learning diagnostic system that classifies Congenital Heart Diseases (such as ASD, VSD, and Tetralogy of Fallot) from pediatric chest radiographs. Utilizes an InceptionV3 convolutional neural network for feature extraction combined with a classical ensemble stacking classifier (XGBoost, Random Forest, and SVM meta-learner) to maximize diagnostic sensitivity.",
    tech: ["Python", "TensorFlow", "InceptionV3", "XGBoost", "OpenCV", "Streamlit", "Scikit-Learn"],
    metrics: [
      { label: "Overall Accuracy", value: "96.4%" },
      { label: "CHD Sensitivity", value: "97.8%" },
      { label: "Inference Latency", value: "84ms" },
      { label: "Ensemble Models", value: "4 Stacked" }
    ],
    simulatorType: "cardiovision",
    pipeline: [
      { step: "01", icon: "📷", title: "Image Ingestion", tech: "OpenCV", desc: "Radiograph upload, CLAHE contrast enhancement & 299x299 normalization" },
      { step: "02", icon: "🧠", title: "Feature Extraction", tech: "InceptionV3 CNN", desc: "Pre-trained deep backbone extracting 2048-dimensional morphological feature vectors" },
      { step: "03", icon: "⚡", title: "Ensemble Stacking", tech: "XGBoost + RF + SVM", desc: "Meta-learner stacking base models to evaluate cardiomegaly & vascular patterns" },
      { step: "04", icon: "📊", title: "Diagnostic Output", tech: "Grad-CAM + Streamlit", desc: "Class probabilities, confidence scores, and visual attention heatmaps" }
    ],
    deepDive: `
      <h4>Ensemble Stacking vs Single-Model Architecture</h4>
      <p>While standalone deep CNNs can achieve acceptable accuracy on chest radiographs, pediatric Congenital Heart Disease presents subtle radiographic markers—such as mild cardiac enlargement, abnormal aortic knobs, and pulmonary vascular engorgement—that single models frequently misclassify.</p>
      <p>CardioVision-AI solves this through a two-stage hybrid design: <strong>InceptionV3</strong> acts strictly as a high-dimensional morphological feature extractor, freezing deep layers. These features are then fed into a meta-learner ensemble combining <strong>XGBoost</strong> (for non-linear boundary segmentation), <strong>Random Forest</strong> (for variance reduction), and <strong>Support Vector Machines</strong> with RBF kernels. This raises diagnostic sensitivity to <strong>97.8%</strong> on clinical validation sets.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/v1/diagnose",
        desc: "Analyzes uploaded pediatric chest radiograph and returns classification probabilities and attention maps.",
        request: `{
  "image_base64": "/9j/4AAQSkZJRgABAQAAAQ...",
  "patient_age_months": 14,
  "generate_gradcam": true
}`,
        response: `{
  "status": "success",
  "prediction": "Ventricular Septal Defect (VSD)",
  "confidence": 0.948,
  "latency_ms": 84.2,
  "probabilities": {
    "VSD": 0.948,
    "ASD": 0.032,
    "Normal": 0.016,
    "Tetralogy of Fallot": 0.004
  },
  "heatmap_url": "/heatmaps/gradcam_vsd_8923.png"
}`
      }
    ],
    coreFiles: [
      { path: "src/model.py", desc: "InceptionV3 backbone & ensemble stacking implementation" },
      { path: "src/gradcam.py", desc: "Grad-CAM visual attribution generator" },
      { path: "app.py", desc: "Streamlit clinical interactive dashboard" },
      { path: "requirements.txt", desc: "TensorFlow, XGBoost, and OpenCV dependencies" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/CardioVision-AI.git
cd CardioVision-AI
pip install -r requirements.txt
streamlit run app.py`
  },
  {
    id: "enterprise-knowledge-intelligence",
    name: "Enterprise-Knowledge-Intelligence",
    repo: "Enterprise-Knowledge-Intelligence",
    category: "GenAI & RAG",
    badge: "Amazon Bedrock + ChromaDB",
    headline: "AI-Powered RAG Platform for Enterprise ERP Knowledge Discovery",
    description: "Enterprise knowledge platform built for ERP systems (SAP, Oracle, Workday). Solves technical documentation navigation through semantic acronym resolution, ChromaDB hybrid vector retrieval, and Amazon Bedrock Claude-powered conversational reasoning with verified document citations.",
    tech: ["Python", "FastAPI", "Amazon Bedrock", "Claude", "ChromaDB", "LangChain", "SentenceTransformers"],
    metrics: [
      { label: "Search Accuracy", value: "93.8%" },
      { label: "Doc Lookup Reduction", value: "35%" },
      { label: "Retrieval Latency", value: "142ms" },
      { label: "Chunk Precision", value: "Top-3 (0.91)" }
    ],
    simulatorType: "enterprise_rag",
    pipeline: [
      { step: "01", icon: "🔍", title: "Query Processing", tech: "NLP / Spacy", desc: "Detects enterprise acronyms (GR/IR, PO, ME21N) and expands domain context" },
      { step: "02", icon: "🗄️", title: "Vector Retrieval", tech: "ChromaDB", desc: "Retrieves top-k dense semantic chunks embedded with SentenceTransformers" },
      { step: "03", icon: "⚖️", title: "Reranking & Filtering", tech: "Cross-Encoder", desc: "Scores context chunks by relevance, discarding irrelevant ERP noise" },
      { step: "04", icon: "🤖", title: "Bedrock Claude Gen", tech: "AWS Bedrock Claude", desc: "Synthesizes step-by-step resolution referencing exact ERP manual sections" }
    ],
    deepDive: `
      <h4>Handling Domain Acronyms in Enterprise Search</h4>
      <p>Standard dense embedding models often struggle with enterprise-specific vocabulary and abbreviations like <em>GR/IR</em> (Goods Receipt / Invoice Receipt), <em>PO</em> (Purchase Order), or specific SAP transaction codes (<em>ME21N</em>, <em>MIRO</em>).</p>
      <p>This platform implements a <strong>Semantic Acronym Resolution Layer</strong> that intercepts queries, identifies ERP domain tokens against an active corporate ontology, expands them into canonical technical semantics, and executes hybrid dense-sparse vector search in <strong>ChromaDB</strong>. The contextual payload is then passed to <strong>Amazon Bedrock Claude</strong> with grounded citation prompts.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/v1/rag/query",
        desc: "Executes enterprise RAG retrieval and returns structured answer with source citations.",
        request: `{
  "query": "How do I resolve a GR/IR clearing difference in SAP MIRO?",
  "department": "Supply Chain & Finance",
  "top_k": 3
}`,
        response: `{
  "query": "How do I resolve a GR/IR clearing difference in SAP MIRO?",
  "resolved_acronyms": ["GR/IR: Goods Receipt / Invoice Receipt", "MIRO: Enter Incoming Invoice"],
  "answer": "To resolve a GR/IR clearing difference in SAP MIRO: 1. Verify if the goods receipt quantity matches the invoice quantity in transaction MR11. 2. Post a manual write-off if difference is within variance tolerances...",
  "citations": [
    { "doc": "SAP_S4HANA_Finance_Guide_v3.pdf", "section": "Section 12.4: GR/IR Reconciliation", "score": 0.912 },
    { "doc": "Procure_To_Pay_SOP.docx", "section": "Exception Handling", "score": 0.865 }
  ],
  "latency_ms": 138.5
}`
      }
    ],
    coreFiles: [
      { path: "app/main.py", desc: "FastAPI application entry point & CORS configuration" },
      { path: "app/rag/pipeline.py", desc: "LangChain & ChromaDB retrieval chain with Bedrock" },
      { path: "app/rag/acronym_engine.py", desc: "Domain vocabulary detection and query expander" },
      { path: "docker-compose.yml", desc: "Containerized deployment config for ChromaDB & API" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/Enterprise-Knowledge-Intelligence.git
cd Enterprise-Knowledge-Intelligence
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload`
  },
  {
    id: "careeros",
    name: "CareerOs",
    repo: "CareerOs",
    category: "Full Stack & Web",
    badge: "React + FastAPI + PydanticAI",
    headline: "AI-Powered Career Operating System with Offline Privacy",
    description: "An all-in-one AI career copilot to track job applications, run mock interview simulations, practice data structures and algorithms, and tailor resumes using local PydanticAI agents. Features a modular Domain-Driven Design (DDD) architecture that operates without external API keys.",
    tech: ["React", "FastAPI", "PydanticAI", "Python", "TypeScript", "SQLite"],
    metrics: [
      { label: "Data Privacy", value: "100% Local" },
      { label: "API Key Required", value: "None (Offline)" },
      { label: "Architecture", value: "Modular DDD" },
      { label: "Frontend", value: "React + TS" }
    ],
    simulatorType: "careeros",
    pipeline: [
      { step: "01", icon: "📋", title: "Application Kanban", tech: "React / State", desc: "Visual pipeline tracking job applications across interview stages" },
      { step: "02", icon: "🎙️", title: "Mock Interviewer", tech: "PydanticAI", desc: "Contextual role prompts evaluating technical explanations & STAR responses" },
      { step: "03", icon: "✨", title: "Resume Tailor", tech: "FastAPI Agent", desc: "Transforms raw experiences into high-impact Google XYZ bullet points" },
      { step: "04", icon: "🔒", title: "Local Persistence", tech: "SQLite / IndexedDB", desc: "Zero telemetry and complete user privacy without cloud dependencies" }
    ],
    deepDive: `
      <h4>Offline-First AI Engineering with PydanticAI</h4>
      <p>Modern job seekers are forced to paste sensitive resumes and personal work histories into third-party cloud services. CareerOs was architected as an <strong>offline-first</strong> solution.</p>
      <p>Using <strong>FastAPI</strong> and <strong>PydanticAI</strong>, local agent structures enforce strict type validation and structured schema extraction. The client is a responsive <strong>React</strong> interface that communicates over local IPC/HTTP, storing all state in local SQLite databases.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/interview/evaluate",
        desc: "Evaluates user interview answer against question criteria using structured Pydantic schemas.",
        request: `{
  "question": "Explain how you optimize database queries under high concurrency.",
  "user_answer": "I use composite indexes on frequently filtered columns, connection pooling, and read replicas.",
  "role": "Senior Backend Engineer"
}`,
        response: `{
  "clarity_score": 9.2,
  "technical_depth": 8.5,
  "feedback": "Strong answer covering indexing and replication. Consider mentioning query explain plans and Redis caching.",
  "follow_up_prompt": "What metrics would you monitor in pg_stat_activity to detect connection bottlenecks?"
}`
      }
    ],
    coreFiles: [
      { path: "frontend/src/App.tsx", desc: "React single page application dashboard" },
      { path: "backend/app/agents/interview_agent.py", desc: "PydanticAI mock interview evaluator" },
      { path: "backend/app/agents/resume_tailor.py", desc: "Resume transformation and keyword matcher" },
      { path: "backend/app/main.py", desc: "FastAPI server and route orchestration" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/CareerOs.git
cd CareerOs
# Backend
cd backend && pip install -r requirements.txt && uvicorn app.main:app --port 8000
# Frontend (in another terminal)
cd frontend && npm install && npm run dev`
  },
  {
    id: "scholarguard-ai",
    name: "ScholarGuard-AI",
    repo: "ScholarGuard-AI",
    category: "GenAI & RAG",
    badge: "RAG Academic Integrity Platform",
    headline: "Multi-Source Academic Plagiarism & AI-Generated Text Detector",
    description: "An academic integrity platform utilizing retrieval-augmented semantic search to detect verbatim plagiarism, paraphrased literature, and synthetic AI-generated content patterns. Provides sentence-level heatmaps and explainable attribution reports.",
    tech: ["Python", "LangChain", "SentenceTransformers", "ChromaDB", "FastAPI", "Scikit-Learn"],
    metrics: [
      { label: "Detection Precision", value: "94.2%" },
      { label: "Scan Time (5k words)", value: "3.4s" },
      { label: "Semantic Index", value: "Dense Vector" },
      { label: "Explainability", value: "Sentence Diff" }
    ],
    simulatorType: "scholarguard",
    pipeline: [
      { step: "01", icon: "📄", title: "Document Chunker", tech: "LangChain", desc: "Sentence-boundary tokenization preserving semantic paragraph context" },
      { step: "02", icon: "🌐", title: "Corpus Matching", tech: "ChromaDB / Crossref", desc: "Dense semantic similarity search against millions of academic publications" },
      { step: "03", icon: "📉", title: "Stylometric Analysis", tech: "Perplexity / Burstiness", desc: "Calculates token entropy to flag automated LLM-generated sentences" },
      { step: "04", icon: "📑", title: "Integrity Report", tech: "FastAPI Reporter", desc: "Interactive highlighted diff report with originality percentage gauge" }
    ],
    deepDive: `
      <h4>Overcoming Paraphrasing Evasion</h4>
      <p>Traditional plagiarism tools rely on n-gram fingerprinting, which fails when users rewrite sentences using synonyms or AI paraphrasers.</p>
      <p>ScholarGuard-AI calculates <strong>cross-encoder cosine distance</strong> over dense embeddings generated by <em>all-MiniLM-L6-v2</em>, identifying high-confidence conceptual overlap regardless of vocabulary substitution. Concurrently, it checks <strong>perplexity variance</strong> to identify robotic, uniform synthetic cadence.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/v1/integrity/check",
        desc: "Scans submission text for semantic plagiarism and AI text probability.",
        request: `{
  "text": "Deep residual learning frameworks ease the training of networks that are substantially deeper than those used previously.",
  "sensitivity": "high"
}`,
        response: `{
  "originality_score": 12.0,
  "plagiarism_detected": true,
  "ai_likelihood_score": 28.5,
  "matches": [
    {
      "source_title": "Deep Residual Learning for Image Recognition (He et al., 2015)",
      "similarity": 0.985,
      "exact_overlap_tokens": 17
    }
  ]
}`
      }
    ],
    coreFiles: [
      { path: "src/detector.py", desc: "Semantic similarity and cross-encoder logic" },
      { path: "src/ai_scanner.py", desc: "Perplexity and burstiness calculator" },
      { path: "src/api.py", desc: "FastAPI REST API routes and schemas" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/ScholarGuard-AI.git
cd ScholarGuard-AI
pip install -r requirements.txt
uvicorn src.api:app --reload`
  },
  {
    id: "gitquest",
    name: "GitQuest",
    repo: "GitQuest",
    category: "Frontend & Web",
    badge: "Cyberpunk React Adventure",
    headline: "Immersive Cyberpunk Adventure Game to Master Git & GitHub",
    description: "A gamified interactive terminal game built with React, TypeScript, Vite, TailwindCSS, and Framer Motion. Players restore corrupted cyber-networks by executing real Git commands, solving merge conflicts, and branching strategies.",
    tech: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"],
    metrics: [
      { label: "Interactive Commands", value: "Real Git Parser" },
      { label: "UI Theme", value: "Cyberpunk Glow" },
      { label: "Deployment", value: "Vercel / Pages" },
      { label: "Zero Backend", value: "100% Client-Side" }
    ],
    simulatorType: "gitquest",
    pipeline: [
      { step: "01", icon: "🕹️", title: "Game Engine", tech: "React / State Machine", desc: "Tracks player progress, mission stages, and terminal output history" },
      { step: "02", icon: "💻", title: "Virtual Git Tree", tech: "Virtual FS", desc: "Simulates commits, branches, HEAD pointer, and staging area in memory" },
      { step: "03", icon: "⚡", title: "Command Lexer", tech: "TypeScript Parser", desc: "Parses arguments, flags (-m, -b), and validates execution syntax" },
      { step: "04", icon: "🎆", title: "Visual Feedback", tech: "Framer Motion", desc: "Interactive neon particle animations and storyline unlock cinematics" }
    ],
    deepDive: `
      <h4>Simulating a Real Git Tree in Pure TypeScript</h4>
      <p>Rather than simply regex-matching strings, GitQuest models a directed acyclic graph (DAG) representing Git commits, references, and the staging area directly in client memory. When a user runs <code>git commit -m "fix"</code>, a cryptographic hash is generated, the tree node is linked to HEAD, and the cyber-terminal updates dynamically.</p>
    `,
    apiEndpoints: [
      {
        method: "GET",
        path: "/virtual-fs/tree",
        desc: "Returns current in-memory Git DAG state for visualization.",
        request: `// Client-side pure TypeScript call`,
        response: `{
  "current_branch": "main",
  "head": "c7a8291",
  "staged_files": [],
  "history": [
    { "hash": "c7a8291", "message": "patch: bypass security grid", "author": "Player" }
  ]
}`
      }
    ],
    coreFiles: [
      { path: "src/components/Terminal.tsx", desc: "Interactive terminal shell emulator" },
      { path: "src/engine/gitEngine.ts", desc: "In-memory Git tree data structure and parser" },
      { path: "src/data/missions.ts", desc: "Storyline quests and unlock conditions" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/GitQuest.git
cd GitQuest
npm install
npm run dev`
  },
  {
    id: "hirepilot-ai",
    name: "hirepilot-ai",
    repo: "hirepilot-ai",
    category: "GenAI & RAG",
    badge: "CAG Resume & JD Optimization",
    headline: "Intelligent Resume + Job Description Optimization Agent",
    description: "An automated career enhancement suite powered by Context-Augmented Generation (CAG) and async FastAPI. Ingests candidate resumes, cross-analyzes targeted job descriptions, calculates contextual match score, and generates high-impact bullet point enhancements.",
    tech: ["Python", "FastAPI", "CAG", "Pydantic", "OpenAI / Claude", "Docker"],
    metrics: [
      { label: "CAG Optimization", value: "Zero Fine-Tune" },
      { label: "Match Precision", value: "91.5%" },
      { label: "Processing Speed", value: "1.8s" },
      { label: "Format Support", value: "PDF & DOCX" }
    ],
    simulatorType: "hirepilot",
    pipeline: [
      { step: "01", icon: "📑", title: "Resume Parsing", tech: "PDFMiner / Docx", desc: "Extracts structured work history, technical proficiencies, and metrics" },
      { step: "02", icon: "🎯", title: "JD Keyword Vectorization", tech: "Spacy / Embeddings", desc: "Identifies core hard requirements, qualifications, and seniority tiers" },
      { step: "03", icon: "🔄", title: "Context-Augmented Gen", tech: "FastAPI / CAG", desc: "Aligns candidate achievements directly to employer pain points" },
      { step: "04", icon: "📈", title: "Diff Enhancer", tech: "Pydantic Schema", desc: "Produces quantitative XYZ bullet transformations with match delta" }
    ],
    deepDive: `
      <h4>Context-Augmented Generation (CAG) vs Traditional RAG</h4>
      <p>While RAG chunks and searches large external repositories, CAG loads the full target context (the entire candidate CV and target JD) into an ultra-low latency context window with strict constraints. This prevents chunk fragmentation errors and enables whole-profile synthesis.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/v1/optimize-resume",
        desc: "Generates JD match score and rewritten accomplishment bullets.",
        request: `{
  "resume_text": "Built a backend service with Python and PostgreSQL.",
  "target_jd": "Looking for a Senior Python Engineer with experience in FastAPI, high-load PostgreSQL, and Redis caching."
}`,
        response: `{
  "match_score": 74.0,
  "missing_keywords": ["FastAPI", "Redis caching", "High concurrency"],
  "optimized_bullets": [
    {
      "original": "Built a backend service with Python and PostgreSQL.",
      "enhanced": "Architected high-throughput REST APIs using FastAPI and PostgreSQL with Redis caching, supporting 10k+ concurrent requests."
    }
  ]
}`
      }
    ],
    coreFiles: [
      { path: "app/main.py", desc: "FastAPI async server configuration" },
      { path: "app/services/cag_engine.py", desc: "Context-Augmented Generation optimization agent" },
      { path: "app/models/schemas.py", desc: "Pydantic request & response models" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/hirepilot-ai.git
cd hirepilot-ai
pip install -r requirements.txt
uvicorn app.main:app --reload`
  },
  {
    id: "booksense-ml",
    name: "BookSense-ML",
    repo: "BookSense-ML",
    category: "Machine Learning",
    badge: "TF-IDF + Cosine Similarity",
    headline: "Machine Learning Book Recommendation System & Web App",
    description: "An intuitive content-based recommendation engine that suggests books using natural language metadata filtering, TF-IDF vectorization, and cosine similarity. Features an interactive Streamlit user interface.",
    tech: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "TF-IDF", "NumPy"],
    metrics: [
      { label: "Catalog Size", value: "10,000+ Books" },
      { label: "Search Latency", value: "12ms" },
      { label: "Vector Algorithm", value: "Cosine Similarity" },
      { label: "Interface", value: "Streamlit" }
    ],
    simulatorType: "booksense",
    pipeline: [
      { step: "01", icon: "📚", title: "Dataset Ingestion", tech: "Pandas", desc: "Ingests book descriptions, genres, author tags, and review scores" },
      { step: "02", icon: "✂️", title: "Text Preprocessing", tech: "NLTK", desc: "Tokenization, stopword elimination, and lemmatization of plot summaries" },
      { step: "03", icon: "📐", title: "TF-IDF Matrix", tech: "Scikit-Learn", desc: "Builds high-dimensional sparse term frequency-inverse document frequency matrix" },
      { step: "04", icon: "🎯", title: "Cosine Ranking", tech: "NumPy", desc: "Computes dot-product cosine distances to output top-k similar books" }
    ],
    deepDive: `
      <h4>Vector Space Model for Content Filtering</h4>
      <p>BookSense-ML constructs an n-gram TF-IDF matrix where each book plot summary occupies a vector coordinate. By evaluating the cosine of the angle between query and candidate vectors, recommendations maintain thematic affinity without requiring collaborative user ratings.</p>
    `,
    apiEndpoints: [
      {
        method: "GET",
        path: "/api/recommend",
        desc: "Returns top-N recommended books given a seed title.",
        request: `GET /api/recommend?title=Dune&top_k=4`,
        response: `{
  "seed_title": "Dune",
  "author": "Frank Herbert",
  "recommendations": [
    { "title": "Foundation", "author": "Isaac Asimov", "similarity": 0.892, "genre": "Sci-Fi" },
    { "title": "Hyperion", "author": "Dan Simmons", "similarity": 0.865, "genre": "Sci-Fi" },
    { "title": "Neuromancer", "author": "William Gibson", "similarity": 0.821, "genre": "Cyberpunk" }
  ]
}`
      }
    ],
    coreFiles: [
      { path: "app.py", desc: "Streamlit interactive web dashboard" },
      { path: "recommender.py", desc: "TF-IDF vectorizer and cosine similarity calculation" },
      { path: "data/books.csv", desc: "Curated dataset of book titles and synopses" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/BookSense-ML.git
cd BookSense-ML
pip install -r requirements.txt
streamlit run app.py`
  },
  {
    id: "knowledgevault-ai",
    name: "KnowledgeVault-AI",
    repo: "KnowledgeVault-AI",
    category: "GenAI & RAG",
    badge: "Box + Whisper + Bedrock",
    headline: "Enterprise Multimodal Knowledge Ingestion & Audio QA Platform",
    description: "Ingests corporate Box cloud storage documents and audio/video meetings, transcribes speech with OpenAI Whisper, embeds content into ChromaDB, and performs conversational QA using Amazon Bedrock Claude.",
    tech: ["TypeScript", "Node.js", "Python", "Whisper", "ChromaDB", "AWS Bedrock", "Docker"],
    metrics: [
      { label: "Multimodal Support", value: "Audio, Video & PDF" },
      { label: "Transcription", value: "Whisper ASR" },
      { label: "Vector Store", value: "ChromaDB" },
      { label: "LLM Engine", value: "Bedrock Claude" }
    ],
    simulatorType: "knowledgevault",
    pipeline: [
      { step: "01", icon: "📦", title: "Box Ingestion", tech: "Box API Webhooks", desc: "Syncs meeting recordings, whitepapers, and operational transcripts" },
      { step: "02", icon: "🎙️", title: "Speech-To-Text", tech: "OpenAI Whisper", desc: "Transcribes audio tracks into timestamped multi-speaker text chunks" },
      { step: "03", icon: "🗄️", title: "Vector Indexing", tech: "ChromaDB", desc: "Stores multimodal text embeddings for semantic nearest-neighbor lookup" },
      { step: "04", icon: "💡", title: "Bedrock Synthesis", tech: "AWS Bedrock", desc: "Synthesizes precise answers with clickable audio timestamp links" }
    ],
    deepDive: `
      <h4>Audio-to-Vector Multimodal Pipelines</h4>
      <p>KnowledgeVault-AI bridges unstructured meeting recordings with enterprise search. Meetings uploaded to Box trigger async workers running Whisper. Text timestamps are embedded alongside speaker identifiers in ChromaDB, enabling queries like <em>'What did the team decide regarding database migrations in Monday's meeting?'</em> to cite the exact minute mark.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/v1/vault/ask",
        desc: "Queries ingested documents and meeting transcripts.",
        request: `{
  "query": "What was the decision on Redis vs Memcached in the sprint review?",
  "source_filter": "audio_meetings"
}`,
        response: `{
  "answer": "The team decided to adopt Redis because of its built-in persistence and pub/sub capabilities.",
  "source": "Meeting_Recordings/Sprint_42_Architecture.mp4",
  "timestamp": "00:18:42",
  "similarity": 0.934
}`
      }
    ],
    coreFiles: [
      { path: "src/ingest/boxListener.ts", desc: "Box webhook handler and file stream download" },
      { path: "src/transcribe/whisperWorker.py", desc: "Whisper ASR pipeline with timestamp segmentation" },
      { path: "src/rag/bedrockClient.ts", desc: "AWS Bedrock Claude streaming invocation" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/KnowledgeVault-AI.git
cd KnowledgeVault-AI
npm install
npm run start`
  },
  {
    id: "terminal-skill-craft",
    name: "terminal-skill-craft",
    repo: "terminal-skill-craft",
    category: "Tools & Agent Systems",
    badge: "Agent Ruleset Constructor & Linter",
    headline: "Terminal Dashboard for Constructing & Linting Custom AI Agent Skills",
    description: "An interactive, terminal-themed dashboard for constructing, editing, linting, and registering custom rulesets (skills) for agentic AI coders. Features live AST validation, schema linting, and automated skill manifest compilation.",
    tech: ["TypeScript", "React", "TailwindCSS", "Agent Rules Engine", "Vite"],
    metrics: [
      { label: "AST Validation", value: "Real-time" },
      { label: "Theme", value: "Retro Terminal" },
      { label: "Agent Output", value: "SKILL.md & YAML" },
      { label: "Architecture", value: "Client-Side" }
    ],
    simulatorType: "terminal_craft",
    pipeline: [
      { step: "01", icon: "⌨️", title: "Skill Editor", tech: "Monaco / React", desc: "Monospaced editor for crafting YAML frontmatter and markdown instructions" },
      { step: "02", icon: "🛡️", title: "Schema Linter", tech: "TypeScript AST", desc: "Validates required fields: name, description, triggers, and allowed tools" },
      { step: "03", icon: "📦", title: "Manifest Packager", tech: "JSON Compiler", desc: "Compiles rules into Antigravity & AI agent skill directories" }
    ],
    deepDive: `
      <h4>Deterministic Tool Calling for AI Coders</h4>
      <p>Poorly formatted skill rules cause AI agents to hallucinate non-existent tools. Terminal Skill Craft enforces compile-time schema checking, ensuring every custom skill includes compliant frontmatter and valid execution constraints.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/skills/validate",
        desc: "Validates skill schema and returns lint diagnostics.",
        request: `{
  "skill_name": "pytest-expert",
  "content": "---\\nname: pytest-expert\\ndescription: Unit testing guide\\n---"
}`,
        response: `{
  "valid": true,
  "errors": [],
  "warnings": ["Consider adding 'triggers' property to YAML frontmatter"]
}`
      }
    ],
    coreFiles: [
      { path: "src/components/Editor.tsx", desc: "Terminal editor with syntax highlighting" },
      { path: "src/linter/skillLinter.ts", desc: "AST parser and frontmatter validator" },
      { path: "src/generator/manifest.ts", desc: "Skill directory and markdown bundler" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/terminal-skill-craft.git
cd terminal-skill-craft
npm install
npm run dev`
  },
  {
    id: "rag-qa-platform",
    name: "RAG-QA-Platform",
    repo: "RAG-QA-Platform",
    category: "GenAI & RAG",
    badge: "LangChain + Vector Search",
    headline: "Intelligent Document Question-Answering Assistant",
    description: "Document question-answering assistant built with LangChain, semantic retrieval, vector databases, and large language models. Ingests PDFs, calculates dense chunk embeddings, and returns grounded answers with exact source chunk verification.",
    tech: ["Python", "LangChain", "ChromaDB", "FAISS", "HuggingFace", "FastAPI"],
    metrics: [
      { label: "Vector Search", value: "FAISS / Chroma" },
      { label: "Context Window", value: "Top-4 Chunks" },
      { label: "Retrieval", value: "Sub-100ms" },
      { label: "Grounding", value: "Source Citations" }
    ],
    simulatorType: "rag_qa",
    pipeline: [
      { step: "01", icon: "📥", title: "PDF Ingestion", tech: "PyPDFLoader", desc: "Splits documents into overlapping chunks with metadata preservation" },
      { step: "02", icon: "📐", title: "Vector Embedding", tech: "HuggingFace", desc: "Computes 768-dimensional embeddings for each text passage" },
      { step: "03", icon: "🔎", title: "Semantic Retrieval", tech: "FAISS / ChromaDB", desc: "Identifies top cosine similarity passages matching user query" },
      { step: "04", icon: "✍️", title: "LLM Generation", tech: "LangChain Chains", desc: "Produces natural answer restricted strictly to retrieved context" }
    ],
    deepDive: `
      <h4>Preventing Hallucinations via Grounded Prompts</h4>
      <p>By enforcing strict boundary prompts (<em>'Answer strictly using provided context passages. If absent, reply unknown'</em>), RAG-QA-Platform eliminates model hallucinations in enterprise policy and technical documentation.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/qa/ask",
        desc: "Ask a question against indexed document library.",
        request: `{ "question": "What is the policy on remote work equipment reimbursement?" }`,
        response: `{
  "answer": "Employees are eligible for up to $1,000 annually for approved home office hardware.",
  "citations": [{ "file": "HR_Handbook_2026.pdf", "page": 14, "similarity": 0.891 }]
}`
      }
    ],
    coreFiles: [
      { path: "qa_engine.py", desc: "LangChain QA retrieval chain" },
      { path: "indexer.py", desc: "Document chunking and vector database indexing" },
      { path: "app.py", desc: "FastAPI endpoint server" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/RAG-QA-Platform.git
cd RAG-QA-Platform
pip install -r requirements.txt
python qa_engine.py`
  },
  {
    id: "take-home-assessment",
    name: "Take-Home-Assessment",
    repo: "Take-Home-Assessment",
    category: "Full Stack & Web",
    badge: "Laravel 11 + FastAPI + React Native",
    headline: "Authenticity-Focused Social App with Heuristic Scoring",
    description: "An authenticity-centered full-stack social application. Features include an interactive feed, relative user reputation calculations, post-level heuristic scoring, and semantic text embeddings to curb spam. Built with Laravel 11, FastAPI (sentence-transformers), and React Native (Expo) Web.",
    tech: ["Laravel 11", "FastAPI", "React Native", "Expo Web", "SentenceTransformers", "MySQL"],
    metrics: [
      { label: "Frontend", value: "React Native Expo" },
      { label: "API Gateway", value: "Laravel 11" },
      { label: "NLP Service", value: "FastAPI ML" },
      { label: "Anti-Spam", value: "Semantic Heuristic" }
    ],
    simulatorType: "take_home",
    pipeline: [
      { step: "01", icon: "📱", title: "Feed UI", tech: "React Native Expo", desc: "Cross-platform social feed displaying posts and reputation badges" },
      { step: "02", icon: "🌐", title: "API Gateway", tech: "Laravel 11", desc: "Authentication, user profiles, relational data, and event dispatch" },
      { step: "03", icon: "🧠", title: "NLP Service", tech: "FastAPI", desc: "Calculates content originality and semantic similarity to prevent spam" }
    ],
    deepDive: `
      <h4>Hybrid Laravel + FastAPI Microservice Bridge</h4>
      <p>Laravel provides robust relational data handling and session authentication, while a lightweight FastAPI microservice handles real-time sentence-transformer embeddings to score post authenticity on publish.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/posts/score",
        desc: "FastAPI endpoint calculating post authenticity and reputation delta.",
        request: `{ "content": "Just finished deploying a new microservice architecture with Laravel 11 and FastAPI!" }`,
        response: `{ "authenticity_score": 92.5, "reputation_delta": +4, "spam_flag": false }`
      }
    ],
    coreFiles: [
      { path: "backend-laravel/app/Http/Controllers/PostController.php", desc: "Laravel post handler" },
      { path: "ml-service/main.py", desc: "FastAPI semantic scoring service" },
      { path: "frontend-expo/App.tsx", desc: "React Native web feed interface" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/Take-Home-Assessment.git
cd Take-Home-Assessment
# Follow README for Laravel & FastAPI startup`
  },
  {
    id: "ml-yolov10-text-detection",
    name: "ML-YOLOv10-Text-Detection",
    repo: "ML-YOLOv10-Text-Detection",
    category: "Vision & Deep Learning",
    badge: "YOLOv10 + OpenCV OCR",
    headline: "Real-Time Scene & Document Text Localization with YOLOv10",
    description: "A computer vision pipeline leveraging the state-of-the-art YOLOv10 object detection architecture for high-speed text localization and boundary bounding box regression in natural scenes and complex documents.",
    tech: ["Python", "YOLOv10", "PyTorch", "OpenCV", "EasyOCR", "CUDA"],
    metrics: [
      { label: "Inference Latency", value: "18ms (GPU)" },
      { label: "mAP50", value: "89.4%" },
      { label: "Model Architecture", value: "YOLOv10-N" },
      { label: "Input Resolution", value: "640x640" }
    ],
    simulatorType: "yolo_vision",
    pipeline: [
      { step: "01", icon: "🖼️", title: "Image Normalization", tech: "OpenCV", desc: "Letterbox padding, color space conversion, and tensor scaling" },
      { step: "02", icon: "👁️", title: "YOLOv10 Backbone", tech: "PyTorch", desc: "NMS-free dual-label assignment for real-time bounding box regression" },
      { step: "03", icon: "🔤", title: "Text Extraction", tech: "OCR Engine", desc: "Crops detected text regions and extracts digital character strings" }
    ],
    deepDive: `
      <h4>NMS-Free Real-Time Text Detection</h4>
      <p>YOLOv10 eliminates non-maximum suppression (NMS) latency through consistent dual assignments during training. This enables instant text region localization at 50+ FPS.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/vision/detect-text",
        desc: "Returns bounding box coordinates and recognized text strings.",
        request: `{ "image_url": "https://example.com/receipt.jpg" }`,
        response: `{
  "detected_boxes": [
    { "text": "TOTAL AMOUNT: $42.50", "box": [120, 340, 280, 375], "confidence": 0.96 }
  ],
  "latency_ms": 18.2
}`
      }
    ],
    coreFiles: [
      { path: "detect.py", desc: "YOLOv10 inference pipeline and bounding box drawer" },
      { path: "model_loader.py", desc: "PyTorch weights loader and GPU optimization" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/ML-YOLOv10-Text-Detection.git
cd ML-YOLOv10-Text-Detection
pip install -r requirements.txt
python detect.py --source sample.jpg`
  },
  {
    id: "fullstack-flower-shop",
    name: "Fullstack-Flower-Shop",
    repo: "Fullstack-Flower-Shop",
    category: "Full Stack & Web",
    badge: "PHP + MySQL E-Commerce",
    headline: "Web-Based Flower Shop & Inventory Management System",
    description: "An e-commerce and retail management platform built with PHP and MySQL featuring catalog browsing, cart operations, dynamic inventory tracking, order processing, and an administrative control panel.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Apache", "Session Auth"],
    metrics: [
      { label: "Backend", value: "PHP MVC" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Auth", value: "Secure Session" },
      { label: "Responsive", value: "Mobile First" }
    ],
    simulatorType: "flower_shop",
    pipeline: [
      { step: "01", icon: "💐", title: "Catalog Browser", tech: "PHP / HTML", desc: "Dynamic product rendering with category filters and stock availability" },
      { step: "02", icon: "🛒", title: "Session Cart", tech: "PHP Sessions", desc: "Persistent shopping cart with dynamic tax and total calculation" },
      { step: "03", icon: "📦", title: "Order & Inventory", tech: "MySQL ACID", desc: "Atomically decrements stock levels upon checkout confirmation" }
    ],
    deepDive: `
      <h4>ACID Transactions in Retail Inventory</h4>
      <p>Prevents overselling during seasonal peak demand by enforcing atomic SQL transaction locks when orders are submitted.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/order_process.php",
        desc: "Processes cart submission and creates invoice record.",
        request: `{ "cart": [{ "product_id": 4, "quantity": 2 }], "customer_id": 12 }`,
        response: `{ "status": "order_confirmed", "order_id": 1042, "total": 78.00 }`
      }
    ],
    coreFiles: [
      { path: "index.php", desc: "Main store storefront and catalog" },
      { path: "cart.php", desc: "Shopping cart logic and session handling" },
      { path: "database.sql", desc: "MySQL schema for products, orders, and users" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/Fullstack-Flower-Shop.git
cd Fullstack-Flower-Shop
# Move to Apache htdocs or run with PHP built-in server:
php -S localhost:8080`
  },
  {
    id: "python-smart-to-do",
    name: "Python-Smart-To-Do",
    repo: "Python-Smart-To-Do",
    category: "Tools & Agent Systems",
    badge: "NLP Task Scheduling",
    headline: "Intelligent NLP-Driven Task Scheduler & Prioritization Engine",
    description: "A smart task management application that parses natural language inputs to automatically extract due dates, urgency tiers, and categorizations, scheduling tasks into an SQLite database with priority ranking.",
    tech: ["Python", "SQLite", "NLP Parser", "Datetime Parsing", "Rich CLI"],
    metrics: [
      { label: "Input", value: "Natural Language" },
      { label: "Storage", value: "Local SQLite" },
      { label: "Extraction", value: "Regex + Dateutil" },
      { label: "CLI", value: "Rich Terminal" }
    ],
    simulatorType: "smart_todo",
    pipeline: [
      { step: "01", icon: "🗣️", title: "Natural Language Input", tech: "String Parser", desc: "Accepts phrases like 'Submit report by Friday 5pm with high priority'" },
      { step: "02", icon: "📅", title: "Date & Urgency Extractor", tech: "Python NLP", desc: "Resolves relative timestamps and assigns numerical priority weighting" },
      { step: "03", icon: "💾", title: "SQLite Store", tech: "SQLite3", desc: "Persists structured task objects with completed status flags" }
    ],
    deepDive: `
      <h4>Heuristic Natural Language Task Parsing</h4>
      <p>Uses rule-based token extraction combined with dateutil to parse natural strings like 'tomorrow morning' or 'in 3 days' into ISO-8601 timestamps without cloud API latency.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/tasks/add",
        desc: "Parses natural language task string and returns created task object.",
        request: `{ "raw_text": "Prepare presentation slides by tomorrow 3pm urgent" }`,
        response: `{ "title": "Prepare presentation slides", "due_date": "2026-10-04T15:00:00", "priority": "HIGH" }`
      }
    ],
    coreFiles: [
      { path: "todo.py", desc: "Core task manager and CLI user interface" },
      { path: "parser.py", desc: "NLP entity and date extractor" },
      { path: "db.py", desc: "SQLite database connector and queries" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/Python-Smart-To-Do.git
cd Python-Smart-To-Do
python todo.py`
  },
  {
    id: "mcp-memory-service",
    name: "mcp-memory-service",
    repo: "mcp-memory-service",
    category: "Tools & Agent Systems",
    badge: "Persistent Memory for AI Agents",
    headline: "Model Context Protocol (MCP) Persistent Knowledge Graph Memory",
    description: "An open-source persistent memory service for AI agent frameworks (LangGraph, CrewAI, AutoGen) and Claude. Provides knowledge graph relationship storage, REST APIs, and autonomous memory consolidation across multi-turn sessions.",
    tech: ["Python", "Model Context Protocol", "Knowledge Graphs", "Vector Search", "REST API"],
    metrics: [
      { label: "Protocol", value: "Anthropic MCP" },
      { label: "Graph Engine", value: "Entity-Relation" },
      { label: "Integration", value: "Claude & LangGraph" },
      { label: "Consolidation", value: "Autonomous" }
    ],
    simulatorType: "mcp_memory",
    pipeline: [
      { step: "01", icon: "🔌", title: "MCP Interface", tech: "MCP Protocol", desc: "Exposes memory search and memory write tools directly to LLMs" },
      { step: "02", icon: "🕸️", title: "Entity Extraction", tech: "Knowledge Graph", desc: "Extracts nodes (concepts, preferences) and typed relations" },
      { step: "03", icon: "🧠", title: "Consolidation", tech: "Vector + Graph", desc: "Synthesizes duplicate memories into a coherent historical timeline" }
    ],
    deepDive: `
      <h4>Temporal Knowledge Graphs in Agentic Systems</h4>
      <p>Rather than dumping raw text into vector stores, MCP Memory extracts structured graph triples (<em>User</em> -> <em>Prefers</em> -> <em>FastAPI</em>), enabling exact factual retrieval even as conversation context rolls over.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/v1/memory/query",
        desc: "Queries persistent agent memory for relevant facts.",
        request: `{ "query": "What database preference did the user specify?" }`,
        response: `{ "entities": ["User", "PostgreSQL", "ChromaDB"], "relationship": "User prefers PostgreSQL with pgvector for relational data." }`
      }
    ],
    coreFiles: [
      { path: "server.py", desc: "MCP server implementation for Claude Desktop and agent frameworks" },
      { path: "graph.py", desc: "Entity graph storage and relationship traversal" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/mcp-memory-service.git
cd mcp-memory-service
pip install -r requirements.txt
python server.py`
  },
  {
    id: "stegofusion",
    name: "StegoFusion",
    repo: "StegoFusion",
    category: "Vision & Deep Learning",
    badge: "RSA-2048 + AES-256 + Deep Learning",
    headline: "Dual-Carrier Hybrid Cryptographic Steganography Platform",
    description: "An advanced security system that embeds encrypted secret payloads into dual carriers (image and text structures) using a deep residual network. Combines RSA-2048 asymmetric handshakes, AES-256 payload encryption, and deep steganography achieving high imperceptibility (PSNR > 42dB).",
    tech: ["Python", "Deep Learning", "RSA-2048", "AES-256", "Computer Vision", "Steganography"],
    metrics: [
      { label: "Encryption", value: "RSA-2048 + AES-256" },
      { label: "Image Quality (PSNR)", value: "> 42 dB" },
      { label: "Detection Resistance", value: "Anti-Steganalysis" },
      { label: "Carrier Type", value: "Dual (Image & Text)" }
    ],
    simulatorType: "stegofusion",
    pipeline: [
      { step: "01", icon: "🔐", title: "Hybrid Encryption", tech: "RSA-2048 + AES-256", desc: "Encrypts raw secret data with military-grade asymmetric/symmetric ciphers" },
      { step: "02", icon: "🧠", title: "Deep Residual Hider", tech: "PyTorch CNN", desc: "Embeds encrypted bits into high-frequency spatial frequencies of carrier image" },
      { step: "03", icon: "🛡️", title: "Steganalysis Validation", tech: "Histogram Check", desc: "Verifies zero perceptible visual artifacts or statistical anomalies" },
      { step: "04", icon: "🔓", title: "Deep Neural Extractor", tech: "Decoder Network", desc: "Extracts encrypted bitstream and decrypts with private RSA key" }
    ],
    deepDive: `
      <h4>Sub-Perceptible Distortion via Residual Networks</h4>
      <p>Traditional LSB steganography leaves statistical fingerprints easily detected by chi-square tests. StegoFusion's deep encoder distributes the encrypted entropy across high-frequency textural regions where human visual perception and statistical detectors are least sensitive.</p>
    `,
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/stego/encode",
        desc: "Encrypts secret text and embeds into carrier image.",
        request: `{ "secret_message": "CONFIDENTIAL_KEY_2026", "carrier_image": "base64..." }`,
        response: `{ "status": "success", "psnr_db": 43.8, "encoded_image": "base64..." }`
      }
    ],
    coreFiles: [
      { path: "src/encoder.py", desc: "Deep residual steganographic encoder" },
      { path: "src/crypto.py", desc: "RSA-2048 and AES-256 cryptographic wrapper" },
      { path: "src/decoder.py", desc: "Neural extractor and decryption pipeline" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/StegoFusion.git
cd StegoFusion
pip install -r requirements.txt
python main.py`
  },
  {
    id: "leetcode-solutions",
    name: "leetcode-solutions",
    repo: "leetcode-solutions",
    category: "Profile & Automation",
    badge: "Automated GitHub Actions CI",
    headline: "Automated LeetCode Solution Repository & Complexity Analyzer",
    description: "A synchronized algorithmic archive that tracks solved LeetCode problems, categorized by data structures and algorithmic patterns (Sliding Window, Dynamic Programming, Graphs), with automated GitHub Actions sync and time/space complexity documentation.",
    tech: ["Python", "GitHub Actions", "Algorithms", "Data Structures", "CI/CD"],
    metrics: [
      { label: "Sync Engine", value: "GitHub Actions" },
      { label: "Complexity", value: "O(N) Documented" },
      { label: "Languages", value: "Python, C++, JS" },
      { label: "Update Frequency", value: "Automated" }
    ],
    simulatorType: "leetcode",
    pipeline: [
      { step: "01", icon: "⚡", title: "Problem Submission", tech: "LeetCode Webhook", desc: "Captures accepted submissions from LeetCode" },
      { step: "02", icon: "⚙️", title: "GitHub Action Runner", tech: "Actions CI", desc: "Formats solution code, docstrings, and complexity annotations" },
      { step: "03", icon: "📁", title: "Categorized Commit", tech: "Git Auto-Commit", desc: "Commits to directory hierarchy organized by pattern" }
    ],
    deepDive: `
      <h4>Pattern-Oriented Problem Categorization</h4>
      <p>Solutions are cataloged by underlying algorithmic technique rather than difficulty, reinforcing core software engineering competencies.</p>
    `,
    apiEndpoints: [
      {
        method: "GET",
        path: "/solutions/top",
        desc: "Returns top optimal algorithms with Big-O benchmarks.",
        request: `GET /solutions/top?pattern=two-pointers`,
        response: `{ "problem": "Trapping Rain Water", "time_complexity": "O(N)", "space_complexity": "O(1)" }`
      }
    ],
    coreFiles: [
      { path: ".github/workflows/sync.yml", desc: "GitHub Actions automated synchronization workflow" },
      { path: "solutions/", desc: "Categorized algorithmic implementations" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/leetcode-solutions.git
cd leetcode-solutions`
  },
  {
    id: "portfolio",
    name: "Portfolio",
    repo: "Portfolio",
    category: "Profile & Automation",
    badge: "Modern Developer Brand",
    headline: "Modern Full Stack AI Engineer Developer Portfolio",
    description: "The primary portfolio website showcasing professional experience at Ellucian, featured machine learning systems, interactive canvas spider-web effects, technical skills, and contact touchpoints.",
    tech: ["HTML5", "CSS3", "Modern JavaScript", "Canvas API", "GitHub Pages"],
    metrics: [
      { label: "Performance", value: "100 / 100 Lighthouse" },
      { label: "Hosting", value: "GitHub Pages" },
      { label: "Interactive Canvas", value: "Spider Cursor Web" },
      { label: "Zero Dependencies", value: "Vanilla JS & CSS" }
    ],
    simulatorType: "portfolio",
    pipeline: [
      { step: "01", icon: "🎨", title: "Design Tokens", tech: "CSS Custom Props", desc: "Modular dark mode color palette, typography, and glassmorphism" },
      { step: "02", icon: "🕷️", title: "Spider Cursor Canvas", tech: "Canvas 2D API", desc: "Dynamic interactive web physics responding to pointer coordinates" },
      { step: "03", icon: "📱", title: "Responsive Layout", tech: "CSS Grid & Flex", desc: "Seamless accessibility and layout adaptation across mobile and desktop" }
    ],
    deepDive: `
      <h4>Vanilla Web Performance</h4>
      <p>Engineered without bloated third-party frameworks to achieve instantaneous load times and sub-millisecond frame rendering.</p>
    `,
    apiEndpoints: [
      {
        method: "GET",
        path: "/portfolio-metrics",
        desc: "Returns site architecture and accessibility metrics.",
        request: `GET /`,
        response: `{ "lighthouse_performance": 99, "accessibility": 100, "seo": 100 }`
      }
    ],
    coreFiles: [
      { path: "index.html", desc: "Complete responsive portfolio structure and sections" },
      { path: "portfolio_map.md", desc: "Comprehensive line-by-line developer architectural map" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/Portfolio.git
cd Portfolio
# Open index.html in browser directly or with any local server:
npx serve .`
  },
  {
    id: "hashnode-articles",
    name: "Hashnode-Articles",
    repo: "Hashnode-Articles",
    category: "Profile & Automation",
    badge: "Automated Blog Synchronizer",
    headline: "Automated Tech Blog Article Synchronizer & Markdown Archive",
    description: "Automated repository that syncs technical deep-dives and engineering articles from Hashnode to GitHub, creating a version-controlled markdown knowledge repository.",
    tech: ["Markdown", "Hashnode API", "GitHub Actions", "Webhooks"],
    metrics: [
      { label: "Sync Engine", value: "GraphQL Webhook" },
      { label: "Format", value: "Gfm Markdown" },
      { label: "Archive", value: "Version Controlled" }
    ],
    simulatorType: "hashnode",
    pipeline: [
      { step: "01", icon: "📝", title: "Publication Event", tech: "Hashnode", desc: "Author posts an article on Hashnode technical blog" },
      { step: "02", icon: "🔄", title: "Webhook Trigger", tech: "GitHub Action", desc: "Executes automated markdown formatting and image asset downloads" },
      { step: "03", icon: "📚", title: "Git Archive", tech: "Git Repository", desc: "Stores permanent version-controlled copy of publication" }
    ],
    deepDive: `
      <h4>Decoupled Content Ownership</h4>
      <p>Ensures developer writings remain independent of third-party platform lock-in through automated git synchronization.</p>
    `,
    apiEndpoints: [
      {
        method: "GET",
        path: "/articles/recent",
        desc: "Fetches recent published technical articles.",
        request: `GET /articles`,
        response: `{ "title": "Building Production RAG Systems with ChromaDB and Claude", "read_time": "6 min" }`
      }
    ],
    coreFiles: [
      { path: "articles/", desc: "Markdown articles directory" },
      { path: ".github/workflows/hashnode-sync.yml", desc: "Automated synchronization pipeline" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/Hashnode-Articles.git`
  },
  {
    id: "chiranjeevi7777",
    name: "chiranjeevi7777 (Profile README)",
    repo: "chiranjeevi7777",
    category: "Profile & Automation",
    badge: "Dynamic GitHub Stats & Branding",
    headline: "Special GitHub Profile README with Real-Time Metric Telemetry",
    description: "The official GitHub profile landing page for @chiranjeevi7777 featuring real-time GitHub activity metrics, language analytics, tech stack badges, and automated daily streak updates.",
    tech: ["Python", "GitHub Actions", "SVG Generation", "Markdown"],
    metrics: [
      { label: "Telemetry", value: "Real-Time Stats" },
      { label: "Automation", value: "GitHub Cron" },
      { label: "Branding", value: "Full Stack AI" }
    ],
    simulatorType: "profile",
    pipeline: [
      { step: "01", icon: "📊", title: "GitHub GraphQL API", tech: "Octokit", desc: "Queries contributions, star counts, and commit frequencies" },
      { step: "02", icon: "🎨", title: "SVG Renderer", tech: "Python SVG", desc: "Generates aesthetic dark-themed status cards and language charts" },
      { step: "03", icon: "🚀", title: "Profile Deploy", tech: "Git Commit", desc: "Updates user profile README on GitHub home automatically" }
    ],
    deepDive: `
      <h4>Dynamic Vector Rendering for Developer Profiles</h4>
      <p>SVG graphics generated via Python automation ensure crisp rendering across all screen resolutions without raster compression artifacts.</p>
    `,
    apiEndpoints: [
      {
        method: "GET",
        path: "/profile/stats",
        desc: "Returns aggregated GitHub profile statistics.",
        request: `GET /stats`,
        response: `{ "total_commits": "500+", "primary_languages": ["Python", "TypeScript", "JavaScript"] }`
      }
    ],
    coreFiles: [
      { path: "README.md", desc: "Profile markdown layout and widgets" },
      { path: ".github/workflows/metrics.yml", desc: "Daily metrics calculation workflow" }
    ],
    quickStart: `git clone https://github.com/chiranjeevi7777/chiranjeevi7777.git`
  }
];

// ===================================================================
// Application State & DOM Elements
// ===================================================================
let activeProject = null;
let activeCategory = "All";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  initDOM();
  handleRoute();
  window.addEventListener("popstate", handleRoute);
});

function initDOM() {
  renderCategoryPills();
  setupSearchInput();
  renderDirectoryView();
}

function handleRoute() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("project");

  if (projectId) {
    const project = PROJECTS.find(p => p.id.toLowerCase() === projectId.toLowerCase());
    if (project) {
      showProjectView(project);
      return;
    }
  }

  showDirectoryView();
}

function navigateToProject(projectId) {
  const url = new URL(window.location);
  url.searchParams.set("project", projectId);
  window.history.pushState({}, "", url);
  handleRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateToDirectory() {
  const url = new URL(window.location);
  url.searchParams.delete("project");
  window.history.pushState({}, "", url);
  handleRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===================================================================
// Directory & Filter View Logic
// ===================================================================
function renderCategoryPills() {
  const categories = ["All", "GenAI & RAG", "Vision & Deep Learning", "Full Stack & Web", "Tools & Agent Systems", "Profile & Automation"];
  const container = document.getElementById("categoryPills");
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button class="category-pill ${cat === activeCategory ? 'active' : ''}" onclick="setCategory('${cat}')">
      ${cat}
    </button>
  `).join("");
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategoryPills();
  renderDirectoryView();
}

function setupSearchInput() {
  const input = document.getElementById("projectSearch");
  if (!input) return;

  input.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderDirectoryView();
  });
}

function renderDirectoryView() {
  const grid = document.getElementById("projectsGrid");
  const countEl = document.getElementById("projectCount");
  if (!grid) return;

  const filtered = PROJECTS.filter(p => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery) ||
      p.headline.toLowerCase().includes(searchQuery) ||
      p.tech.some(t => t.toLowerCase().includes(searchQuery));
    return matchesCat && matchesQuery;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} Repositories`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-dim);">
        <p style="font-size: 1.25rem; margin-bottom: 0.5rem;">No repositories matching "${searchQuery}"</p>
        <p style="font-size: 0.9rem;">Try searching for "RAG", "Vision", "Python", or "React"</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="project-card glass">
      <div class="card-top">
        <div class="card-meta">
          <span class="card-category">${p.category}</span>
          <span class="live-badge">Live Demo</span>
        </div>
        <a href="?project=${p.id}" onclick="event.preventDefault(); navigateToProject('${p.id}')" class="card-title">
          ${p.name}
        </a>
        <p class="card-desc">${p.description}</p>
        <div class="card-tech-list">
          ${p.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join("")}
          ${p.tech.length > 4 ? `<span class="tech-tag">+${p.tech.length - 4}</span>` : ""}
        </div>
      </div>
      <div class="card-bottom">
        <button class="btn btn-primary btn-sm" onclick="navigateToProject('${p.id}')">
          🚀 Launch Demo
        </button>
        <div style="display: flex; gap: 0.5rem;">
          <a class="btn btn-secondary btn-sm" href="${REPO_BASE}/${p.repo}" target="_blank" rel="noopener" title="View Source on GitHub">
            🐙 Code
          </a>
          <button class="btn btn-secondary btn-sm" onclick="copyDemoLink('${p.id}')" title="Copy Demo Link">
            📋
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function showDirectoryView() {
  document.getElementById("directoryView").style.display = "flex";
  document.getElementById("projectView").style.display = "none";
}

// ===================================================================
// Single Project View Rendering
// ===================================================================
function showProjectView(project) {
  activeProject = project;
  document.getElementById("directoryView").style.display = "none";
  document.getElementById("projectView").style.display = "flex";

  // Breadcrumbs & Header
  document.getElementById("breadcrumbCategory").textContent = project.category;
  document.getElementById("breadcrumbName").textContent = project.name;
  document.getElementById("viewTitle").innerHTML = `${project.name} <span class="live-badge">Interactive Demo Online</span>`;
  document.getElementById("viewDesc").textContent = project.description;
  document.getElementById("githubLinkBtn").href = `${REPO_BASE}/${project.repo}`;
  
  // Tech tags
  document.getElementById("viewTechTags").innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join("");

  // Metrics
  document.getElementById("metricsStrip").innerHTML = project.metrics.map(m => `
    <div class="metric-item">
      <span class="metric-label">${m.label}</span>
      <span class="metric-value">${m.value}</span>
    </div>
  `).join("");

  // Render Simulator tab
  renderSimulator(project);

  // Render Architecture tab
  renderArchitecture(project);

  // Render API tab
  renderAPI(project);

  // Render Quick Start tab
  renderQuickStart(project);

  // Reset tab to simulator
  switchTab("sim");
}

function switchTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

  const targetBtn = document.getElementById(`tabBtn-${tabId}`);
  const targetContent = document.getElementById(`tabContent-${tabId}`);

  if (targetBtn) targetBtn.classList.add("active");
  if (targetContent) targetContent.classList.add("active");
}

// ===================================================================
// Interactive Simulators Factory
// ===================================================================
function renderSimulator(project) {
  const container = document.getElementById("simMountPoint");
  if (!container) return;

  switch (project.simulatorType) {
    case "cardiovision":
      container.innerHTML = getCardioVisionSimHTML();
      setupCardioVisionSim();
      break;
    case "enterprise_rag":
      container.innerHTML = getEnterpriseRAGSimHTML();
      setupEnterpriseRAGSim();
      break;
    case "careeros":
      container.innerHTML = getCareerOsSimHTML();
      setupCareerOsSim();
      break;
    case "scholarguard":
      container.innerHTML = getScholarGuardSimHTML();
      setupScholarGuardSim();
      break;
    case "gitquest":
      container.innerHTML = getGitQuestSimHTML();
      setupGitQuestSim();
      break;
    case "hirepilot":
      container.innerHTML = getHirePilotSimHTML();
      setupHirePilotSim();
      break;
    case "booksense":
      container.innerHTML = getBookSenseSimHTML();
      setupBookSenseSim();
      break;
    case "knowledgevault":
      container.innerHTML = getKnowledgeVaultSimHTML();
      setupKnowledgeVaultSim();
      break;
    case "terminal_craft":
      container.innerHTML = getTerminalCraftSimHTML();
      setupTerminalCraftSim();
      break;
    case "rag_qa":
      container.innerHTML = getRagQaSimHTML();
      setupRagQaSim();
      break;
    case "stegofusion":
      container.innerHTML = getStegoFusionSimHTML();
      setupStegoFusionSim();
      break;
    default:
      container.innerHTML = getGenericDomainSimHTML(project);
      setupGenericDomainSim(project);
      break;
  }
}

// -------------------------------------------------------------------
// Simulator 1: CardioVision-AI
// -------------------------------------------------------------------
function getCardioVisionSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">🫀 InceptionV3-Ensemble Chest X-Ray Diagnostic Playground</div>
        <div class="preset-chips">
          <span class="preset-chip" onclick="setCardioPreset('normal')">Preset: Normal Heart</span>
          <span class="preset-chip" onclick="setCardioPreset('vsd')">Preset: VSD (Ventricular Defect)</span>
          <span class="preset-chip" onclick="setCardioPreset('asd')">Preset: ASD (Atrial Defect)</span>
          <span class="preset-chip" onclick="setCardioPreset('tof')">Preset: Tetralogy of Fallot</span>
        </div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Input Radiograph</span>
            <span id="cardioPresetLabel">Selected: VSD</span>
          </div>
          <div style="background:#000; border-radius:var(--radius-sm); height:220px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
            <svg id="xrayCanvas" viewBox="0 0 200 200" style="width:180px; height:180px; filter:drop-shadow(0 0 8px rgba(255,255,255,0.2));">
              <!-- Ribcage & Lung fields SVG silhouette -->
              <ellipse cx="100" cy="100" rx="80" ry="90" fill="#080808" stroke="#333" stroke-width="2"/>
              <path d="M50 40 Q70 100 50 160 Q85 150 90 90 Q85 45 50 40 Z" fill="#141414" stroke="#444"/>
              <path d="M150 40 Q130 100 150 160 Q115 150 110 90 Q115 45 150 40 Z" fill="#141414" stroke="#444"/>
              <!-- Spine & Cardiac Silhouette -->
              <rect x="96" y="20" width="8" height="160" fill="#222"/>
              <path id="cardiacShadow" d="M85 75 C100 65, 135 85, 138 120 C138 150, 95 155, 80 140 Z" fill="#3a3a3a" opacity="0.85"/>
              <!-- Grad-CAM Heatmap overlay -->
              <circle id="gradcamOverlay" cx="120" cy="115" r="35" fill="url(#gradCamRadial)" opacity="0" style="transition:opacity 0.5s ease; mix-blend-mode: screen;"/>
              <defs>
                <radialGradient id="gradCamRadial">
                  <stop offset="0%" stop-color="#ef4444" stop-opacity="0.85"/>
                  <stop offset="50%" stop-color="#eab308" stop-opacity="0.6"/>
                  <stop offset="85%" stop-color="#06b6d4" stop-opacity="0.2"/>
                  <stop offset="100%" stop-color="transparent"/>
                </radialGradient>
              </defs>
            </svg>
            <div id="gradcamTag" style="position:absolute; bottom:8px; left:8px; font-size:0.7rem; font-family:var(--font-mono); color:#94a3b8; background:rgba(0,0,0,0.7); padding:2px 6px; border-radius:4px;">
              CLAHE Radiograph: 299x299 Normal
            </div>
          </div>
          <div style="display:flex; gap:0.75rem;">
            <button class="btn btn-primary" id="runCardioBtn" style="flex:1;">
              ⚡ Run Diagnostic Ensemble
            </button>
            <button class="btn btn-secondary" id="toggleGradCamBtn">
              🔥 Toggle Grad-CAM
            </button>
          </div>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Diagnostic Inference</span>
            <span id="cardioLatency">Latency: --</span>
          </div>
          <div id="cardioMeters" style="display:flex; flex-direction:column; justify-content:center; flex:1;">
            <div class="prob-meter">
              <div class="prob-meta"><span>Ventricular Septal Defect (VSD)</span><strong id="vsdVal">94.8%</strong></div>
              <div class="prob-track"><div id="vsdBar" class="prob-fill" style="width:94.8%;"></div></div>
            </div>
            <div class="prob-meter">
              <div class="prob-meta"><span>Atrial Septal Defect (ASD)</span><strong id="asdVal">3.2%</strong></div>
              <div class="prob-track"><div id="asdBar" class="prob-fill emerald" style="width:3.2%;"></div></div>
            </div>
            <div class="prob-meter">
              <div class="prob-meta"><span>Normal (No Congenital Abnormality)</span><strong id="normVal">1.6%</strong></div>
              <div class="prob-track"><div id="normBar" class="prob-fill" style="width:1.6%;"></div></div>
            </div>
            <div class="prob-meter">
              <div class="prob-meta"><span>Tetralogy of Fallot</span><strong id="tofVal">0.4%</strong></div>
              <div class="prob-track"><div id="tofBar" class="prob-fill amber" style="width:0.4%;"></div></div>
            </div>
          </div>
          <div class="console-box" id="cardioLogs">
            <div class="console-line info">> Model initialized: InceptionV3 feature extractor + StackingClassifier</div>
            <div class="console-line">> Ready for radiograph input...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

let cardioCamVisible = false;
let currentCardioPreset = "vsd";

function setCardioPreset(preset) {
  currentCardioPreset = preset;
  const label = document.getElementById("cardioPresetLabel");
  const shadow = document.getElementById("cardiacShadow");
  const overlay = document.getElementById("gradcamOverlay");

  if (preset === "normal") {
    label.textContent = "Selected: Normal Healthy";
    shadow.setAttribute("d", "M85 85 C95 78, 120 90, 122 120 C122 140, 95 145, 82 135 Z");
    overlay.setAttribute("cx", "105");
    overlay.setAttribute("cy", "110");
  } else if (preset === "vsd") {
    label.textContent = "Selected: VSD (Ventricular Septal Defect)";
    shadow.setAttribute("d", "M85 75 C100 65, 142 85, 145 125 C145 158, 95 160, 80 145 Z");
    overlay.setAttribute("cx", "125");
    overlay.setAttribute("cy", "120");
  } else if (preset === "asd") {
    label.textContent = "Selected: ASD (Atrial Septal Defect)";
    shadow.setAttribute("d", "M82 72 C98 60, 138 80, 135 118 C135 148, 92 152, 78 138 Z");
    overlay.setAttribute("cx", "115");
    overlay.setAttribute("cy", "95");
  } else if (preset === "tof") {
    label.textContent = "Selected: Tetralogy of Fallot";
    shadow.setAttribute("d", "M85 75 C105 60, 148 95, 142 135 C142 165, 90 155, 76 138 Z");
    overlay.setAttribute("cx", "130");
    overlay.setAttribute("cy", "125");
  }
}

function setupCardioVisionSim() {
  const runBtn = document.getElementById("runCardioBtn");
  const camBtn = document.getElementById("toggleGradCamBtn");
  const logs = document.getElementById("cardioLogs");
  const latency = document.getElementById("cardioLatency");

  if (camBtn) {
    camBtn.onclick = () => {
      cardioCamVisible = !cardioCamVisible;
      const overlay = document.getElementById("gradcamOverlay");
      if (overlay) overlay.style.opacity = cardioCamVisible ? "0.85" : "0";
    };
  }

  if (runBtn) {
    runBtn.onclick = () => {
      runBtn.disabled = true;
      runBtn.textContent = "⌛ Running Inference...";
      logs.innerHTML += `<div class="console-line info">> Preprocessing radiograph: CLAHE contrast, resizing to 299x299x3...</div>`;

      setTimeout(() => {
        logs.innerHTML += `<div class="console-line">> InceptionV3 extracting 2048-dim latent vector...</div>`;
      }, 250);

      setTimeout(() => {
        logs.innerHTML += `<div class="console-line">> Stacking Ensemble meta-learner scoring (XGBoost + RF + SVM)...</div>`;
      }, 500);

      setTimeout(() => {
        runBtn.disabled = false;
        runBtn.textContent = "⚡ Run Diagnostic Ensemble";
        latency.textContent = "Latency: 79.4ms";

        let vsd = 4.2, asd = 3.1, norm = 91.5, tof = 1.2;
        if (currentCardioPreset === "vsd") {
          vsd = 94.8; asd = 3.2; norm = 1.6; tof = 0.4;
        } else if (currentCardioPreset === "asd") {
          vsd = 6.4; asd = 89.2; norm = 3.8; tof = 0.6;
        } else if (currentCardioPreset === "tof") {
          vsd = 5.1; asd = 2.4; norm = 1.2; tof = 91.3;
        }

        document.getElementById("vsdVal").textContent = `${vsd}%`;
        document.getElementById("vsdBar").style.width = `${vsd}%`;
        document.getElementById("asdVal").textContent = `${asd}%`;
        document.getElementById("asdBar").style.width = `${asd}%`;
        document.getElementById("normVal").textContent = `${norm}%`;
        document.getElementById("normBar").style.width = `${norm}%`;
        document.getElementById("tofVal").textContent = `${tof}%`;
        document.getElementById("tofBar").style.width = `${tof}%`;

        logs.innerHTML += `<div class="console-line success">> Classification complete: ${currentCardioPreset.toUpperCase()} identified with high confidence!</div>`;
        logs.scrollTop = logs.scrollHeight;
      }, 850);
    };
  }
}

// -------------------------------------------------------------------
// Simulator 2: Enterprise Knowledge Intelligence RAG
// -------------------------------------------------------------------
function getEnterpriseRAGSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">⚡ Enterprise ERP Semantic RAG Assistant</div>
        <div class="preset-chips">
          <span class="preset-chip" onclick="setRagPreset('grir')">Query: GR/IR Mismatch</span>
          <span class="preset-chip" onclick="setRagPreset('po')">Query: PO Tolerance Overrun</span>
          <span class="preset-chip" onclick="setRagPreset('sox')">Query: SOX Compliance Audit</span>
        </div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Enterprise Natural Language Query</label>
          <textarea id="ragQueryInput" class="textarea-custom">How do I reconcile a GR/IR line item mismatch in SAP S/4HANA?</textarea>
          
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label class="input-label" style="margin-bottom:0;">Knowledge Scope</label>
            <span class="tech-tag" id="ragAcronymBadge">Acronym Detector: Ready</span>
          </div>
          <select id="ragDeptSelect" class="select-custom">
            <option>Procure-To-Pay & SAP Finance (FI/CO)</option>
            <option>Supply Chain & Materials Management (MM)</option>
            <option>Human Capital Management (HCM)</option>
          </select>
          <button class="btn btn-primary" id="runRagBtn">
            🔍 Execute Semantic Retrieval & Claude
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>RAG Synthesis & Citations</span>
            <span id="ragStatus">Status: Idle</span>
          </div>
          <div class="console-box" id="ragOutputConsole" style="min-height:220px;">
            <div class="console-line info">> Connected to ChromaDB Collection: 'enterprise_erp_docs' (18,420 chunks)</div>
            <div class="console-line">> Model: Amazon Bedrock Claude 3.5 Sonnet</div>
            <div class="console-line dim">> Awaiting enterprise prompt...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setRagPreset(type) {
  const input = document.getElementById("ragQueryInput");
  if (type === "grir") {
    input.value = "How do I reconcile a GR/IR line item mismatch in SAP S/4HANA?";
  } else if (type === "po") {
    input.value = "What is the procedure when purchase order price exceeds tolerance limit?";
  } else if (type === "sox") {
    input.value = "What controls are required for SOX compliance during vendor master updates?";
  }
}

function setupEnterpriseRAGSim() {
  const btn = document.getElementById("runRagBtn");
  const consoleEl = document.getElementById("ragOutputConsole");
  const badge = document.getElementById("ragAcronymBadge");
  const status = document.getElementById("ragStatus");

  if (!btn) return;

  btn.onclick = () => {
    const query = document.getElementById("ragQueryInput").value;
    btn.disabled = true;
    btn.textContent = "⏳ Retrieving Vector Chunks...";
    status.textContent = "Status: Embedding query...";

    consoleEl.innerHTML = `<div class="console-line info">> Parsing query: "${query}"</div>`;

    setTimeout(() => {
      badge.textContent = "Acronym Resolved: GR/IR = Goods Receipt / Invoice Receipt";
      badge.style.color = "var(--accent-emerald)";
      consoleEl.innerHTML += `<div class="console-line success">> [Acronym Resolver] Expanded 'GR/IR' -> 'Goods Receipt / Invoice Receipt'</div>`;
      consoleEl.innerHTML += `<div class="console-line">> ChromaDB dense vector search with all-MiniLM-L6-v2...</div>`;
      status.textContent = "Status: Ranking chunks...";
    }, 350);

    setTimeout(() => {
      consoleEl.innerHTML += `
        <div class="console-line warn">> Top-3 Chunks Retrieved:</div>
        <div class="console-line dim">  [0.912] SAP_Finance_Reconciliation_SOP.pdf § 8.3 (GR/IR Clearing)</div>
        <div class="console-line dim">  [0.865] S4HANA_Procure_To_Pay_Rules.docx § 14.1</div>
        <div class="console-line info">> Forwarding context to Amazon Bedrock Claude 3.5 Sonnet...</div>
      `;
      status.textContent = "Status: Synthesizing...";
    }, 800);

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "🔍 Execute Semantic Retrieval & Claude";
      status.textContent = "Status: Complete (148ms)";

      consoleEl.innerHTML += `
        <div style="margin-top:0.75rem; padding:0.75rem; background:rgba(6,182,212,0.1); border-left:3px solid var(--accent-cyan); border-radius:4px; color:#f1f5f9; line-height:1.6;">
          <strong>Synthesized Answer:</strong><br>
          To reconcile a GR/IR clearing difference in SAP S/4HANA:<br>
          1. <strong>Run MR11:</strong> Execute transaction <code>MR11</code> (GR/IR Clearing Account Maintenance) to evaluate open variance quantities.<br>
          2. <strong>Identify Imbalance:</strong> Confirm if goods were delivered with no pending invoice, or if invoice was posted without corresponding receipt.<br>
          3. <strong>Post Adjustment:</strong> If variance is acceptable under policy, post write-off difference to purchase price variance (PPV).
        </div>
      `;
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }, 1500);
  };
}

// -------------------------------------------------------------------
// Simulator 3: CareerOs
// -------------------------------------------------------------------
function getCareerOsSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">💼 CareerOs - Local AI Agent Operating System</div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" id="careerTabApp" onclick="switchCareerSubTab('app')">Kanban Tracker</button>
          <button class="btn btn-primary btn-sm" id="careerTabMock" onclick="switchCareerSubTab('mock')">Mock Interview</button>
          <button class="btn btn-secondary btn-sm" id="careerTabResume" onclick="switchCareerSubTab('resume')">Resume Tailor</button>
        </div>
      </div>

      <!-- Subtab 1: Mock Interview -->
      <div id="careerMockView" class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Target Role</label>
          <select id="careerRoleSelect" class="select-custom">
            <option>Senior AI / RAG Engineer</option>
            <option>Full Stack Python / FastAPI Developer</option>
            <option>Machine Learning Systems Engineer</option>
          </select>
          <label class="input-label">AI Interview Question</label>
          <div style="padding:0.75rem; background:var(--bg-input); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:0.9rem; color:#f8fafc;" id="careerQuestionText">
            "How do you design a high-throughput RAG retrieval pipeline to avoid stale vector embeddings when documentation changes hourly?"
          </div>
          <label class="input-label">Your Response</label>
          <textarea id="careerAnswerInput" class="textarea-custom" placeholder="Type your response here...">I would implement an event-driven Kafka stream that triggers incremental chunk re-indexing with Celery workers, caching hot query vectors in Redis.</textarea>
          <button class="btn btn-primary" id="runCareerEvalBtn">
            🤖 Evaluate Answer with PydanticAI
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>PydanticAI Evaluation</span>
            <span id="careerScoreBadge">Score: --</span>
          </div>
          <div class="console-box" id="careerEvalBox" style="min-height:220px;">
            <div class="console-line info">> PydanticAI Local Agent initialized with offline schema</div>
            <div class="console-line dim">> Awaiting candidate answer for structured critique...</div>
          </div>
        </div>
      </div>

      <!-- Subtab 2: Kanban (Hidden by default) -->
      <div id="careerAppView" style="display:none; grid-template-columns:repeat(4,1fr); gap:1rem;">
        <div class="sim-pane" style="background:#0a0e18;">
          <strong style="font-size:0.8rem; color:var(--accent-cyan); text-transform:uppercase;">Applied (4)</strong>
          <div style="padding:0.5rem; background:#12192c; border-radius:6px; font-size:0.85rem; margin-top:0.5rem;">Google - Staff AI Engineer</div>
          <div style="padding:0.5rem; background:#12192c; border-radius:6px; font-size:0.85rem; margin-top:0.5rem;">Amazon - Applied Scientist II</div>
        </div>
        <div class="sim-pane" style="background:#0a0e18;">
          <strong style="font-size:0.8rem; color:var(--accent-amber); text-transform:uppercase;">Technical Round (2)</strong>
          <div style="padding:0.5rem; background:#12192c; border-radius:6px; font-size:0.85rem; margin-top:0.5rem; border-left:3px solid var(--accent-amber);">Stripe - Machine Learning</div>
        </div>
        <div class="sim-pane" style="background:#0a0e18;">
          <strong style="font-size:0.8rem; color:var(--accent-purple); text-transform:uppercase;">System Design (1)</strong>
          <div style="padding:0.5rem; background:#12192c; border-radius:6px; font-size:0.85rem; margin-top:0.5rem; border-left:3px solid var(--accent-purple);">Databricks - GenAI Eng</div>
        </div>
        <div class="sim-pane" style="background:#0a0e18;">
          <strong style="font-size:0.8rem; color:var(--accent-emerald); text-transform:uppercase;">Offer (1)</strong>
          <div style="padding:0.5rem; background:#12192c; border-radius:6px; font-size:0.85rem; margin-top:0.5rem; border-left:3px solid var(--accent-emerald);">Ellucian - AI Engineer</div>
        </div>
      </div>

      <!-- Subtab 3: Resume (Hidden by default) -->
      <div id="careerResumeView" style="display:none; flex-direction:column; gap:1rem;">
        <div class="sim-pane">
          <label class="input-label">Raw Experience Bullet Point</label>
          <input type="text" id="rawBulletInput" class="input-custom" value="Wrote Python backend code for our company search tool.">
          <button class="btn btn-primary" id="rewriteBulletBtn" style="margin-top:0.75rem;">
            ✨ Transform to Google XYZ Format
          </button>
          <div id="tailoredResultBox" style="margin-top:1rem; padding:1rem; background:#05070d; border-radius:6px; font-size:0.9rem; line-height:1.6; display:none;">
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchCareerSubTab(tab) {
  document.getElementById("careerMockView").style.display = tab === "mock" ? "grid" : "none";
  document.getElementById("careerAppView").style.display = tab === "app" ? "grid" : "none";
  document.getElementById("careerResumeView").style.display = tab === "resume" ? "flex" : "none";

  document.getElementById("careerTabMock").className = `btn btn-sm ${tab === "mock" ? "btn-primary" : "btn-secondary"}`;
  document.getElementById("careerTabApp").className = `btn btn-sm ${tab === "app" ? "btn-primary" : "btn-secondary"}`;
  document.getElementById("careerTabResume").className = `btn btn-sm ${tab === "resume" ? "btn-primary" : "btn-secondary"}`;
}

function setupCareerOsSim() {
  const evalBtn = document.getElementById("runCareerEvalBtn");
  const evalBox = document.getElementById("careerEvalBox");
  const scoreBadge = document.getElementById("careerScoreBadge");

  if (evalBtn) {
    evalBtn.onclick = () => {
      evalBtn.disabled = true;
      evalBtn.textContent = "⏳ Evaluating schema...";
      evalBox.innerHTML = `<div class="console-line info">> Validating response against Pydantic schema InterviewCritique...</div>`;

      setTimeout(() => {
        evalBtn.disabled = false;
        evalBtn.textContent = "🤖 Evaluate Answer with PydanticAI";
        scoreBadge.textContent = "Score: 9.4 / 10";
        scoreBadge.style.color = "var(--accent-emerald)";

        evalBox.innerHTML = `
          <div class="console-line success">> Pydantic Validation Passed (Structured Output)</div>
          <div style="margin-top:0.5rem; line-height:1.6; color:#e2e8f0;">
            <strong>Technical Clarity:</strong> 9.5/10<br>
            <strong>Architectural Soundness:</strong> 9.2/10<br>
            <strong>Agent Critique:</strong> Excellent mention of event-driven Kafka and asynchronous Celery workers. To make this exceptional, highlight cache invalidation policies (TTL vs write-through) for the Redis vector cache.
          </div>
        `;
      }, 700);
    };
  }

  const rewriteBtn = document.getElementById("rewriteBulletBtn");
  if (rewriteBtn) {
    rewriteBtn.onclick = () => {
      const res = document.getElementById("tailoredResultBox");
      res.style.display = "block";
      res.innerHTML = `
        <span style="color:var(--accent-cyan); font-weight:600;">Optimized Google XYZ Format:</span><br>
        <em>"Architected async Python & FastAPI semantic retrieval microservice with ChromaDB, accelerating document search latency by 35% across 10,000+ enterprise queries."</em>
      `;
    };
  }
}

// -------------------------------------------------------------------
// Simulator 4: GitQuest
// -------------------------------------------------------------------
function getGitQuestSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">🎮 Cyberpunk Git Terminal Shell</div>
        <div class="preset-chips">
          <span class="preset-chip" onclick="executeGitCmd('help')">help</span>
          <span class="preset-chip" onclick="executeGitCmd('git status')">git status</span>
          <span class="preset-chip" onclick="executeGitCmd('git add .')">git add .</span>
          <span class="preset-chip" onclick="executeGitCmd('git commit -m &quot;patch reactor core&quot;')">git commit</span>
          <span class="preset-chip" onclick="executeGitCmd('git push origin main')">git push</span>
        </div>
      </div>
      <div class="terminal-window">
        <div class="terminal-titlebar">
          <div class="terminal-dots"><span></span><span></span><span></span></div>
          <span>gitquest@cyberpunk-mainframe: ~/reactor-core (main)</span>
          <span>CYBER-DECK v2.4</span>
        </div>
        <div class="terminal-body" id="gitTerminalBody">
          <div style="color:var(--accent-cyan);">=== [GITQUEST CYBER-MISSION 01] ===</div>
          <div style="color:#94a3b8; margin:0.35rem 0;">WARNING: Reactor core containment breach detected in subsystem /core/coolant.py!</div>
          <div style="color:#94a3b8;">Execute authentic Git commands below to stage repairs and deploy the hotfix. Type <strong>help</strong> for assistance.</div>
        </div>
        <div class="terminal-prompt" style="padding:0.75rem 1rem; background:#070a12; border-top:1px solid rgba(255,255,255,0.06);">
          <span class="prompt-symbol">cyber@gitquest:~$</span>
          <input type="text" id="gitTerminalInput" class="terminal-input" placeholder="Type a git command (e.g., git status)..." autofocus>
        </div>
      </div>
    </div>
  `;
}

let gitQuestState = {
  modified: ["subsystem/coolant_fix.py", "security/firewall_bypass.sh"],
  staged: [],
  committed: false
};

function executeGitCmd(cmd) {
  const input = document.getElementById("gitTerminalInput");
  if (input) {
    input.value = cmd;
    runGitTerminalCommand(cmd);
    input.value = "";
  }
}

function setupGitQuestSim() {
  const input = document.getElementById("gitTerminalInput");
  if (!input) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value.trim();
      if (val) {
        runGitTerminalCommand(val);
        input.value = "";
      }
    }
  });
}

function runGitTerminalCommand(raw) {
  const term = document.getElementById("gitTerminalBody");
  if (!term) return;

  term.innerHTML += `<div style="color:#f1f5f9; margin-top:0.4rem;"><span style="color:var(--accent-cyan);">cyber@gitquest:~$</span> ${raw}</div>`;

  const cmd = raw.toLowerCase().trim();

  if (cmd === "help") {
    term.innerHTML += `
      <div style="color:#cbd5e1; margin-left:1rem;">
        Available Commands:<br>
        - <strong>git status</strong>: View modified files and branch state<br>
        - <strong>git add &lt;file&gt; / git add .</strong>: Stage modified security patches<br>
        - <strong>git commit -m "&lt;msg&gt;"</strong>: Record changes to local mainframe DAG<br>
        - <strong>git push origin main</strong>: Deploy patches and restore core stability<br>
        - <strong>git log</strong>: View commit DAG history<br>
        - <strong>clear</strong>: Clear terminal buffer
      </div>
    `;
  } else if (cmd === "clear") {
    term.innerHTML = `<div style="color:var(--accent-cyan);">=== [GITQUEST TERMINAL CLEARED] ===</div>`;
  } else if (cmd === "git status") {
    if (gitQuestState.staged.length > 0) {
      term.innerHTML += `
        <div style="color:#38bdf8;">On branch main<br>Changes to be committed:</div>
        <div style="color:var(--accent-emerald); margin-left:1rem;">${gitQuestState.staged.map(f => `modified:   ${f}`).join("<br>")}</div>
      `;
    } else if (gitQuestState.modified.length > 0) {
      term.innerHTML += `
        <div style="color:#38bdf8;">On branch main<br>Changes not staged for commit:</div>
        <div style="color:#f43f5e; margin-left:1rem;">${gitQuestState.modified.map(f => `modified:   ${f}`).join("<br>")}</div>
        <div style="color:#94a3b8; font-size:0.8rem;">(use "git add &lt;file&gt;..." to update what will be committed)</div>
      `;
    } else {
      term.innerHTML += `<div style="color:var(--accent-emerald);">nothing to commit, working tree clean</div>`;
    }
  } else if (cmd.startsWith("git add")) {
    gitQuestState.staged = [...gitQuestState.modified];
    gitQuestState.modified = [];
    term.innerHTML += `<div style="color:var(--accent-emerald);">✓ Successfully staged ${gitQuestState.staged.length} files to staging index!</div>`;
  } else if (cmd.startsWith("git commit")) {
    if (gitQuestState.staged.length === 0) {
      term.innerHTML += `<div style="color:#f43f5e;">fatal: no changes added to commit (use "git add")</div>`;
    } else {
      gitQuestState.committed = true;
      gitQuestState.staged = [];
      term.innerHTML += `
        <div style="color:var(--accent-emerald);">[main 9d4f21b] patch reactor core containment</div>
        <div style="color:#94a3b8;"> 2 files changed, 48 insertions(+), 12 deletions(-)</div>
      `;
    }
  } else if (cmd === "git push" || cmd === "git push origin main") {
    if (!gitQuestState.committed) {
      term.innerHTML += `<div style="color:#f43f5e;">Everything up-to-date (no local commits to push).</div>`;
    } else {
      term.innerHTML += `
        <div style="color:var(--accent-cyan);">Enumerating objects: 5, done.</div>
        <div style="color:var(--accent-cyan);">Writing objects: 100% (5/5), 1.2 KiB | 1.2 MiB/s, done.</div>
        <div style="color:var(--accent-cyan);">To https://github.com/cyber-station/reactor-core.git<br>   3a1e482..9d4f21b  main -> main</div>
        <div style="color:var(--accent-emerald); font-weight:700; margin-top:0.4rem;">🎉 MISSION COMPLETE: Reactor core containment secured! Warp drive operational!</div>
      `;
    }
  } else if (cmd === "git log") {
    term.innerHTML += `
      <div style="color:#f59e0b;">commit 9d4f21b892a0194821a (HEAD -> main)</div>
      <div style="color:#cbd5e1;">Author: CyberOperative &lt;cyber@gitquest.io&gt;<br>Date:   Sat Oct 3 12:45:00 2026 +0530<br><br>    patch reactor core containment</div>
    `;
  } else {
    term.innerHTML += `<div style="color:#f43f5e;">gitquest: command not recognized: "${raw}". Type "help" for valid commands.</div>`;
  }

  term.scrollTop = term.scrollHeight;
}

// -------------------------------------------------------------------
// Simulator 5: ScholarGuard-AI
// -------------------------------------------------------------------
function getScholarGuardSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">🛡️ Academic Integrity & AI Writing Pattern Scanner</div>
        <div class="preset-chips">
          <span class="preset-chip" onclick="setScholarPreset('original')">Preset: Original Thesis</span>
          <span class="preset-chip" onclick="setScholarPreset('paraphrased')">Preset: Paraphrased Text</span>
          <span class="preset-chip" onclick="setScholarPreset('ai')">Preset: 100% AI Generated</span>
        </div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Academic Submission Document</label>
          <textarea id="scholarInput" class="textarea-custom" style="min-height:140px;">Deep residual neural networks ease the optimization of architectures that are substantially deeper than previous generations. By explicitly reformulating the layers as learning residual functions with reference to the layer inputs, empirical evidence demonstrates superior convergence properties.</textarea>
          <button class="btn btn-primary" id="runScholarBtn">
            🔎 Run Multi-Source Cross-Check
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Integrity Report</span>
            <span id="scholarVerdict">Verdict: --</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
            <div style="padding:0.75rem; background:var(--bg-input); border-radius:6px;">
              <span style="font-size:0.75rem; color:var(--text-dim);">ORIGINALITY SCORE</span>
              <div id="scholarOrigVal" style="font-size:1.5rem; font-weight:700; color:var(--accent-emerald);">94.2%</div>
            </div>
            <div style="padding:0.75rem; background:var(--bg-input); border-radius:6px;">
              <span style="font-size:0.75rem; color:var(--text-dim);">SYNTHETIC (AI) ENTROPY</span>
              <div id="scholarAiVal" style="font-size:1.5rem; font-weight:700; color:var(--accent-cyan);">12.5%</div>
            </div>
          </div>
          <div class="console-box" id="scholarConsole">
            <div class="console-line info">> Cross-referencing against Crossref, arXiv, and Semantic Scholar...</div>
            <div class="console-line dim">> Awaiting document verification...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setScholarPreset(type) {
  const input = document.getElementById("scholarInput");
  if (type === "original") {
    input.value = "In this research, we introduce a novel domain-adapted attention mechanism specifically tailored for low-resource biomedical terminology translation.";
  } else if (type === "paraphrased") {
    input.value = "Deep residual neural networks ease the optimization of architectures that are substantially deeper than previous generations through shortcut connections.";
  } else if (type === "ai") {
    input.value = "In today's fast-paced digital era, it is paramount to understand the intricate nuances of artificial intelligence. Furthermore, seamless integration plays a vital role.";
  }
}

function setupScholarGuardSim() {
  const btn = document.getElementById("runScholarBtn");
  if (!btn) return;

  btn.onclick = () => {
    btn.disabled = true;
    btn.textContent = "⏳ Analyzing Perplexity & Vectors...";
    const consoleEl = document.getElementById("scholarConsole");
    const verdict = document.getElementById("scholarVerdict");
    const orig = document.getElementById("scholarOrigVal");
    const ai = document.getElementById("scholarAiVal");

    consoleEl.innerHTML = `<div class="console-line info">> Tokenizing into sentence boundaries...</div>`;

    setTimeout(() => {
      consoleEl.innerHTML += `<div class="console-line">> Calculating semantic embedding distance with all-MiniLM-L6-v2...</div>`;
      consoleEl.innerHTML += `<div class="console-line">> Evaluating token perplexity and burstiness...</div>`;
    }, 400);

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "🔎 Run Multi-Source Cross-Check";

      const val = document.getElementById("scholarInput").value;
      if (val.includes("shortcut connections") || val.includes("Deep residual")) {
        verdict.textContent = "Flagged: High Overlap";
        verdict.style.color = "var(--accent-rose)";
        orig.textContent = "18.4%";
        orig.style.color = "var(--accent-rose)";
        ai.textContent = "42.0%";
        consoleEl.innerHTML += `
          <div class="console-line warn">> Potential Match: "Deep Residual Learning for Image Recognition" (He et al., 2015)</div>
          <div class="console-line warn">> Cosine Similarity: 0.942 (Citation required)</div>
        `;
      } else if (val.includes("fast-paced digital era")) {
        verdict.textContent = "Flagged: AI Generated";
        verdict.style.color = "var(--accent-amber)";
        orig.textContent = "88.0%";
        orig.style.color = "var(--accent-emerald)";
        ai.textContent = "98.2%";
        ai.style.color = "var(--accent-rose)";
        consoleEl.innerHTML += `
          <div class="console-line warn">> Low perplexity variance detected (Robotic uniform token distribution)</div>
          <div class="console-line warn">> 98.2% probability of synthetic LLM generation</div>
        `;
      } else {
        verdict.textContent = "Verified: Clean";
        verdict.style.color = "var(--accent-emerald)";
        orig.textContent = "96.8%";
        orig.style.color = "var(--accent-emerald)";
        ai.textContent = "8.4%";
        consoleEl.innerHTML += `<div class="console-line success">> No significant verbatim or paraphrased matches detected across indexed literature!</div>`;
      }
    }, 900);
  };
}

// -------------------------------------------------------------------
// Simulator 6: hirepilot-ai
// -------------------------------------------------------------------
function getHirePilotSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">🎯 CAG Resume + Job Description Optimization Engine</div>
        <div class="preset-chips">
          <span class="preset-chip" onclick="setHirePreset('ai')">Target: Senior AI Engineer</span>
          <span class="preset-chip" onclick="setHirePreset('fs')">Target: Full Stack Python</span>
        </div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Target Job Description (JD)</label>
          <textarea id="hireJd" class="textarea-custom">Looking for a Senior AI Engineer experienced in Python, LangChain, ChromaDB vector stores, FastAPI async microservices, and Docker containerization.</textarea>
          <label class="input-label">Current Candidate Resume Excerpt</label>
          <textarea id="hireResume" class="textarea-custom">Developed backend APIs in Python and helped build RAG search applications with vector databases.</textarea>
          <button class="btn btn-primary" id="runHireBtn">
            ⚡ Run Context-Augmented Match & Rewriter
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>CAG Analysis & Delta</span>
            <span id="hireMatchScore">Match Score: --</span>
          </div>
          <div class="console-box" id="hireConsole" style="min-height:220px;">
            <div class="console-line info">> Context-Augmented Generation agent ready</div>
            <div class="console-line dim">> Awaiting resume + JD comparison...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setHirePreset(type) {
  const jd = document.getElementById("hireJd");
  if (type === "ai") {
    jd.value = "Looking for a Senior AI Engineer experienced in Python, LangChain, ChromaDB vector stores, FastAPI async microservices, and Docker containerization.";
  } else {
    jd.value = "Seeking a Full Stack Python Engineer with React, TypeScript, PostgreSQL, and REST API development.";
  }
}

function setupHirePilotSim() {
  const btn = document.getElementById("runHireBtn");
  if (!btn) return;

  btn.onclick = () => {
    btn.disabled = true;
    btn.textContent = "⏳ Running CAG Optimization...";
    const score = document.getElementById("hireMatchScore");
    const consoleEl = document.getElementById("hireConsole");

    consoleEl.innerHTML = `<div class="console-line info">> Extracting entity requirements from target JD...</div>`;

    setTimeout(() => {
      consoleEl.innerHTML += `<div class="console-line">> Cross-referencing candidate skill vector...</div>`;
      consoleEl.innerHTML += `<div class="console-line warn">> Missing Keywords identified: [Docker, FastAPI, Scalability]</div>`;
    }, 350);

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "⚡ Run Context-Augmented Match & Rewriter";
      score.textContent = "Match: 91.5% (+24%)";
      score.style.color = "var(--accent-emerald)";

      consoleEl.innerHTML += `
        <div style="margin-top:0.5rem; padding:0.75rem; background:rgba(16,185,129,0.1); border-left:3px solid var(--accent-emerald); border-radius:4px; color:#f1f5f9;">
          <strong>CAG Optimized Accomplishment Bullet:</strong><br>
          <em>"Architected async FastAPI RAG pipelines utilizing ChromaDB and LangChain within Docker containers, accelerating enterprise document query throughput by 40%."</em>
        </div>
      `;
    }, 850);
  };
}

// -------------------------------------------------------------------
// Simulator 7: BookSense-ML
// -------------------------------------------------------------------
function getBookSenseSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">📚 TF-IDF + Cosine Similarity Book Recommender</div>
        <div class="preset-chips">
          <span class="preset-chip" onclick="setBookSeed('Dune')">Seed: Dune</span>
          <span class="preset-chip" onclick="setBookSeed('1984')">Seed: 1984</span>
          <span class="preset-chip" onclick="setBookSeed('The Pragmatic Programmer')">Seed: Pragmatic Programmer</span>
        </div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Select Seed Book Title</label>
          <input type="text" id="bookInput" class="input-custom" value="Dune">
          
          <label class="input-label" style="margin-top:0.75rem;">Minimum Similarity Threshold (<span id="bookSimThresh">0.70</span>)</label>
          <input type="range" id="bookRange" min="0.5" max="0.95" step="0.05" value="0.7" style="width:100%;">

          <button class="btn btn-primary" id="runBookBtn" style="margin-top:0.75rem;">
            🔍 Compute Vector Similarity
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Recommended Catalog</span>
            <span id="bookCount">3 Matches</span>
          </div>
          <div id="bookResults" style="display:flex; flex-direction:column; gap:0.5rem; max-height:240px; overflow-y:auto;">
            <div style="padding:0.75rem; background:#05070d; border-radius:6px; border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong>Foundation</strong> <span style="font-size:0.8rem; color:var(--text-dim);">by Isaac Asimov</span>
                <div style="font-size:0.75rem; color:var(--accent-cyan);">Sci-Fi / Space Opera / Galactic Empire</div>
              </div>
              <span class="tech-tag" style="color:var(--accent-emerald);">0.892 Cosine</span>
            </div>
            <div style="padding:0.75rem; background:#05070d; border-radius:6px; border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong>Hyperion</strong> <span style="font-size:0.8rem; color:var(--text-dim);">by Dan Simmons</span>
                <div style="font-size:0.75rem; color:var(--accent-cyan);">Sci-Fi / Philosophy / Epic Pilgrimage</div>
              </div>
              <span class="tech-tag" style="color:var(--accent-emerald);">0.865 Cosine</span>
            </div>
            <div style="padding:0.75rem; background:#05070d; border-radius:6px; border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong>Children of Dune</strong> <span style="font-size:0.8rem; color:var(--text-dim);">by Frank Herbert</span>
                <div style="font-size:0.75rem; color:var(--accent-cyan);">Sci-Fi / Political Intrigue</div>
              </div>
              <span class="tech-tag" style="color:var(--accent-emerald);">0.841 Cosine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setBookSeed(title) {
  const input = document.getElementById("bookInput");
  if (input) input.value = title;
}

function setupBookSenseSim() {
  const btn = document.getElementById("runBookBtn");
  const range = document.getElementById("bookRange");
  const thresh = document.getElementById("bookSimThresh");

  if (range && thresh) {
    range.oninput = (e) => {
      thresh.textContent = parseFloat(e.target.value).toFixed(2);
    };
  }

  if (btn) {
    btn.onclick = () => {
      const title = document.getElementById("bookInput").value;
      const res = document.getElementById("bookResults");

      if (title.toLowerCase().includes("1984")) {
        res.innerHTML = `
          <div style="padding:0.75rem; background:#05070d; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
            <div><strong>Brave New World</strong> <span style="font-size:0.8rem; color:var(--text-dim);">by Aldous Huxley</span></div>
            <span class="tech-tag" style="color:var(--accent-emerald);">0.912 Cosine</span>
          </div>
          <div style="padding:0.75rem; background:#05070d; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
            <div><strong>Fahrenheit 451</strong> <span style="font-size:0.8rem; color:var(--text-dim);">by Ray Bradbury</span></div>
            <span class="tech-tag" style="color:var(--accent-emerald);">0.874 Cosine</span>
          </div>
        `;
      } else {
        res.innerHTML = `
          <div style="padding:0.75rem; background:#05070d; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
            <div><strong>Foundation</strong> <span style="font-size:0.8rem; color:var(--text-dim);">by Isaac Asimov</span></div>
            <span class="tech-tag" style="color:var(--accent-emerald);">0.892 Cosine</span>
          </div>
          <div style="padding:0.75rem; background:#05070d; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
            <div><strong>Hyperion</strong> <span style="font-size:0.8rem; color:var(--text-dim);">by Dan Simmons</span></div>
            <span class="tech-tag" style="color:var(--accent-emerald);">0.865 Cosine</span>
          </div>
        `;
      }
    };
  }
}

// -------------------------------------------------------------------
// Simulator 8: KnowledgeVault-AI
// -------------------------------------------------------------------
function getKnowledgeVaultSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">🎙️ Multimodal Box Content + Whisper Audio QA</div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Select Ingested Cloud Asset</label>
          <select class="select-custom" id="kvAssetSelect">
            <option>Audio: Sprint_42_Architecture_Review.mp4 (Whisper ASR)</option>
            <option>PDF: SOC2_Compliance_Audit_2026.pdf (Document)</option>
          </select>
          <label class="input-label" style="margin-top:0.75rem;">Natural Language Question</label>
          <input type="text" id="kvQuery" class="input-custom" value="What decision was made regarding database sharding?">
          <button class="btn btn-primary" id="runKvBtn" style="margin-top:0.75rem;">
            🔍 Search Timestamped Audio Vectors
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Synthesized Response</span>
            <span id="kvTimestamp">Timestamp: 00:14:22</span>
          </div>
          <div class="console-box" id="kvConsole">
            <div class="console-line info">> ChromaDB indexed with Whisper segmented timestamps</div>
            <div class="console-line">> Click 'Search Timestamped Audio Vectors' to query...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupKnowledgeVaultSim() {
  const btn = document.getElementById("runKvBtn");
  if (!btn) return;

  btn.onclick = () => {
    btn.disabled = true;
    btn.textContent = "⏳ Searching Audio Vectors...";
    const consoleEl = document.getElementById("kvConsole");

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "🔍 Search Timestamped Audio Vectors";
      consoleEl.innerHTML = `
        <div class="console-line success">> Audio Segment Match [Confidence: 0.941]</div>
        <div class="console-line warn">> Source: Sprint_42_Architecture_Review.mp4 @ 00:14:22 - 00:15:10</div>
        <div style="margin-top:0.5rem; line-height:1.6; color:#f1f5f9; padding:0.5rem; background:rgba(6,182,212,0.1); border-radius:4px;">
          <strong>Synthesized Audio Insight:</strong><br>
          Lead Engineer (00:14:38): <em>"We agreed to delay manual sharding and instead leverage Citus on PostgreSQL, as our current write throughput is well under 15,000 IOPS."</em>
        </div>
      `;
    }, 600);
  };
}

// -------------------------------------------------------------------
// Simulator 9: terminal-skill-craft
// -------------------------------------------------------------------
function getTerminalCraftSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">🛠️ Agent Skill YAML Linter & Registry</div>
        <div class="preset-chips">
          <span class="preset-chip" onclick="setSkillPreset('valid')">Valid Skill Schema</span>
          <span class="preset-chip" onclick="setSkillPreset('invalid')">Trigger Error</span>
        </div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">SKILL.md Frontmatter & Ruleset</label>
          <textarea id="skillYamlInput" class="textarea-custom" style="font-family:var(--font-mono); font-size:0.82rem; min-height:160px;">---
name: fastapi-rag-agent
description: Expert skill for designing low-latency RAG pipelines with FastAPI
version: 1.0.0
tools:
  - run_command
  - view_file
---

# Instructions
1. Always implement async route handlers in FastAPI.
2. Ensure vector embeddings are cached in Redis.</textarea>
          <button class="btn btn-primary" id="lintSkillBtn">
            🛡️ Lint & Validate Skill Manifest
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>AST Diagnostics</span>
            <span id="skillStatus">Status: Ready</span>
          </div>
          <div class="console-box" id="skillConsole">
            <div class="console-line info">> Agent Rules Engine Linter initialized</div>
            <div class="console-line dim">> Ready to parse skill AST...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setSkillPreset(type) {
  const input = document.getElementById("skillYamlInput");
  if (type === "valid") {
    input.value = `---\nname: fastapi-rag-agent\ndescription: Expert skill for designing low-latency RAG pipelines\nversion: 1.0.0\ntools:\n  - run_command\n  - view_file\n---\n\n# Instructions\n1. Always implement async route handlers in FastAPI.`;
  } else {
    input.value = `---\nname: \ndescription:\n# Missing required frontmatter fields!\n---`;
  }
}

function setupTerminalCraftSim() {
  const btn = document.getElementById("lintSkillBtn");
  if (!btn) return;

  btn.onclick = () => {
    const val = document.getElementById("skillYamlInput").value;
    const consoleEl = document.getElementById("skillConsole");
    const status = document.getElementById("skillStatus");

    if (val.includes("name: \n") || !val.includes("version:")) {
      status.textContent = "Lint: 2 Errors Found";
      status.style.color = "var(--accent-rose)";
      consoleEl.innerHTML = `
        <div class="console-line" style="color:var(--accent-rose);">> ERROR: 'name' field cannot be empty.</div>
        <div class="console-line" style="color:var(--accent-rose);">> ERROR: Missing required 'version' semver tag.</div>
        <div class="console-line warn">> WARNING: No tools registered in allowed capability array.</div>
      `;
    } else {
      status.textContent = "Lint: All Checks Passed";
      status.style.color = "var(--accent-emerald)";
      consoleEl.innerHTML = `
        <div class="console-line success">> ✓ Valid YAML frontmatter AST</div>
        <div class="console-line success">> ✓ Skill Name: 'fastapi-rag-agent'</div>
        <div class="console-line success">> ✓ 2 Registered Agent Tools: [run_command, view_file]</div>
        <div class="console-line info">> Manifest successfully bundled for Antigravity Agent Runtime!</div>
      `;
    }
  };
}

// -------------------------------------------------------------------
// Simulator 10: RAG-QA-Platform
// -------------------------------------------------------------------
function getRagQaSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">📖 LangChain Multi-Document QA Assistant</div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Indexed PDF Library</label>
          <select class="select-custom">
            <option>Enterprise_Security_Architecture_2026.pdf (124 pages)</option>
            <option>Kubernetes_Microservices_Deployment.pdf (88 pages)</option>
          </select>
          <label class="input-label" style="margin-top:0.75rem;">Question</label>
          <input type="text" id="ragQaInput" class="input-custom" value="What encryption standard is enforced for data at rest?">
          <button class="btn btn-primary" id="runRagQaBtn" style="margin-top:0.75rem;">
            ⚡ Ask LangChain Assistant
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Verified Chunk & Answer</span>
            <span>ChromaDB</span>
          </div>
          <div class="console-box" id="ragQaConsole">
            <div class="console-line info">> Vector Store loaded with 482 semantic chunks</div>
            <div class="console-line dim">> Awaiting query...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupRagQaSim() {
  const btn = document.getElementById("runRagQaBtn");
  if (!btn) return;

  btn.onclick = () => {
    btn.disabled = true;
    btn.textContent = "⏳ Querying FAISS / Chroma...";
    const consoleEl = document.getElementById("ragQaConsole");

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "⚡ Ask LangChain Assistant";
      consoleEl.innerHTML = `
        <div class="console-line success">> Context Passage Retrieved (Page 24, § 4.2):</div>
        <div class="console-line dim">  "...all persistent customer data stores must utilize AES-256 GCM encryption at rest with KMS managed keys..."</div>
        <div style="margin-top:0.5rem; padding:0.5rem; background:rgba(6,182,212,0.1); border-radius:4px; color:#f1f5f9;">
          <strong>Answer:</strong> Data at rest is strictly encrypted using <strong>AES-256 GCM</strong> with automatic key rotation managed via AWS KMS.
        </div>
      `;
    }, 600);
  };
}

// -------------------------------------------------------------------
// Simulator 11: StegoFusion
// -------------------------------------------------------------------
function getStegoFusionSimHTML() {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">🔒 Dual-Carrier Cryptographic Steganography Lab</div>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Confidential Secret Payload</label>
          <input type="text" id="stegoSecret" class="input-custom" value="TOP_SECRET_AUTH_KEY_9921">
          <label class="input-label" style="margin-top:0.75rem;">Carrier Image</label>
          <div style="height:110px; background:#12192c; border-radius:6px; display:flex; align-items:center; justify-content:center; color:var(--text-dim); border:1px dashed var(--border-subtle);">
            <span>🖼️ Carrier: satellite_recon_04.png (1024x1024)</span>
          </div>
          <button class="btn btn-primary" id="runStegoBtn" style="margin-top:0.75rem;">
            🔐 Encrypt (RSA-2048 + AES-256) & Hide
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Steganalysis & PSNR Metrics</span>
            <span id="stegoPsnr">PSNR: --</span>
          </div>
          <div class="console-box" id="stegoConsole">
            <div class="console-line info">> Dual-carrier deep residual network ready</div>
            <div class="console-line dim">> Awaiting encryption payload...</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupStegoFusionSim() {
  const btn = document.getElementById("runStegoBtn");
  if (!btn) return;

  btn.onclick = () => {
    btn.disabled = true;
    btn.textContent = "⏳ Embedding Entropy...";
    const psnr = document.getElementById("stegoPsnr");
    const consoleEl = document.getElementById("stegoConsole");

    consoleEl.innerHTML = `<div class="console-line info">> Generating 256-bit AES symmetric session key...</div>`;

    setTimeout(() => {
      consoleEl.innerHTML += `<div class="console-line">> Encrypting session key with RSA-2048 public key...</div>`;
      consoleEl.innerHTML += `<div class="console-line">> Deep Residual Network embedding ciphertext into high-frequency wavelets...</div>`;
    }, 350);

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "🔐 Encrypt (RSA-2048 + AES-256) & Hide";
      psnr.textContent = "PSNR: 43.8 dB (Sub-perceptible)";
      psnr.style.color = "var(--accent-emerald)";

      consoleEl.innerHTML += `
        <div class="console-line success">> ✓ Embedding complete! Carrier image degradation: undetectable.</div>
        <div class="console-line success">> Chi-square steganalysis test: PASSED (p = 0.994)</div>
        <div class="console-line">> Ciphertext embedded across 2,410 pixels in spatial residual layer.</div>
      `;
    }, 850);
  };
}

// -------------------------------------------------------------------
// Generic Fallback Domain Simulator
// -------------------------------------------------------------------
function getGenericDomainSimHTML(project) {
  return `
    <div class="simulator-card">
      <div class="simulator-toolbar">
        <div class="simulator-title">⚡ Interactive ${project.name} Simulation</div>
        <span class="tech-tag">${project.badge}</span>
      </div>
      <div class="simulator-grid">
        <div class="sim-pane">
          <label class="input-label">Simulation Parameters</label>
          <input type="text" class="input-custom" value="Active test session: ${project.name}">
          <button class="btn btn-primary" id="runGenericSimBtn" style="margin-top:0.75rem;">
            ⚡ Run Test Pipeline
          </button>
        </div>
        <div class="sim-pane">
          <div class="sim-pane-header">
            <span>Execution Console</span>
            <span>Local Testbench</span>
          </div>
          <div class="console-box" id="genericConsole">
            <div class="console-line info">> Initializing ${project.name} execution environment...</div>
            <div class="console-line">> Architecture: ${project.pipeline.map(p => p.title).join(" -> ")}</div>
            <div class="console-line success">> System operational! Click 'Run Test Pipeline' to execute.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupGenericDomainSim(project) {
  const btn = document.getElementById("runGenericSimBtn");
  if (!btn) return;

  btn.onclick = () => {
    const consoleEl = document.getElementById("genericConsole");
    btn.disabled = true;
    btn.textContent = "⏳ Running...";

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "⚡ Run Test Pipeline";
      consoleEl.innerHTML += `
        <div class="console-line success">> Test passed successfully!</div>
        <div class="console-line">> Latency: 42ms | Status: 200 OK</div>
      `;
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }, 500);
  };
}

// ===================================================================
// Architecture View Logic
// ===================================================================
function renderArchitecture(project) {
  const container = document.getElementById("archMountPoint");
  if (!container) return;

  container.innerHTML = `
    <div class="architecture-container">
      <div class="pipeline-diagram">
        <h3 style="font-size:1.15rem; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          🔄 End-to-End System Pipeline & Data Flow
        </h3>
        <div class="pipeline-flow">
          ${project.pipeline.map((step, idx) => `
            <div class="pipeline-node">
              <span class="node-icon">${step.icon}</span>
              <div class="node-title">${step.title}</div>
              <div class="node-tech">${step.tech}</div>
              <p style="font-size:0.78rem; color:var(--text-muted); margin-top:0.5rem; line-height:1.4;">${step.desc}</p>
            </div>
            ${idx < project.pipeline.length - 1 ? `<div class="pipeline-arrow">➔</div>` : ""}
          `).join("")}
        </div>
      </div>

      <div class="deep-dive-card">
        ${project.deepDive}
      </div>
    </div>
  `;
}

// ===================================================================
// API Specs & Code Walkthrough
// ===================================================================
function renderAPI(project) {
  const container = document.getElementById("apiMountPoint");
  if (!container) return;

  container.innerHTML = `
    <div>
      <h3 style="font-size:1.2rem; margin-bottom:1rem;">⚡ API Specification & Endpoint Schema</h3>
      ${project.apiEndpoints.map(ep => `
        <div class="api-spec-card">
          <div class="api-endpoint-header">
            <span class="http-method ${ep.method.toLowerCase()}">${ep.method}</span>
            <span class="http-path">${ep.path}</span>
            <span style="font-size:0.8rem; color:var(--text-dim); margin-left:auto;">${ep.desc}</span>
          </div>
          <div class="api-body">
            <div>
              <span class="input-label">Request Payload (JSON)</span>
              <pre class="code-block"><code>${escapeHTML(ep.request)}</code></pre>
            </div>
            <div>
              <span class="input-label">Response Payload (200 OK)</span>
              <pre class="code-block"><code>${escapeHTML(ep.response)}</code></pre>
            </div>
          </div>
        </div>
      `).join("")}

      <div class="file-tree-card" style="margin-top:2rem;">
        <h3 style="font-size:1.15rem; display:flex; align-items:center; gap:0.5rem;">
          📂 Core Source Code Structure (Direct GitHub Links)
        </h3>
        <p style="font-size:0.85rem; color:var(--text-dim); margin-top:0.25rem;">
          Click any file to inspect the actual implementation in the repository:
        </p>
        <ul class="file-tree">
          ${project.coreFiles.map(f => `
            <li class="file-tree-item">
              <a href="${REPO_BASE}/${project.repo}/blob/main/${f.path}" target="_blank" rel="noopener">
                📄 ${f.path}
              </a>
              <span class="file-tree-desc">— ${f.desc}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `;
}

// ===================================================================
// Quick Start & Local Run
// ===================================================================
function renderQuickStart(project) {
  const container = document.getElementById("quickMountPoint");
  if (!container) return;

  container.innerHTML = `
    <div class="deep-dive-card">
      <h3>💻 Quick Start: Run Locally</h3>
      <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1rem;">
        Clone the repository and spin up the environment with these terminal commands:
      </p>
      <div class="cmd-box">
        <pre class="cmd-text"><code>${escapeHTML(project.quickStart)}</code></pre>
        <button class="btn btn-secondary btn-sm" onclick="copyText('${escapeQuotes(project.quickStart)}', 'Commands copied to clipboard!')">
          📋 Copy
        </button>
      </div>

      <div style="margin-top:2rem; padding:1.25rem; background:#0e1422; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <strong style="color:var(--accent-cyan); font-size:0.95rem;">💡 Production Deployment Notes:</strong>
        <p style="font-size:0.875rem; color:var(--text-muted); margin-top:0.5rem; line-height:1.6;">
          For frontend applications like <strong>${project.name}</strong>, you can deploy in 1 click to Vercel or GitHub Pages. For Python / FastAPI / PyTorch backends, containerize with Docker using the provided Dockerfile.
        </p>
      </div>
    </div>
  `;
}

// ===================================================================
// Utility Functions
// ===================================================================
function copyDemoLink(projectId) {
  const host = window.location.origin + window.location.pathname;
  const link = `${host}?project=${projectId}`;
  copyText(link, `Live demo link copied! Ready to paste into GitHub repo.`);
}

function copyCurrentDemoLink() {
  if (activeProject) {
    copyDemoLink(activeProject.id);
  }
}

function copyText(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || "Copied to clipboard!");
  }).catch(() => {
    showToast("Copied text!");
  });
}

function showToast(msg) {
  let toast = document.getElementById("toastMsg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastMsg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${msg}</span>`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeQuotes(str) {
  return str.replace(/`/g, "\\`").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}
