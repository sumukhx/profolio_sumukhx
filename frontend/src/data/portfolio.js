export const personalInfo = {
  name: "Sumukh Chhabra",
  title: "AI Solutions Engineer",
  tagline: "Building intelligent systems for real-world applications",
  email: "sumukhchhabra10@gmail.com",
  phone: "+91-9870229945",
  github: "https://github.com/sumukhx",
  linkedin: "https://www.linkedin.com/in/sumukh-chhabra-23829428a/",
  profileImage: "https://customer-assets.emergentagent.com/job_52bac923-9173-4545-928b-0b454b9e3e5f/artifacts/xqm666iy_IMG_4367.JPG",
  resumeUrl: "https://customer-assets.emergentagent.com/job_52bac923-9173-4545-928b-0b454b9e3e5f/artifacts/quarn3xm_Profile.pdf"
};

export const summary = {
  title: "Overview",
  content: "I am a passionate and driven Computer Science student at Bennett University, currently in my 2nd year. As Vice President of the Bennett Undergraduate Research Society (BURS), I actively lead and contribute to various initiatives. My internships have provided me with hands-on experience in AI development, where I've built advanced systems ranging from facial recognition and drone detection to GPS-denied navigation and underwater mine detection. I'm particularly skilled in Python programming, machine learning, and computer vision. I thrive in challenging environments and am always eager to apply my technical expertise to solve real-world problems."
};

export const capabilities = [
  {
    category: "AI/ML Development",
    skills: [
      "Object Detection (YOLOv5, ResNet-50, VGG-16)",
      "Computer Vision & Sonar Imaging",
      "Multimodal Sensor Fusion",
      "NLP & Speech-to-Text (Whisper)",
      "LLM Integration & Automation"
    ]
  },
  {
    category: "Defense Systems",
    skills: [
      "GPS-Denied Navigation",
      "Underwater Mine Detection",
      "ISR & Intelligence Prediction",
      "AIS Analytics & Drone Detection",
      "Combat Management Systems"
    ]
  },
  {
    category: "Development Stack",
    skills: [
      "Python (Primary)",
      "TensorFlow / PyTorch",
      "GIS & Spatial Analysis",
      "Real-time Data Pipelines",
      "Field-ready Deployment"
    ]
  }
];

export const experiences = [
  {
    id: "netweb-tech",
    organization: "Netweb Technologies India Ltd",
    location: "New Delhi, India",
    role: "AI Solutions Intern (OEM Nvidia)",
    ministry: "Technology",
    dates: "Jan 2026 – Present",
    status: "active",
    context: "Working with NVIDIA OEM solutions to develop and implement AI-powered systems for enterprise applications.",
    responsibilities: [
      "Developing AI solutions leveraging NVIDIA's technology stack",
      "Implementing machine learning models for real-world business applications",
      "Collaborating with cross-functional teams on AI integration projects",
      "Optimizing AI workflows for production deployment"
    ],
    constraints: [
      "Enterprise-grade reliability requirements",
      "Scalability and performance optimization",
      "Integration with existing systems",
      "Production deployment constraints"
    ],
    technologies: [
      "NVIDIA AI Stack",
      "Python",
      "Machine Learning",
      "Deep Learning"
    ],
    impact: "Contributing to enterprise AI solutions deployment and optimization using NVIDIA's cutting-edge technology."
  },
  {
    id: "drdo-cair",
    organization: "DRDO CAIR",
    location: "Bengaluru",
    role: "AI Development Intern",
    ministry: "Ministry of Defence",
    dates: "Jun 2025 – Aug 2025",
    status: "completed",
    context: "Developed autonomous systems for GPS-denied operational environments where traditional navigation fails.",
    responsibilities: [
      "Developed AI-based navigation and surveillance modules for GPS-denied environments",
      "Designed ML pipelines for object detection, data fusion, and defence workflows",
      "Integrated multi-sensor autonomous systems for reliable field performance"
    ],
    constraints: [
      "GPS-denied operation",
      "Multi-sensor fusion complexity",
      "Field reliability requirements",
      "Real-time processing demands"
    ],
    technologies: [
      "YOLOv5",
      "Multimodal Fusion",
      "GIS Systems",
      "Python ML Pipelines"
    ],
    impact: "Built navigation system capable of autonomous operation in contested environments without satellite positioning."
  },
  {
    id: "indian-navy",
    organization: "Indian Navy",
    location: "Naval Command",
    role: "Machine Learning Intern",
    ministry: "Ministry of Defence",
    dates: "Dec 2024 – Jan 2025",
    status: "completed",
    context: "Focused on underwater threat detection and combat management system enhancements using deep learning.",
    responsibilities: [
      "Built object detection models using ResNet-50 and VGG-16 for sonar image datasets",
      "Developed Whisper-based speech-to-text tools for automated defence tasks",
      "Built an AI-powered Minutes-of-Meeting generator using LLMs",
      "Explored AR applications for Beyond Visual Range (BVR) vessel identification",
      "Contributed to H.A.W.K module development for Combat Management System"
    ],
    constraints: [
      "Sonar noise and image quality",
      "Real-time detection requirements",
      "Defence terminology accuracy",
      "Integration with CMS architecture"
    ],
    technologies: [
      "ResNet-50",
      "VGG-16",
      "Whisper STT",
      "LLM APIs",
      "AR Frameworks"
    ],
    impact: "Achieved high-accuracy mine detection from noisy sonar datasets. Automated meeting workflows for operational efficiency."
  },
  {
    id: "wesee",
    organization: "WESEE",
    location: "Defence Office",
    role: "Data Science Intern",
    ministry: "Ministry of Defence",
    dates: "May 2024 – Jul 2024",
    status: "completed",
    context: "First defense internship focused on facial recognition, maritime analytics, and early warning systems.",
    responsibilities: [
      "Developed a facial detection system for a Defence Office",
      "Conducted research on AIS analytics and drone detection systems",
      "Demonstrated Early Warning Fire Detection System (EWFS) to Naval Delegation"
    ],
    constraints: [
      "Real-time processing requirements",
      "Varying environmental conditions",
      "High accuracy demands for security applications"
    ],
    technologies: [
      "YOLOv5",
      "FaceNet",
      "AIS Data Processing",
      "Computer Vision"
    ],
    impact: "Successfully deployed facial detection system. Presented EWFS to senior naval officers demonstrating practical application."
  }
];

