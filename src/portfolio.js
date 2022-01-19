const header = {
  homepage: '#',
  title: 'MH.',
};

const about = {
  name: 'Maximilian Hagelstam',
  role: 'Fullstack Developer',
  description:
    "I'm a full-stack developer from Finland. I take pride in building fast, scalable applications using modern web technologies. Currently, I'm a high school student, but in my free time you will find me building pet projects and learning more about my favorite technologies.",
  social: {
    linkedin: 'https://www.linkedin.com/in/maximilian-hagelstam-704840186/',
    github: 'https://github.com/MaximilianHagelstam',
  },
};

const projects = [
  {
    name: 'CryptoChimp',
    description:
      'Trade cryptocurrency on real market data, but with fake money',
    stack: ['Node', 'React', 'MongoDB'],
    sourceCode: 'https://github.com/MaximilianHagelstam/cryptochimp',
    livePreview: 'https://cryptochimp.netlify.app',
  },
  {
    name: 'Dohi',
    description: 'Homework tracker. Keep track of assignments and projects',
    stack: ['Node', 'React', 'PostgreSQL'],
    sourceCode: 'https://github.com/MaximilianHagelstam/dohi',
    livePreview: 'https://dohi.netlify.app',
  },
  {
    name: 'Dapple',
    description: 'Website that lets you search for rhymes',
    stack: ['Spring Boot', 'React', 'PostgreSQL'],
    sourceCode: 'https://github.com/MaximilianHagelstam/dapple',
    livePreview: 'https://dappleapp.netlify.app',
  },
  {
    name: 'Todo CLI',
    description: 'A simple command-line tool for managing Google Tasks',
    stack: ['Node', 'Google APIs'],
    sourceCode: 'https://github.com/MaximilianHagelstam/todo-cli',
  },
  {
    name: 'Aura',
    description: 'Real time room temperature app',
    stack: ['Raspberry PI', 'Arduino', 'Socket.io'],
    sourceCode: 'https://github.com/MaximilianHagelstam/aura',
  },
  {
    name: 'Larkanscran',
    description: "Check out Lärkan Gymnasiet's lunch menu today",
    stack: ['Node', 'React'],
    sourceCode: 'https://github.com/MaximilianHagelstam/larkanscran',
    livePreview: 'https://larkanscran.netlify.app',
  },
];

const skills = [
  'JavaScript',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'Node.js',
  'React.js',
  'Git',
  'Docker',
];

const contact = {
  email: 'maximilian.hagelstam@gmail.com',
};

export { header, about, projects, skills, contact };
