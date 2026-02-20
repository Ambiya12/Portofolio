export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'Responsive UI Development',
      'Clean Architecture Principles',
      'Figma (UI Prototyping)',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js (Fastify)',
      'Node.js (Express.js)',
      'BFF Architecture',
      'REST API Development',
      'Service Integrations',
      'PHP',
      'SQL Database Management',
      'NoSQL (MongoDB)',
    ],
  },
  {
    title: 'DevOps',
    items: [
      'Docker',
      'GitLab CI/CD',
      'OpenShift (Azure Red Hat)',
      'Harbor',
      'Argo CD',
      'SonarQube',
    ],
  },
  {
    title: 'Management & Tools',
    items: [
      'Agile Methodologies',
      'Jira',
      'Confluence',
      'Microsoft Teams',
      'Slack',
      'Notion',
    ],
  },
]
