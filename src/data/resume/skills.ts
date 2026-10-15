import type { SkillGroup } from '../../types';

const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    tone: 'sky',
    skills: ['Next.js', 'React', 'Vue.js', 'Vite', 'Nuxt.js', 'Tailwind CSS', 'MUI', 'shadcn/ui', 'Framer'],
  },
  {
    name: 'Backend',
    tone: 'mint',
    skills: [
      'Node.js', 'NestJS', 'PostgreSQL', 'REST APIs', 'GraphQL', 'MongoDB',
      'Firebase / Firestore', 'AWS', 'Cloudflare', 'Google Apps Script',
    ],
  },
  {
    name: 'Languages',
    tone: 'yellow',
    skills: ['TypeScript', 'Python', 'C', 'C++'],
  },
  {
    name: 'Experienced With',
    tone: 'lilac',
    skills: [
      'Git', 'Bitbucket', 'MVVM', 'Monorepo', 'MVC', 'OpenAI', 'Cursor', 'Claude', 'Codex',
      'Clean Architecture', 'SOLID Principles', 'DevOps', 'Service Locator', 'Sentry',
    ],
  },
];

export default skillGroups;
