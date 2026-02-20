export type Project = {
  title: string
  statusLabel?: string
  description: string
  highlights: string
  tags: string[]
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: 'Nomad Connect',
    description:
      'Real stories. Real places. Real travelers. A modern travel community platform where authentic travelers share hidden gems, insider tips, and real experiences from around the world.',
    highlights:
      'Past full-stack project currently inactive, built with React, TypeScript, Node.js, and Express.js using modern web architecture patterns.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Full-stack'],
    githubUrl: 'https://github.com/Ambiya12/NomadConnect.git',
  },
  {
    title: 'Evo-Botics (RAA)',
    statusLabel: 'Ongoing project',
    description:
      'Autonomous Assistance Robot developed at HETIC to improve accessibility in public spaces, combining robotics, AI, and real-time monitoring through an accessible interface.',
    highlights:
      'Ongoing full-stack robotics project integrating ROS navigation, computer vision, object manipulation, MQTT/WebSocket communication, and a WCAG-aware React dashboard.',
    tags: ['ROS', 'React', 'Node.js', 'OpenCV', 'MQTT', 'WebSockets', 'Full-stack'],
    githubUrl: 'https://github.com/Ambiya12/evo-botics-raa.git',
  },
]
