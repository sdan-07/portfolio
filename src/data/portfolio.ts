export type Accent = "primary" | "secondary" | "tertiary";

export type Project = {
  type: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  action: string;
  accent: Accent;
  live: string,
  source: string
};

export const projects: Project[] = [
  {
    type: "Full-Stack Web",
    badge: "Personal Project",
    title: "TalentScan AI",
    description: "An AI-powered resume analysis platform built with the MERN stack and Google Gemini API, giving candidates instant, structured feedback on their resumes.",
    highlights: [
      "Resume parsing and analysis powered by the Google Gemini API",
      "JWT authentication with Zod-validated request pipelines",
      "Dockerized deployment on Render with CI-friendly build setup"
    ],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "JWT"],
    source: "https://github.com/sdan-07/talentscan-ai",
    live: "https://interview-talentscan-ai.onrender.com",
    action: "Live Demo",
    accent: "primary"
  },
  {
    type: "Full-Stack Web",
    badge: "Mini Project",
    title: "Linked List Visualizer",
    description: "An interactive doubly linked list visualizer built to make core data structure operations easy to see and understand, with animated node traversal and persistent state.",
    highlights: [
      "Animated bidirectional traversal with live node visualization",
      "State persistence via localStorage across sessions",
      "Deployed on Render for seamless deployment"
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    source: "https://github.com/sdan-07/Dll_visualizer",
    live: "#",
    action: "Live Demo",
    accent: "secondary"
  }
];

export const stackGroups = [
  {
    title: "Frontend",
    icon: "devices",
    color: "text-primary",
    description: "Component modularity, sub-second TTFB, micro-interactions, responsive frameworks.",
    items: ["React.js", "React Router DOM", "Context API", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: "dns",
    color: "text-secondary",
    description: "High-concurrency services, structured schemas, low memory footprints.",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"]
  },
  {
    title: "Cloud & Tools",
    icon: "cloud_sync",
    color: "text-tertiary",
    description: "Reliable persistence, distributed cache tiers, edge compute primitives.",
    items: ["AWS", "Git", "Github", "Postman", "Docker"]
  },
  {
    title: "Languages",
    icon: "verified",
    color: "text-on-surface",
    description: "Programming languages I write and ship production code in.",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
  }
];

export const experiences = [
  {
    title: "Web Developer Intern",
    org: "Marketing Hub",
    date: "March 2024 - August 2024",
    color: "text-primary",
    description: "Worked as a Web Developer Intern, building and testing client-facing websites while handling hosting and deployment.",
    bullets: [
      "Developed responsive websites in a collaborative team following consistent coding and design practices.",
      "Performed manual testing across 10+ web applications to identify and report bugs before deployment.",
      "Hosted and managed client web applications on platforms like Hostinger, handling domain setup and deployment."
    ]
  },
  {
    title: "Masters of Computer Application",
    org: "PES University",
    date: "2025 - Present",
    color: "text-secondary",
    description: "CGPA: 7.29 / 10.0",
    bullets: [
      "Relevant Coursework: Advanced Data Structures, Database Management Systems, Operating Systems, Computer Networks, Git & Github",
      "Applying REST API design and backend development concepts from coursework to real deployed projects (TalentScan AI, DLL Visualizer).",
      "Exploring cloud deployment and containerization (AWS, Docker, GitHub Actions) as an extension of systems coursework."
    ]
  },
  {
    title: "Bachelors of Computer Application",
    org: "EIILM - Kolkata",
    date: "2021 — 2024",
    color: "text-tertiary",
    description: "CGPA: 7.87 / 10.0",
    bullets: [
      "Relevant Coursework: Web Application Architecture, Algorithms & Complexity, Database Systems, Computer Systems, Software Engineering.",
      "Practiced core web fundamentals — HTML, CSS, and JavaScript through self-directed projects alongside coursework."
    ]
  }
];

export const endorsements = [
  {
    initials: "ER",
    name: "Dr. Elena Rostova",
    role: "Professor & Dept. Chair, Computer Science",
    color: "text-primary",
    quote: "Alex demonstrated phenomenal software fundamentals and rare technical intuition. His capstone project was one of the cleanest, best-architected full-stack systems we have seen out of the department in years."
  },
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Staff Software Engineer & Internship Mentor",
    color: "text-secondary",
    quote: "During his summer internship, Alex ramped up faster than most full-time hires. His pull requests were consistently well-documented, test-covered, and thoughtful. He has a very bright career ahead in full-stack engineering."
  }
];