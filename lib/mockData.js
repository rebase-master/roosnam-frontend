export const profile = {
  name: 'Mansoor Khan',
  title: 'Full Stack Developer',
  bio: 'I am Mansoor Khan, a Senior Software Engineer who loves the web. I\'m passionate about semantic and standards based development.',
  avatar: '/images/avatar.jpg',
  email: 'mkhan.enggr@gmail.com',
  location: 'Lucknow, India',
  social: {
    github: 'https://github.com/rebase-master',
    linkedin: 'https://linkedin.com/in/mansoor-khan',
    twitter: 'https://twitter.com/mkchirps',
  },
};

export const skillCategories = [
  {
    id: 1,
    name: 'Languages',
    icon: '💻',
    skills: ['Ruby', 'Python', 'JavaScript', 'TypeScript',  'SQL'],
  },
  {
    id: 2,
    name: 'Frameworks',
    icon: '⚛️',
    skills: ['Ruby on Rails', 'React', 'Django', 'Next.js', 'Node.js', 'Django'],
  },
  {
    id: 3,
    name: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
  },
  {
    id: 4,
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 5,
    name: 'Design & UI',
    icon: '🎨',
    skills: ['Tailwind CSS', 'Figma', 'Storybook', 'Responsive Design', 'UI/UX'],
  },
  {
    id: 6,
    name: 'Tools & Others',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'Postman', 'Jira', 'Agile/Scrum'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'E-commerce Platform Redesign',
    description: 'Built a multi-vendor marketplace from the ground up, empowering local creators to sell online. Features include real-time inventory, secure payments, and personalized recommendations.',
    role: 'Lead Frontend Developer',
    techStack: ['React', 'Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
    startDate: '2023-06-01',
    endDate: '2024-01-15',
    projectUrl: 'https://example-marketplace.com',
    image: '/images/projects/ecommerce.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Healthcare Patient Portal',
    description: 'Engineered a secure, HIPAA-compliant portal for patients to access medical records, schedule appointments, and communicate with healthcare providers.',
    role: 'Full Stack Developer',
    techStack: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'HL7'],
    startDate: '2022-09-01',
    endDate: '2023-05-30',
    projectUrl: 'https://healthcare-portal.example.com',
    image: '/images/projects/healthcare.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'Real Estate Analytics Tool',
    description: 'Developed a data-rich tool for visualizing complex real estate market trends. Interactive charts, predictive analytics, and location-based insights help investors make informed decisions.',
    role: 'Frontend Developer',
    techStack: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
    startDate: '2022-01-01',
    endDate: '2022-08-15',
    projectUrl: null,
    image: '/images/projects/analytics.jpg',
    featured: true,
  },
  {
    id: 4,
    name: 'SaaS Landing Page Builder',
    description: 'Created an intuitive drag-and-drop builder for creating high-converting landing pages without code.',
    role: 'Lead Developer',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    startDate: '2021-06-01',
    endDate: '2021-12-31',
    projectUrl: 'https://landing-builder.example.com',
    image: '/images/projects/saas.jpg',
    featured: false,
  },
  {
    id: 5,
    name: 'Mobile Event Management App',
    description: 'Designed and developed a cross-platform mobile app for discovering and managing local events.',
    role: 'Mobile Developer',
    techStack: ['React Native', 'Firebase', 'Google Maps API'],
    startDate: '2021-01-01',
    endDate: '2021-05-30',
    projectUrl: null,
    image: '/images/projects/events.jpg',
    featured: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Mastering API Design: Best Practices for Scalable Systems',
    excerpt: 'A deep dive into the principles of creating robust and user-friendly APIs that stand the test of time. From RESTful conventions to GraphQL considerations.',
    date: '2023-10-28',
    readTime: '7 min read',
    category: 'Backend',
    tags: ['API Design', 'Backend', 'REST', 'GraphQL'],
    image: '/images/blog/api-design.jpg',
  },
  {
    id: 2,
    title: 'The Art of Debugging: A Developer\'s Guide to Efficient Problem-Solving',
    excerpt: 'Learn effective strategies and tools to hunt down bugs in your code. Turn frustration into a productive and even enjoyable process.',
    date: '2023-09-15',
    readTime: '5 min read',
    category: 'Productivity',
    tags: ['Debugging', 'JavaScript', 'Productivity'],
    image: '/images/blog/debugging.jpg',
  },
  {
    id: 3,
    title: 'From Pixels to People: A Guide to User-Centric UI/UX Design',
    excerpt: 'Discover the core principles of UI/UX that transform a functional application into an intuitive and delightful experience for the end-user.',
    date: '2023-08-02',
    readTime: '9 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design', 'User Experience'],
    image: '/images/blog/uiux.jpg',
  },
];

export const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    startDate: '2021-01-01',
    endDate: null, // Current position
    description: 'Led the development of a new client-facing dashboard using React and TypeScript, improving user engagement by 25%. Mentored junior developers and established new coding standards for the frontend team.',
    skills: ['React', 'TypeScript', 'Next.js', 'Redux'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Innovatech',
    location: 'Remote',
    startDate: '2018-06-01',
    endDate: '2020-12-31',
    description: 'Developed and maintained both frontend and backend services for a high-traffic e-commerce platform. Optimized database queries which reduced average page load time by 300ms.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'React', 'AWS'],
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'Data Corp',
    location: 'Boston, MA',
    startDate: '2017-05-01',
    endDate: '2017-08-31',
    description: 'Contributed to a data analysis tool by developing Python scripts for data cleaning and creating API endpoints with Flask. Gained experience in an agile development environment.',
    skills: ['Python', 'Flask', 'MongoDB'],
  },
];

export const testimonials = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    clientPosition: 'CTO, TechStart Inc.',
    projectName: 'E-commerce Platform Redesign',
    review: 'Alex delivered exceptional work on our marketplace platform. The attention to detail and commitment to quality was outstanding. Highly recommend for any complex web development project.',
    rating: 5,
    date: '2024-02-15',
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    clientPosition: 'Product Manager, HealthTech Solutions',
    projectName: 'Healthcare Patient Portal',
    review: 'Working with Alex was a pleasure. The portal was delivered on time, and the code quality exceeded our expectations. Great communication throughout the project.',
    rating: 5,
    date: '2023-06-20',
  },
  {
    id: 3,
    clientName: 'Emily Rodriguez',
    clientPosition: 'CEO, RealEstate Analytics',
    projectName: 'Real Estate Analytics Tool',
    review: 'Alex transformed our complex data visualization requirements into an intuitive, beautiful interface. Users love the new analytics dashboard!',
    rating: 5,
    date: '2022-09-10',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2022-03-15',
    expirationDate: '2025-03-15',
    credentialUrl: 'https://aws.amazon.com/certification/',
  },
  {
    id: 2,
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    issueDate: '2021-11-20',
    expirationDate: null,
    credentialUrl: 'https://scrum.org',
  },
];

export const education = [
  {
    id: 1,
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startYear: 2013,
    endYear: 2017,
    grade: '3.8 GPA',
    description: 'Focus on software engineering, algorithms, and web development.',
  },
];

