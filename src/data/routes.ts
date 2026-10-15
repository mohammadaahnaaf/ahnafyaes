import type { Route } from '../types';

const routes: Route[] = [
  {
    index: true,
    label: 'Ahnafya',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  // {
  //   label: 'Artworks',
  //   path: '/artworks',
  // },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
