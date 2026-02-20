export type SchoolItem = {
  period: string
  institution: string
  degree: string
  details: string[]
}

export const schoolHistory: SchoolItem[] = [
  {
    period: 'Sep 2025 — Sep 2026',
    institution: 'HETIC',
    degree: 'Développeur Web, Computer Programming',
    details: [
      'Focus: Full-Stack Software Engineering with modern architectural patterns.',
      'Technical expertise: Clean Architecture, Full-Stack System Design, and UI/UX with Figma and Adobe tools.',
      'Front-end: JavaScript, TypeScript, and React.js.',
      'Back-end: Node.js, PHP, and SQL database management.',
      'Advanced: AI performance optimization and advanced authentication.',
      'Methodology and QA: Agile collaborative workflows, integration testing, and unit testing.',
      'Specialization: IoT and robotics with hardware-software integration using Python.',
    ],
  },
  {
    period: 'Jun 2024 — Jun 2025',
    institution: '3W Academy',
    degree: 'Développeur Full Stack, Computer Programming',
    details: [
      'Front-end development: HTML, CSS, JavaScript, and framework usage (React or Angular).',
      'Back-end development: Node.js and PHP with Express.js framework.',
      'Databases: SQL and NoSQL (MongoDB).',
      'CMS: WordPress and PrestaShop.',
    ],
  },
  {
    period: 'Sep 2022 — 2024',
    institution: 'Université Paris Cité',
    degree: "Double Bachelor's Degree, Mathematics and Computer Science",
    details: [
      'Built strong analytical foundations across mathematics and computer science.',
      'Strengthened problem-solving and formal reasoning for software engineering.',
    ],
  },
]
