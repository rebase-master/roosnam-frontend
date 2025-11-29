// Mock data matching Carter Bennett persona - matches API serializer structure
export const mockProfile = {
  id: 1,
  full_name: "Carter Bennett",
  display_name: "Carter Bennett",
  email: "carter@example.com",
  phone: "+49 170 0000000",
  headline: "Lead AI/ML Systems Engineer · Applied Research to Production",
  bio: "I'm a Senior Software Engineer living in Berlin, Germany, focused on shipping reliable machine learning products for mobility, retail, and media companies across the EU. Over the last decade I've architected real-time recommendation engines, computer-vision safety stacks, and multilingual conversational AI. I thrive at the intersection of R&D and pragmatic delivery—translating research papers into production Golang/Python services with observable behavior, tight feedback loops, and confident stakeholders.",
  tagline: "Senior software engineer building human-centered intelligence",
  location: "Berlin, Germany",
  timezone: "GMT+1",
  years_of_experience: 10,
  current_role: "Lead AI Systems Engineer",
  current_company: "Google DeepMind",
  availability_status: "available",
  hourly_rate: "$150/hr",
  social_links: {
    github: "https://github.com/carter-bennett",
    linkedin: "https://www.linkedin.com/in/carter-bennett",
    twitter: "https://twitter.com/carter_codes",
    website: "https://carterbennett.dev"
  },
  profile_photo_url: "/images/carter_benett_sse.png",
  resume_url: null,
  portfolio_settings: {
    show_email: true,
    show_phone: true,
    theme_preference: "dark",
    accent_color: "#0F62FE"
  },
  seo_title: "Carter Bennett - Lead AI/ML Systems Engineer",
  seo_description: "Portfolio of Carter Bennett, an experienced AI/ML engineer specializing in production machine learning systems.",
  profile_completeness: 95
};

