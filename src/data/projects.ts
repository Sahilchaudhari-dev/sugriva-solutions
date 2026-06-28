export interface Project {
  id: string;
  title: string;
  description: string;
  domain: string;
  level: 'Advanced' | 'Medium';
  techStack: string[];
}

export const projects: Project[] = [
  // AI & ML - Advanced
  { id: '1', title: 'Autonomous AI Agent with Tool Use', description: 'A multi-step AI agent that uses tools like web search, code execution, and APIs to complete complex tasks autonomously.', domain: 'AI/ML', level: 'Advanced', techStack: ['Python', 'LangChain', 'OpenAI API', 'FastAPI'] },
  { id: '2', title: 'Multi-Modal AI System', description: 'A unified AI system that understands and responds to text, images, and audio inputs simultaneously using state-of-the-art models.', domain: 'AI/ML', level: 'Advanced', techStack: ['Python', 'Transformers', 'Whisper', 'CLIP'] },
  { id: '3', title: 'LLM Fine-tuning on Custom Dataset', description: 'Fine-tune a large language model on domain-specific data using efficient techniques like LoRA for custom use cases.', domain: 'AI/ML', level: 'Advanced', techStack: ['Python', 'HuggingFace', 'LoRA', 'PEFT'] },
  { id: '4', title: 'AI-Powered Code Review System', description: 'An AI tool that reviews code for bugs, security vulnerabilities, and best practices — automatically and in real time.', domain: 'AI/ML', level: 'Advanced', techStack: ['Python', 'GPT API', 'AST Parser', 'React'] },
  { id: '5', title: 'Generative AI Avatar Creator', description: 'Create hyper-realistic human avatars from text descriptions using cutting-edge diffusion models and ControlNet.', domain: 'AI/ML', level: 'Advanced', techStack: ['Python', 'Stable Diffusion', 'ControlNet', 'React'] },
  { id: '6', title: 'Real-time Deepfake Detection System', description: 'Detect manipulated videos and images in real-time using deep learning — built for trust and digital authenticity.', domain: 'AI/ML', level: 'Advanced', techStack: ['Python', 'PyTorch', 'OpenCV', 'CNN'] },
  // AI & ML - Medium
  { id: '7', title: 'Face Recognition Attendance System', description: 'Automated attendance system using facial recognition and live camera feed — no manual marking needed.', domain: 'AI/ML', level: 'Medium', techStack: ['Python', 'OpenCV', 'DeepFace', 'Flask'] },
  { id: '8', title: 'Resume Screening AI', description: 'AI system that ranks and filters resumes based on job descriptions using NLP and semantic similarity.', domain: 'AI/ML', level: 'Medium', techStack: ['Python', 'NLP', 'Sklearn', 'React'] },
  { id: '9', title: 'Plant Disease Detection (CNN)', description: 'Identify plant diseases from leaf images using Convolutional Neural Networks — helping farmers act fast.', domain: 'AI/ML', level: 'Medium', techStack: ['Python', 'TensorFlow', 'Keras', 'Flask'] },
  { id: '10', title: 'Fake News Detector', description: 'NLP model that classifies news articles as real or fake with confidence scores — fighting misinformation.', domain: 'AI/ML', level: 'Medium', techStack: ['Python', 'BERT', 'Flask', 'React'] },
  { id: '11', title: 'Object Detection with YOLO', description: 'Real-time object detection in images and video streams using the latest YOLOv8 model.', domain: 'AI/ML', level: 'Medium', techStack: ['Python', 'YOLOv8', 'OpenCV'] },
  { id: '12', title: 'AI Interview Coach', description: 'AI system that conducts mock interviews and gives detailed feedback on your answers and communication.', domain: 'AI/ML', level: 'Medium', techStack: ['Python', 'GPT API', 'Speech Recognition', 'React'] },
  // Web Dev - Advanced
  { id: '13', title: 'AI-Powered E-Commerce with Recommendation Engine', description: 'Full-stack e-commerce platform with AI-based product recommendations, smart search, and personalization.', domain: 'Web Development', level: 'Advanced', techStack: ['React', 'Node.js', 'MongoDB', 'Python', 'ML'] },
  { id: '14', title: 'Real-time Collaborative Code Editor', description: 'Browser-based code editor with real-time multi-user collaboration — like VS Code Live Share, built from scratch.', domain: 'Web Development', level: 'Advanced', techStack: ['React', 'Node.js', 'WebSocket', 'Monaco Editor'] },
  { id: '15', title: 'AI Content Management System', description: 'CMS with AI-generated content suggestions, SEO optimization, and auto-tagging — content creation on autopilot.', domain: 'Web Development', level: 'Advanced', techStack: ['React', 'Node.js', 'GPT API', 'PostgreSQL'] },
  { id: '16', title: 'SaaS Dashboard with AI Analytics', description: 'Multi-tenant SaaS platform with AI-powered analytics and actionable business insights.', domain: 'Web Development', level: 'Advanced', techStack: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'] },
  // Web Dev - Medium
  { id: '17', title: 'Hospital Management System', description: 'Complete hospital management with patient records, appointments, billing, and doctor dashboards.', domain: 'Web Development', level: 'Medium', techStack: ['React', 'Node.js', 'MongoDB'] },
  { id: '18', title: 'College ERP Portal', description: 'End-to-end college ERP with student, faculty, and admin modules — handling everything from marks to attendance.', domain: 'Web Development', level: 'Medium', techStack: ['React', 'Node.js', 'MySQL'] },
  { id: '19', title: 'Job Portal with AI Resume Matcher', description: 'Job listing portal where AI matches candidates to job descriptions based on skills and experience.', domain: 'Web Development', level: 'Medium', techStack: ['React', 'Node.js', 'Python', 'MongoDB'] },
  { id: '20', title: 'Food Delivery App with AI Suggestions', description: 'Food delivery platform with AI-based food recommendations based on mood, history, and preferences.', domain: 'Web Development', level: 'Medium', techStack: ['React', 'Node.js', 'MongoDB', 'ML'] },
  // Data Science - Advanced
  { id: '21', title: 'AI-Powered Business Intelligence Dashboard', description: 'BI dashboard that uses AI to surface insights, anomalies, and forecasts automatically from raw business data.', domain: 'Data Science', level: 'Advanced', techStack: ['Python', 'Power BI', 'ML', 'FastAPI'] },
  { id: '22', title: 'Predictive Maintenance System (IoT + ML)', description: 'Predict equipment failures before they happen using IoT sensor data and machine learning models.', domain: 'Data Science', level: 'Advanced', techStack: ['Python', 'TensorFlow', 'MQTT', 'Grafana'] },
  { id: '23', title: 'Real-time Fraud Detection System', description: 'Detect financial fraud in real-time using ML models on live transaction data streams.', domain: 'Data Science', level: 'Advanced', techStack: ['Python', 'Kafka', 'Sklearn', 'FastAPI'] },
  { id: '24', title: 'NLP Legal Document Analyzer', description: 'AI system that reads, summarizes, and extracts key clauses from legal documents — making law accessible.', domain: 'Data Science', level: 'Advanced', techStack: ['Python', 'BERT', 'spaCy', 'React'] },
  // Data Science - Medium
  { id: '25', title: 'Customer Churn Predictor', description: 'Predict which customers are likely to leave using classification models and behavioral analytics.', domain: 'Data Science', level: 'Medium', techStack: ['Python', 'Sklearn', 'Pandas', 'Streamlit'] },
  { id: '26', title: 'IPL Match Winner Predictor', description: 'Predict IPL match outcomes using historical data, player stats, and machine learning.', domain: 'Data Science', level: 'Medium', techStack: ['Python', 'Sklearn', 'Streamlit'] },
  { id: '27', title: 'Sales Forecasting Dashboard', description: 'Forecast future sales using time-series analysis and ML with interactive visualizations.', domain: 'Data Science', level: 'Medium', techStack: ['Python', 'Prophet', 'Plotly', 'Streamlit'] },
  { id: '28', title: 'Twitter Sentiment Analyzer', description: 'Real-time Twitter sentiment analysis with live dashboard showing mood trends and topic analysis.', domain: 'Data Science', level: 'Medium', techStack: ['Python', 'Tweepy', 'VADER', 'Streamlit'] },
  // Cloud & DevOps - Advanced
  { id: '29', title: 'AI-Powered Auto-Scaling Cloud Infrastructure', description: 'Intelligent cloud infrastructure that scales based on AI-predicted traffic patterns — zero manual intervention.', domain: 'Cloud & DevOps', level: 'Advanced', techStack: ['AWS', 'Terraform', 'Python', 'ML'] },
  { id: '30', title: 'MLOps Pipeline (Train → Deploy → Monitor)', description: 'End-to-end MLOps pipeline for model training, deployment, and monitoring in production.', domain: 'Cloud & DevOps', level: 'Advanced', techStack: ['Python', 'MLflow', 'Docker', 'Kubernetes', 'AWS'] },
  { id: '31', title: 'Multi-Cloud Cost Optimizer using AI', description: 'AI tool that analyzes and recommends cost optimizations across AWS, GCP, and Azure simultaneously.', domain: 'Cloud & DevOps', level: 'Advanced', techStack: ['Python', 'AWS', 'GCP', 'Azure', 'React'] },
  // Cloud & DevOps - Medium
  { id: '32', title: 'CI/CD Pipeline with GitHub Actions', description: 'Complete CI/CD pipeline with automated testing, building, and deployment across environments.', domain: 'Cloud & DevOps', level: 'Medium', techStack: ['GitHub Actions', 'Docker', 'AWS'] },
  { id: '33', title: 'Docker + Kubernetes Deployment', description: 'Containerize and orchestrate a full-stack application using Docker and Kubernetes at scale.', domain: 'Cloud & DevOps', level: 'Medium', techStack: ['Docker', 'Kubernetes', 'Helm'] },
  { id: '34', title: 'Serverless API with AWS Lambda', description: 'Build and deploy a production-ready serverless REST API using AWS Lambda and API Gateway.', domain: 'Cloud & DevOps', level: 'Medium', techStack: ['Python', 'AWS Lambda', 'API Gateway', 'DynamoDB'] },
  // App Dev - Advanced
  { id: '35', title: 'AI Personal Finance Manager', description: 'Mobile app that tracks expenses, predicts spending patterns, and gives personalized AI financial advice.', domain: 'App Development', level: 'Advanced', techStack: ['React Native', 'Python', 'ML', 'FastAPI'] },
  { id: '36', title: 'Real-time Language Translator App', description: 'App that translates speech in real-time across 50+ languages with near-zero latency.', domain: 'App Development', level: 'Advanced', techStack: ['React Native', 'Whisper', 'Google Translate API'] },
  { id: '37', title: 'AI Health Diagnostic App', description: 'Symptom-based health diagnostic app powered by AI with doctor recommendations and health tracking.', domain: 'App Development', level: 'Advanced', techStack: ['React Native', 'Python', 'GPT API'] },
  // App Dev - Medium
  { id: '38', title: 'Expense Tracker with AI Insights', description: 'Track daily expenses and get AI-generated spending insights and monthly budget reports.', domain: 'App Development', level: 'Medium', techStack: ['React Native', 'Node.js', 'MongoDB'] },
  { id: '39', title: 'Fitness Tracker with AI Coach', description: 'Fitness tracking app with AI workout recommendations personalized to your goals and progress.', domain: 'App Development', level: 'Medium', techStack: ['React Native', 'Node.js', 'ML'] },
  { id: '40', title: 'Smart News Aggregator App', description: 'News app that uses AI to personalize your feed based on interests, reading habits, and sentiment.', domain: 'App Development', level: 'Medium', techStack: ['React Native', 'Python', 'NLP', 'FastAPI'] },
  // Cybersecurity - Advanced
  { id: '41', title: 'AI-Powered Intrusion Detection System', description: 'Network intrusion detection using deep learning on live traffic — catching threats before they strike.', domain: 'Cybersecurity', level: 'Advanced', techStack: ['Python', 'TensorFlow', 'Scapy', 'ELK Stack'] },
  { id: '42', title: 'Malware Classification using Deep Learning', description: 'Classify malware types from binary files using CNN — advanced threat intelligence for enterprises.', domain: 'Cybersecurity', level: 'Advanced', techStack: ['Python', 'PyTorch', 'PE Parser'] },
  { id: '43', title: 'AI Penetration Testing Tool', description: 'Automated penetration testing assistant powered by AI that identifies and reports vulnerabilities.', domain: 'Cybersecurity', level: 'Advanced', techStack: ['Python', 'Metasploit API', 'GPT API'] },
  // Cybersecurity - Medium
  { id: '44', title: 'Password Strength Analyzer & Generator', description: 'Analyze password strength and generate secure, memorable passwords with AI-based suggestions.', domain: 'Cybersecurity', level: 'Medium', techStack: ['Python', 'React', 'NLP'] },
  { id: '45', title: 'Phishing URL Detector', description: 'Detect phishing URLs and malicious links using ML classification in real-time.', domain: 'Cybersecurity', level: 'Medium', techStack: ['Python', 'Sklearn', 'Flask', 'React'] },
  { id: '46', title: 'Network Traffic Analyzer', description: 'Visualize and analyze network packets to identify suspicious activity and potential threats.', domain: 'Cybersecurity', level: 'Medium', techStack: ['Python', 'Scapy', 'Wireshark API', 'Streamlit'] },
];

export const domains = ['All', 'AI/ML', 'Web Development', 'Data Science', 'Cloud & DevOps', 'App Development', 'Cybersecurity'];
export const levels = ['All', 'Advanced', 'Medium'];

export const domainColors: Record<string, string> = {
  'AI/ML': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Web Development': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Data Science': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Cloud & DevOps': 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  'App Development': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Cybersecurity': 'bg-red-500/20 text-red-300 border-red-500/30',
};
