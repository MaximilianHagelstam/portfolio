const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MaximilianHagelstam/portfolio',
  title: 'MH.',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Maximilian Hagelstam',
  role: 'Fullstack Developer',
  description: 'I need to write this about part',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/maximilian-hagelstam-704840186/',
    github: 'https://github.com/MaximilianHagelstam',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Translatir',
    description: 'Translation app',
    stack: ['React', 'Material UI', 'Azure'],
    sourceCode: 'https://github.com/MaximilianHagelstam/translatir',
    livePreview: 'https://translatir.netlify.app/',
  },
  {
    name: 'Ocr Api',
    description: 'An OCR API',
    stack: ['C#', 'ASP.NET Core', 'Tesseract'],
    sourceCode: 'https://github.com/MaximilianHagelstam/OcrApi',
    livePreview: 'https://github.com',
  },
  {
    name: 'Wordly',
    description: 'Word remembering app',
    stack: ['ASP.NET Core', 'SQL Server', 'React'],
    sourceCode: 'https://github.com/MaximilianHagelstam/Wordly',
    livePreview: 'https://github.com',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C#',
  'JavaScript',
  'Python',
  'HTML',
  'CSS',
  'SQL Server',
  '.NET',
  'ASP.NET Core',
  'Entity Framework',
  'React.js',
  'Git',
  'Visual Studio',
  'VS Code',
  'Postman',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'maximilian.hagelstam@mail.com',
};

export { header, about, projects, skills, contact };
