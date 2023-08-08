// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Backend', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Backend', 'Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 5,
    category: ['Web Development', 'Javascript', 'Typescript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  // {
  //   title: 'Amazon Web Services',
  //   competency: 4,
  //   category: ['Web Development', 'Tools'],
  // },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Backend', 'Databases'],
  },
  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Backend', 'Databases'],
  // },
  // {
  //   title: 'Flutter',
  //   competency: 5,
  //   category: ['Mobile'],
  // },
  // {
  //   title: 'Redis',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Data Mining',
  //   competency: 3,
  //   category: ['Data Science'],
  // },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Firebase',
    competency: 4,
    category: ['Web Development', 'JSON', 'Backend'],
  },
  {
    title: 'NestJS',
    competency: 2,
    category: ['Web Development', 'Javascript', 'Typescript'],
  },
  // {
  //   title: 'Flask',
  //   competency: 2,
  //   category: ['Web Development', 'Python'],
  // },
  {
    title: 'Git/Mercurial',
    competency: 4,
    category: ['Tools'],
  },
  // {
  //   title: 'Kubernetes',
  //   competency: 2,
  //   category: ['Tools', 'Data Engineering'],
  // },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  // {
  //   title: 'Numpy',
  //   competency: 3,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Tensorflow + Keras',
  //   competency: 3,
  //   category: ['Data Science', 'Python'],
  // },
  // {
  //   title: 'Jupyter',
  //   competency: 3,
  //   category: ['Data Science', 'Python'],
  // },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  // {
  //   title: 'Julia',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'MATLAB',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'R',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  // {
  //   title: 'GraphQL',
  //   competency: 1,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Pandas',
  //   competency: 5,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Matplotlib',
  //   competency: 3,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Scikit-Learn',
  //   competency: 4,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Hadoop',
  //   competency: 2,
  //   category: ['Data Engineering', 'Data Science'],
  // },
  // {
  //   title: 'Spark',
  //   competency: 2,
  //   category: ['Data Engineering', 'Data Science'],
  // },
  // {
  //   title: 'Dagster',
  //   competency: 2,
  //   category: ['Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Mypy',
  //   competency: 3,
  //   category: ['Python'],
  // },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
