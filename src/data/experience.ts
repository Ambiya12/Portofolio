export type ExperienceItem = {
  period: string
  title: string
  summary: string
  points: string[]
}

export const experienceTimeline: ExperienceItem[] = [
  {
    period: 'Sep 2024 — Present',
    title: 'Fullstack Developer — GEODIS',
    summary:
      'Levallois-Perret, Île-de-France, France (On-site). Building scalable products across frontend, backend, and DevOps workflows.',
    points: [
      'Front-end: ReactJS and NextJS for responsive UIs, clean architecture, and reusable components.',
      'TypeScript for type-safe, scalable front-end development.',
      'Figma for UI design and prototyping.',
      'Back-end: Node.js (Fastify) for BFF architecture, API development, and integrations.',
      'DevOps: Docker, GitLab CI/CD, OpenShift (Azure Red Hat), Harbor, Argo CD, and SonarQube.',
      'Agile management: daily stand-ups, sprint planning, reviews, and grooming.',
      'Collaboration tools: Jira, Confluence, and Microsoft Teams.',
    ],
  },
  {
    period: 'Jun 2023 — Aug 2023',
    title: 'Web Developer Intern — Owner Digital Agency',
    summary:
      'Jakarta, Indonesia. Internship focused on practical front-end delivery with exposure to back-end fundamentals.',
    points: [
      'Developed and maintained web components using HTML, CSS, and JavaScript.',
      'Customized WordPress themes and plugins with a UI/UX improvement focus.',
      'Translated Figma designs into functional web pages and explored API integration.',
      'Contributed to performance optimization and adopted development best practices.',
    ],
  },
]