export const projects = [
  {
    id: "gps-denied-nav",
    title: "AI-based Navigation & Surveillance in GPS-Denied Environments",
    category: "Autonomous Systems",
    status: "Production",
    objective: "Enable autonomous navigation and threat detection in environments where GPS is unavailable or compromised.",
    description: "Built YOLOv5 + multi-modal fusion pipeline for detecting armed individuals and suspicious activity. Generated GIS-based situational awareness maps.",
    pipeline: {
      inputs: ["Camera Feed", "LIDAR Data", "Inertial Sensors", "Map Data"],
      model: "YOLOv5 + Multimodal Fusion",
      outputs: ["Threat Detection", "Navigation Path", "GIS Map Updates"]
    },
    engineeringChoices: [
      "Multimodal fusion for redundancy when single sensors fail",
      "YOLOv5 for real-time detection on edge hardware",
      "GIS integration for tactical situational awareness",
      "Kalman filtering for sensor fusion accuracy"
    ],
    technologies: ["YOLOv5", "Multimodal Fusion", "GIS", "Python"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "terror-prediction",
    title: "AI-Powered ISR & Prediction System for Terror Activities",
    category: "Intelligence & Surveillance",
    status: "Research",
    objective: "Predict high-risk zones for terror activities by fusing multiple intelligence sources.",
    description: "Designed AI platform combining GTD, SATP, live news, and GIS layers to predict high-risk zones. Built hotspot detection and forecasting dashboards using NLP + ML.",
    pipeline: {
      inputs: ["Global Terrorism Database", "SATP Data", "Live News APIs", "Historical Incidents"],
      model: "NLP + ML Forecasting",
      outputs: ["Hotspot Maps", "Risk Scores", "Predictive Alerts"]
    },
    engineeringChoices: [
      "Multi-source data fusion for comprehensive threat picture",
      "NLP for extracting actionable intelligence from unstructured text",
      "Temporal analysis for pattern recognition",
      "GIS visualization for operational planning"
    ],
    technologies: ["NLP", "ML Forecasting", "GIS", "Data Fusion"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "underwater-mine",
    title: "Underwater Mine Detection using Sonar Images",
    category: "Naval Systems",
    status: "Production",
    objective: "Detect underwater mines from sonar imagery with high accuracy despite noise and distortion.",
    description: "Applied ResNet-50 and VGG-16 for underwater mine detection. Achieved high-accuracy mine identification with annotated sonar data.",
    pipeline: {
      inputs: ["Sonar Images", "Annotated Dataset", "Environmental Metadata"],
      model: "ResNet-50 / VGG-16",
      outputs: ["Mine Classification", "Confidence Scores", "Location Data"]
    },
    engineeringChoices: [
      "Ensemble of ResNet-50 and VGG-16 for robust detection",
      "Data augmentation to handle varied sonar conditions",
      "Threshold tuning to minimize false positives",
      "Transfer learning from ImageNet with sonar-specific fine-tuning"
    ],
    technologies: ["ResNet-50", "VGG-16", "Sonar Processing", "Deep Learning"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "rail-kavach",
    title: "Rail Kavach – Train Collision Prevention",
    category: "Safety Systems",
    status: "Prototype",
    objective: "Prevent train collisions through automated detection and emergency braking.",
    description: "Developed YOLO + VGG16 + ResNet + LIDAR-based detection and auto-stop mechanism. Improved accuracy through multimodal fusion and YOLOv5 dataset formatting.",
    pipeline: {
      inputs: ["Camera Feed", "LIDAR", "Track Sensors", "Speed Data"],
      model: "YOLO + VGG16 + ResNet Ensemble",
      outputs: ["Obstacle Detection", "Distance Estimation", "Brake Commands"]
    },
    engineeringChoices: [
      "Multimodal fusion combining vision and LIDAR for reliability",
      "YOLOv5 formatting for optimized real-time inference",
      "Fail-safe design with redundant detection pathways",
      "Distance estimation for graduated braking response"
    ],
    technologies: ["YOLO", "VGG16", "ResNet", "LIDAR", "Python"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "hawk-module",
    title: "H.A.W.K Module",
    category: "Combat Management",
    status: "Production",
    objective: "Automate transcription and intent recognition for defense communication systems.",
    description: "Integrated Whisper for accurate transcription. Automated defence-term intent matching using NLP.",
    pipeline: {
      inputs: ["Audio Commands", "Defense Terminology Database"],
      model: "Whisper STT + NLP Intent Matcher",
      outputs: ["Transcriptions", "Command Classification", "CMS Integration"]
    },
    engineeringChoices: [
      "Whisper for robust speech recognition in noisy environments",
      "Custom NLP model trained on defense terminology",
      "Intent matching for automated CMS command execution",
      "Real-time processing with minimal latency"
    ],
    technologies: ["Whisper", "NLP", "Python", "CMS Integration"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "meet-flash",
    title: "MEET.FLASH",
    category: "Automation",
    status: "Production",
    objective: "Generate structured meeting summaries in real-time using STT and LLMs.",
    description: "Built Whisper-based real-time transcription module. Designed Mini-LLM workflows for structured summaries with 'Minutes in Minutes' turnaround.",
    pipeline: {
      inputs: ["Live Audio", "Speaker Metadata"],
      model: "Whisper + Mini-LLM",
      outputs: ["Transcripts", "Action Items", "Summary Documents"]
    },
    engineeringChoices: [
      "Real-time Whisper transcription with speaker diarization",
      "Mini-LLM for efficient on-device summarization",
      "Structured output formatting for immediate distribution",
      "Quality checks for accuracy before final delivery"
    ],
    technologies: ["Whisper", "LLM", "Real-time Processing"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "dhandrishti",
    title: "DhanDrishti Wallet",
    category: "Accessibility",
    status: "Prototype",
    objective: "Enable visually impaired users to identify currency denominations independently.",
    description: "Built OCR + CV system for banknote identification for the visually impaired. Added audio + haptic feedback output.",
    pipeline: {
      inputs: ["Camera Feed", "Banknote Images"],
      model: "OCR + Computer Vision",
      outputs: ["Denomination ID", "Audio Feedback", "Haptic Response"]
    },
    engineeringChoices: [
      "Edge-based OCR for offline operation",
      "Multi-angle detection for handling crumpled notes",
      "Audio feedback with regional language support",
      "Haptic patterns for discreet confirmation"
    ],
    technologies: ["OCR", "Computer Vision", "Audio Feedback", "Mobile Dev"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition System",
    category: "Security Systems",
    status: "Production",
    objective: "Deploy facial recognition for secure access control in defense facilities.",
    description: "Built full facial recognition system integrating YOLO detection + FaceNet embeddings. Developed UI frontend using HTML/CSS.",
    pipeline: {
      inputs: ["Camera Feed", "Known Face Database"],
      model: "YOLOv5 + FaceNet",
      outputs: ["Identity Match", "Confidence Score", "Access Decision"]
    },
    engineeringChoices: [
      "YOLOv5 for fast face detection preprocessing",
      "FaceNet embeddings for robust identification",
      "Threshold tuning for security vs usability balance",
      "Simple UI for operational ease"
    ],
    technologies: ["YOLOv5", "FaceNet", "HTML/CSS", "Python"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "reallyme",
    title: "ReallyMe Voice Cloning",
    category: "Audio ML",
    status: "Research",
    objective: "Clone voice characteristics with minimal training data for specialized applications.",
    description: "Built deep-learning-based voice cloning model. Implemented speaker adaptation + optimized TTS inference.",
    pipeline: {
      inputs: ["Speaker Audio Samples", "Target Text"],
      model: "Deep Learning TTS",
      outputs: ["Cloned Voice Output", "Audio Files"]
    },
    engineeringChoices: [
      "Speaker adaptation for few-shot learning",
      "Optimized inference for real-time generation",
      "Quality metrics for naturalness assessment",
      "Ethical constraints on usage scenarios"
    ],
    technologies: ["Deep Learning", "TTS", "Audio Processing"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  }
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "Bennett University",
  duration: "2023 – 2027",
  focus: "AI/ML Systems with Defense Applications"
};

export const commandPaletteCommands = [
  { id: "experience", label: "Go to Experience", action: "navigate", target: "experience" },
  { id: "projects", label: "Go to Projects", action: "navigate", target: "projects" },
  { id: "capabilities", label: "View Tech Stack", action: "navigate", target: "capabilities" },
  { id: "resume", label: "Open Resume", action: "download", target: personalInfo.resumeUrl },
  { id: "email", label: "Copy Email", action: "copy", target: personalInfo.email },
  { id: "phone", label: "Copy Phone", action: "copy", target: personalInfo.phone },
  { id: "console", label: "Toggle Console Mode", action: "toggle", target: "console" }
];
