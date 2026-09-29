export const portfolio = {
  name: "Sudip Paramanik",
  role: "AWS Cloud Engineer",
  subtitle: "Cloud Engineering Fresher",
  email: "sudipparamanik71@gmail.com",
  github: "https://github.com/sudipparamanik",
  linkedin: "https://www.linkedin.com/in/sudip-paramanik-1985b0420/",
  resume: "#",
  profileImage: "/images/profile.png",
  skills: {
    aws: ["IAM", "EC2", "VPC", "S3", "RDS", "Lambda", "API Gateway", "CloudWatch", "Cognito", "DynamoDB", "SQS", "SNS", "X-Ray"],
    devops: ["Terraform", "Docker", "Git", "GitHub", "CI/CD", "AWS CDK", "Linux"],
    languages: ["Java", "Python", "JavaScript", "TypeScript"]
  },
  projects: [
    {
      title: "Real-Time Chat Application",
      label: "SERVERLESS / AWS",
      description: "A serverless real-time chat platform using AWS WebSocket communication, authentication, connection state, messaging and AWS-native monitoring.",
      tech: ["AWS CDK", "Java", "API Gateway WebSocket", "Lambda", "DynamoDB", "Cognito", "SQS", "SNS", "CloudWatch", "X-Ray"],
      github: "https://github.com/sudipparamanik/Real-time-chat-system",
      demo: "#"
    },
    {
      title: "SmartDrive AI — Personal Cloud Storage",
      label: "CLOUD / AI",
      description: "A cloud file-management project focused on personal cloud storage, AI-assisted file organization, duplicate detection and a modern file-management experience.",
      tech: ["AWS", "S3", "AI", "Cloud Storage", "React", "JavaScript"],
      github: "https://github.com/sudipparamanik/Personal--cloud-storage-with-AI-optimization-PROJECT",
      demo: "#"
    }
  ],
  experience: [
    {
      company: "Edunet Foundation × IBM SkillsBuild",
      role: "AI & Cloud Technologies Intern",
      period: "15 May 2026 — 15 June 2026",
      type: "4-WEEK INTERNSHIP",
      description: "Selected for a four-week internship leveraging IBM SkillsBuild and IBM Cloud Platform in Emerging Technologies (AI & Cloud). The program combined guided learning, mentor sessions, cloud experiments and a final project evaluation.",
      highlights: [
        "Cloud Computing and Artificial Intelligence foundations",
        "Data Analytics and cloud-based EDA hands-on work",
        "AI chatbot and cloud experiments",
        "AI & ML experiments and AutoAI in IBM Cloud",
        "Final project evaluation and submission"
      ],
      document: "/certificates/ibm-skillsbuild-internship-offer.pdf"
    }
  ],
  certificates: [
    {
      title: "Cloud Computing Course",
      issuer: "Tutedude",
      date: "16 June 2026",
      id: "TD-SUDI-CC-1734",
      image: "/certificates/tutedude-thumb.jpg",
      file: "/certificates/tutedude-cloud-computing.pdf"
    },
    {
      title: "Python for Beginners",
      issuer: "Simplilearn",
      date: "26 February 2026",
      id: "9894432",
      image: "/certificates/python-thumb.jpg",
      file: "/certificates/python-for-beginners.pdf"
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      date: "13 May 2026",
      image: "/certificates/genai-thumb.jpg",
      file: "/certificates/genai-data-analytics.pdf"
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "20 April 2026",
      image: "/certificates/cyber-thumb.jpg",
      file: "/certificates/cybersecurity-analyst.pdf"
    },
    {
      title: "Advanced Software Engineering Job Simulation",
      issuer: "Forage",
      date: "14 May 2026",
      image: "/certificates/software-thumb.jpg",
      file: "/certificates/advanced-software-engineering.pdf"
    }
  ]
};