export const mockWorkExperiences = [
  {
    id: 1,
    user_id: 1,
    employer_name: "Google DeepMind",
    job_title: "Lead AI Systems Engineer",
    start_date: "2024-07-01",
    end_date: null,
    city: "Berlin",
    state: null,
    country: "Germany",
    skills: [
      { id: 1, name: "Python", slug: "python", proficiency_level: "expert", years_of_experience: 10.0, source_company: "Google DeepMind" },
      { id: 2, name: "PyTorch", slug: "pytorch", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Google DeepMind" },
      { id: 3, name: "Azure ML", slug: "azure-ml", proficiency_level: "intermediate", years_of_experience: 2.5, source_company: "Google DeepMind" },
      { id: 4, name: "Rust", slug: "rust", proficiency_level: "intermediate", years_of_experience: 2.0, source_company: "Google DeepMind" },
      { id: 5, name: "LangChain", slug: "langchain", proficiency_level: "intermediate", years_of_experience: 2.0, source_company: "Google DeepMind" }
    ]
  },
  {
    id: 2,
    user_id: 1,
    employer_name: "Tesla Autopilot",
    job_title: "Senior Machine Learning Engineer",
    start_date: "2022-05-01",
    end_date: "2024-06-30",
    city: "Berlin",
    state: null,
    country: "Germany",
    skills: [
      { id: 6, name: "AWS", slug: "aws", proficiency_level: "advanced", years_of_experience: 6.0, source_company: "Tesla Autopilot" },
      { id: 7, name: "Golang", slug: "golang", proficiency_level: "advanced", years_of_experience: 6.0, source_company: "Tesla Autopilot" },
      { id: 8, name: "TensorFlow", slug: "tensorflow", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Tesla Autopilot" },
      { id: 9, name: "MLOps", slug: "mlops", proficiency_level: "expert", years_of_experience: 6.0, source_company: "Tesla Autopilot" },
      { id: 10, name: "Computer Vision", slug: "computer-vision", proficiency_level: "advanced", years_of_experience: 5.5, source_company: "Tesla Autopilot" }
    ]
  },
  {
    id: 3,
    user_id: 1,
    employer_name: "Zalando",
    job_title: "Staff Software Engineer – Applied ML",
    start_date: "2020-03-01",
    end_date: "2022-04-30",
    city: "Berlin",
    state: null,
    country: "Germany",
    skills: [
      { id: 11, name: "React", slug: "react", proficiency_level: "advanced", years_of_experience: 5.5, source_company: "Zalando" },
      { id: 12, name: "Next.js", slug: "nextjs", proficiency_level: "advanced", years_of_experience: 4.0, source_company: "Zalando" },
      { id: 13, name: "Apache Kafka", slug: "apache-kafka", proficiency_level: "advanced", years_of_experience: 4.0, source_company: "Zalando" }
    ]
  },
  {
    id: 4,
    user_id: 1,
    employer_name: "Spotify",
    job_title: "Machine Learning Engineer",
    start_date: "2018-02-01",
    end_date: "2020-02-29",
    city: "Stockholm",
    state: null,
    country: "Sweden",
    skills: [
      { id: 14, name: "Java", slug: "java", proficiency_level: "advanced", years_of_experience: 7.0, source_company: "Spotify" },
      { id: 15, name: "Node.js", slug: "nodejs", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Spotify" },
      { id: 16, name: "GraphQL", slug: "graphql", proficiency_level: "advanced", years_of_experience: 4.0, source_company: "Spotify" },
      { id: 17, name: "NLP", slug: "nlp", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Spotify" }
    ]
  },
  {
    id: 5,
    user_id: 1,
    employer_name: "Google Cloud AI",
    job_title: "Software Engineer",
    start_date: "2016-01-01",
    end_date: "2018-01-31",
    city: "New York",
    state: "NY",
    country: "USA",
    skills: [
      { id: 18, name: "Kubernetes", slug: "kubernetes", proficiency_level: "advanced", years_of_experience: 4.5, source_company: "Google Cloud AI" },
      { id: 19, name: "Google Cloud Platform", slug: "google-cloud-platform", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Google Cloud AI" }
    ]
  },
  {
    id: 6,
    user_id: 1,
    employer_name: "Palantir Technologies",
    job_title: "Backend Engineer",
    start_date: "2014-07-01",
    end_date: "2015-12-31",
    city: "Washington",
    state: "DC",
    country: "USA",
    skills: []
  }
];

export const mockSkills = [
  { id: 1, name: "Python", slug: "python", proficiency_level: "expert", years_of_experience: 10.0, source_company: "Google DeepMind" },
  { id: 2, name: "SQL", slug: "sql", proficiency_level: "expert", years_of_experience: 10.0, source_company: null },
  { id: 3, name: "Git", slug: "git", proficiency_level: "expert", years_of_experience: 8.0, source_company: null },
  { id: 4, name: "Java", slug: "java", proficiency_level: "advanced", years_of_experience: 7.0, source_company: "Spotify" },
  { id: 5, name: "AWS", slug: "aws", proficiency_level: "advanced", years_of_experience: 6.0, source_company: "Tesla Autopilot" },
  { id: 6, name: "Golang", slug: "golang", proficiency_level: "advanced", years_of_experience: 6.0, source_company: "Tesla Autopilot" },
  { id: 7, name: "JavaScript", slug: "javascript", proficiency_level: "advanced", years_of_experience: 6.0, source_company: null },
  { id: 8, name: "MLOps", slug: "mlops", proficiency_level: "expert", years_of_experience: 6.0, source_company: "Tesla Autopilot" },
  { id: 9, name: "Computer Vision", slug: "computer-vision", proficiency_level: "advanced", years_of_experience: 5.5, source_company: "Tesla Autopilot" },
  { id: 10, name: "React", slug: "react", proficiency_level: "advanced", years_of_experience: 5.5, source_company: "Zalando" },
  { id: 11, name: "Redis", slug: "redis", proficiency_level: "advanced", years_of_experience: 5.5, source_company: null },
  { id: 12, name: "CI/CD", slug: "cicd", proficiency_level: "advanced", years_of_experience: 5.0, source_company: null },
  { id: 13, name: "Google Cloud Platform", slug: "google-cloud-platform", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Google Cloud AI" },
  { id: 14, name: "NLP", slug: "nlp", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Spotify" },
  { id: 15, name: "Node.js", slug: "nodejs", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Spotify" },
  { id: 16, name: "PyTorch", slug: "pytorch", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Google DeepMind" },
  { id: 17, name: "Sidekiq", slug: "sidekiq", proficiency_level: "advanced", years_of_experience: 5.0, source_company: null },
  { id: 18, name: "TensorFlow", slug: "tensorflow", proficiency_level: "advanced", years_of_experience: 5.0, source_company: "Tesla Autopilot" },
  { id: 19, name: "Kubernetes", slug: "kubernetes", proficiency_level: "advanced", years_of_experience: 4.5, source_company: "Google Cloud AI" },
  { id: 20, name: "Apache Kafka", slug: "apache-kafka", proficiency_level: "advanced", years_of_experience: 4.0, source_company: "Zalando" },
  { id: 21, name: "Docker", slug: "docker", proficiency_level: "advanced", years_of_experience: 4.0, source_company: null },
  { id: 22, name: "GraphQL", slug: "graphql", proficiency_level: "advanced", years_of_experience: 4.0, source_company: "Spotify" },
  { id: 23, name: "Next.js", slug: "nextjs", proficiency_level: "advanced", years_of_experience: 4.0, source_company: "Zalando" },
  { id: 24, name: "SQLite", slug: "sqlite", proficiency_level: "advanced", years_of_experience: 4.0, source_company: null },
  { id: 25, name: "TypeScript", slug: "typescript", proficiency_level: "advanced", years_of_experience: 4.0, source_company: null },
  { id: 26, name: "Hotwire/Turbo", slug: "hotwire-turbo", proficiency_level: "advanced", years_of_experience: 3.5, source_company: null },
  { id: 27, name: "Tailwind CSS", slug: "tailwind-css", proficiency_level: "advanced", years_of_experience: 3.0, source_company: null },
  { id: 28, name: "Azure ML", slug: "azure-ml", proficiency_level: "intermediate", years_of_experience: 2.5, source_company: "Google DeepMind" },
  { id: 29, name: "Django", slug: "django", proficiency_level: "intermediate", years_of_experience: 2.5, source_company: null },
  { id: 30, name: "LangChain", slug: "langchain", proficiency_level: "intermediate", years_of_experience: 2.0, source_company: "Google DeepMind" },
  { id: 31, name: "Rust", slug: "rust", proficiency_level: "intermediate", years_of_experience: 2.0, source_company: "Google DeepMind" },
  { id: 32, name: "Storybook", slug: "storybook", proficiency_level: "intermediate", years_of_experience: 2.0, source_company: null }
];

export const mockClientProjects = [
  {
    id: 1,
    name: "Aurora Vision Platform",
    role: "Lead AI Consultant",
    client_name: "PortOne Logistics",
    client_website: null,
    description: "Built a computer-vision pipeline that inspects shipping containers in under five seconds. Combined edge inference written in Go with a Python/TensorFlow training loop, reducing false positives by 40% and saving seven-figure inspection costs.",
    tech_stack: "Python, Golang, TensorFlow, React, AWS",
    start_date: "2023-06-01",
    end_date: "2024-01-15",
    project_url: "https://aurora-demo.carterbennett.dev",
    user_id: 1,
    skills: [
      { id: 1, name: "Python", slug: "python", proficiency_level: "expert", years_of_experience: 10.0, source_company: null },
      { id: 6, name: "Golang", slug: "golang", proficiency_level: "advanced", years_of_experience: 6.0, source_company: null },
      { id: 18, name: "TensorFlow", slug: "tensorflow", proficiency_level: "advanced", years_of_experience: 5.0, source_company: null },
      { id: 10, name: "React", slug: "react", proficiency_level: "advanced", years_of_experience: 5.5, source_company: null },
      { id: 5, name: "AWS", slug: "aws", proficiency_level: "advanced", years_of_experience: 6.0, source_company: null }
    ],
    client_reviews: [
      {
        id: 1,
        reviewer_name: "Lena Fischer",
        reviewer_position: "VP of Operations",
        reviewer_company: "PortOne Logistics",
        review_text: "Carter fused AI research with pragmatic Ops constraints. Aurora Vision immediately saved us seven-figure inspection costs.",
        rating: 5,
        client_project_id: 1,
        reviewer_display_name: "Lena Fischer, VP of Operations at PortOne Logistics"
      },
      {
        id: 2,
        reviewer_name: "Matthias Krüger",
        reviewer_position: "Head of Automation",
        reviewer_company: "PortOne Logistics",
        review_text: "The retraining loop and dashboards are exactly what our crews needed to trust the detections.",
        rating: 5,
        client_project_id: 1,
        reviewer_display_name: "Matthias Krüger, Head of Automation at PortOne Logistics"
      }
    ]
  },
  {
    id: 2,
    name: "Helix Risk Engine",
    role: "Principal ML Engineer",
    client_name: "NordicBank",
    client_website: null,
    description: "Delivered a graph-based fraud detection service that scores 18M transactions/day. Streamlined feature engineering with Kafka Streams and served low-latency predictions via Go microservices.",
    tech_stack: "Golang, Python, Apache Kafka, Kubernetes, React",
    start_date: "2022-01-15",
    end_date: "2022-11-30",
    project_url: null,
    user_id: 1,
    skills: [
      { id: 6, name: "Golang", slug: "golang", proficiency_level: "advanced", years_of_experience: 6.0, source_company: null },
      { id: 1, name: "Python", slug: "python", proficiency_level: "expert", years_of_experience: 10.0, source_company: null },
      { id: 20, name: "Apache Kafka", slug: "apache-kafka", proficiency_level: "advanced", years_of_experience: 4.0, source_company: null },
      { id: 19, name: "Kubernetes", slug: "kubernetes", proficiency_level: "advanced", years_of_experience: 4.5, source_company: null },
      { id: 10, name: "React", slug: "react", proficiency_level: "advanced", years_of_experience: 5.5, source_company: null }
    ],
    client_reviews: [
      {
        id: 3,
        reviewer_name: "Eva Lauritzen",
        reviewer_position: "Chief Risk Officer",
        reviewer_company: "NordicBank",
        review_text: "Helix is the first fraud platform that our analysts didn't try to bypass. Insightful, fast, and measurable.",
        rating: 5,
        client_project_id: 2,
        reviewer_display_name: "Eva Lauritzen, Chief Risk Officer at NordicBank"
      }
    ]
  },
  {
    id: 3,
    name: "Atlas Genomics LIMS",
    role: "Architecture Lead",
    client_name: "HelixLab",
    client_website: null,
    description: "Modernized a lab information system for a genomics startup. Introduced event sourcing, React dashboards, and ML-assisted anomaly detection so scientists could focus on research instead of data entry.",
    tech_stack: "Java, GraphQL, React, Google Cloud Platform",
    start_date: "2021-02-01",
    end_date: "2021-12-31",
    project_url: "https://atlas-genomics.example.com",
    user_id: 1,
    skills: [
      { id: 4, name: "Java", slug: "java", proficiency_level: "advanced", years_of_experience: 7.0, source_company: null },
      { id: 22, name: "GraphQL", slug: "graphql", proficiency_level: "advanced", years_of_experience: 4.0, source_company: null },
      { id: 10, name: "React", slug: "react", proficiency_level: "advanced", years_of_experience: 5.5, source_company: null },
      { id: 13, name: "Google Cloud Platform", slug: "google-cloud-platform", proficiency_level: "advanced", years_of_experience: 5.0, source_company: null }
    ],
    client_reviews: []
  },
  {
    id: 4,
    name: "Stratus Edge Orchestration",
    role: "Senior Cloud Architect",
    client_name: "Volt Mobility",
    client_website: null,
    description: "Created a multi-cloud orchestration layer for autonomous shuttles. The platform syncs OTA models, manages Kubernetes at the edge, and exposes a TypeScript API that mobile apps consume.",
    tech_stack: "Golang, Python, Kubernetes, Next.js, Azure ML",
    start_date: "2020-05-01",
    end_date: "2021-01-31",
    project_url: null,
    user_id: 1,
    skills: [
      { id: 6, name: "Golang", slug: "golang", proficiency_level: "advanced", years_of_experience: 6.0, source_company: null },
      { id: 1, name: "Python", slug: "python", proficiency_level: "expert", years_of_experience: 10.0, source_company: null },
      { id: 19, name: "Kubernetes", slug: "kubernetes", proficiency_level: "advanced", years_of_experience: 4.5, source_company: null },
      { id: 23, name: "Next.js", slug: "nextjs", proficiency_level: "advanced", years_of_experience: 4.0, source_company: null },
      { id: 28, name: "Azure ML", slug: "azure-ml", proficiency_level: "intermediate", years_of_experience: 2.5, source_company: null }
    ],
    client_reviews: [
      {
        id: 4,
        reviewer_name: "Jonas Richter",
        reviewer_position: "CTO",
        reviewer_company: "Volt Mobility",
        review_text: "Stratus Edge gave us OTA confidence. Even regulators were impressed with the observability Carter baked in.",
        rating: 5,
        client_project_id: 4,
        reviewer_display_name: "Jonas Richter, CTO at Volt Mobility"
      }
    ]
  },
  {
    id: 5,
    name: "PulseCast Recommendation API",
    role: "ML Platform Consultant",
    client_name: "StreamCast Media",
    client_website: null,
    description: "Delivered a multilingual recommendation API using PyTorch and Rust-based ranking services. Introduced real-time feedback loops that improved 30-day retention by 18%.",
    tech_stack: "PyTorch, Rust, Node.js, GraphQL, AWS",
    start_date: "2019-04-01",
    end_date: "2019-12-31",
    project_url: null,
    user_id: 1,
    skills: [
      { id: 16, name: "PyTorch", slug: "pytorch", proficiency_level: "advanced", years_of_experience: 5.0, source_company: null },
      { id: 31, name: "Rust", slug: "rust", proficiency_level: "intermediate", years_of_experience: 2.0, source_company: null },
      { id: 15, name: "Node.js", slug: "nodejs", proficiency_level: "advanced", years_of_experience: 5.0, source_company: null },
      { id: 22, name: "GraphQL", slug: "graphql", proficiency_level: "advanced", years_of_experience: 4.0, source_company: null },
      { id: 5, name: "AWS", slug: "aws", proficiency_level: "advanced", years_of_experience: 6.0, source_company: null }
    ],
    client_reviews: [
      {
        id: 5,
        reviewer_name: "Priya Kapoor",
        reviewer_position: "Director of Product",
        reviewer_company: "StreamCast Media",
        review_text: "PulseCast's personalization metrics keep climbing. Carter navigated multilingual quirks with ease.",
        rating: 5,
        client_project_id: 5,
        reviewer_display_name: "Priya Kapoor, Director of Product at StreamCast Media"
      }
    ]
  }
];

export const mockClientReviews = [
  {
    id: 1,
    reviewer_name: "Lena Fischer",
    reviewer_position: "VP of Operations",
    reviewer_company: "PortOne Logistics",
    review_text: "Carter fused AI research with pragmatic Ops constraints. Aurora Vision immediately saved us seven-figure inspection costs.",
    rating: 5,
    client_project_id: 1,
    reviewer_display_name: "Lena Fischer, VP of Operations at PortOne Logistics"
  },
  {
    id: 2,
    reviewer_name: "Matthias Krüger",
    reviewer_position: "Head of Automation",
    reviewer_company: "PortOne Logistics",
    review_text: "The retraining loop and dashboards are exactly what our crews needed to trust the detections.",
    rating: 5,
    client_project_id: 1,
    reviewer_display_name: "Matthias Krüger, Head of Automation at PortOne Logistics"
  },
  {
    id: 3,
    reviewer_name: "Eva Lauritzen",
    reviewer_position: "Chief Risk Officer",
    reviewer_company: "NordicBank",
    review_text: "Helix is the first fraud platform that our analysts didn't try to bypass. Insightful, fast, and measurable.",
    rating: 5,
    client_project_id: 2,
    reviewer_display_name: "Eva Lauritzen, Chief Risk Officer at NordicBank"
  },
  {
    id: 4,
    reviewer_name: "Jonas Richter",
    reviewer_position: "CTO",
    reviewer_company: "Volt Mobility",
    review_text: "Stratus Edge gave us OTA confidence. Even regulators were impressed with the observability Carter baked in.",
    rating: 5,
    client_project_id: 4,
    reviewer_display_name: "Jonas Richter, CTO at Volt Mobility"
  },
  {
    id: 5,
    reviewer_name: "Priya Kapoor",
    reviewer_position: "Director of Product",
    reviewer_company: "StreamCast Media",
    review_text: "PulseCast's personalization metrics keep climbing. Carter navigated multilingual quirks with ease.",
    rating: 5,
    client_project_id: 5,
    reviewer_display_name: "Priya Kapoor, Director of Product at StreamCast Media"
  }
];

export const mockCertifications = [
  {
    id: 1,
    user_id: 1,
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    issue_date: "2023-06-15",
    expiration_date: "2026-06-15",
    credential_url: "https://aws.amazon.com/verification/aws-ml-specialty",
    document_url: null,
    is_expired: false
  },
  {
    id: 2,
    user_id: 1,
    title: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    issue_date: "2022-09-20",
    expiration_date: "2024-09-20",
    credential_url: "https://cloud.google.com/certification/cloud-architect",
    document_url: null,
    is_expired: false
  },
  {
    id: 3,
    user_id: 1,
    title: "NVIDIA Certified Deep Learning Institute Instructor",
    issuer: "NVIDIA",
    issue_date: "2021-11-10",
    expiration_date: null,
    credential_url: "https://www.nvidia.com/en-us/training/certification/",
    document_url: null,
    is_expired: false
  },
  {
    id: 4,
    user_id: 1,
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    issue_date: "2020-08-05",
    expiration_date: "2023-08-05",
    credential_url: "https://www.hashicorp.com/certification/terraform-associate",
    document_url: null,
    is_expired: true
  }
];

export const mockEducation = [
  {
    id: 1,
    user_id: 1,
    school_name: "Stanford University",
    degree: "Master of Science",
    degree_status: "graduated",
    field_of_study: "Computer Science",
    start_year: 2012,
    end_year: 2014,
    certificate_url: null
  },
  {
    id: 2,
    user_id: 1,
    school_name: "Massachusetts Institute of Technology",
    degree: "Bachelor of Science",
    degree_status: "graduated",
    field_of_study: "Computer Science and Engineering",
    start_year: 2008,
    end_year: 2012,
    certificate_url: null
  }
];

// Legacy exports for backward compatibility
export const profile = mockProfile;
export const projects = mockClientProjects;
export const experiences = mockWorkExperiences;
export const testimonials = mockClientReviews;
export const certifications = mockCertifications;
export const education = mockEducation;
export const blogPosts = [
  {
    id: 1,
    title: "Mastering API Design: Best Practices for Scalable Systems",
    excerpt: "A deep dive into the principles of creating robust and user-friendly APIs that stand the test of time. From RESTful conventions to GraphQL considerations.",
    date: "2023-10-28",
    readTime: "7 min read",
    category: "Backend",
    tags: ["API Design", "Backend", "REST", "GraphQL"],
    image: "/images/blog/api-design.jpg"
  },
  {
    id: 2,
    title: "The Art of Debugging: A Developer's Guide to Efficient Problem-Solving",
    excerpt: "Learn effective strategies and tools to hunt down bugs in your code. Turn frustration into a productive and even enjoyable process.",
    date: "2023-09-15",
    readTime: "5 min read",
    category: "Productivity",
    tags: ["Debugging", "JavaScript", "Productivity"],
    image: "/images/blog/debugging.jpg"
  },
  {
    id: 3,
    title: "From Pixels to People: A Guide to User-Centric UI/UX Design",
    excerpt: "Discover the core principles of UI/UX that transform a functional application into an intuitive and delightful experience for the end-user.",
    date: "2023-08-02",
    readTime: "9 min read",
    category: "Design",
    tags: ["UI/UX", "Design", "User Experience"],
    image: "/images/blog/uiux.jpg"
  }
];
