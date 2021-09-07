const header = {
  homepage: 'https://github.com/MaximilianHagelstam/portfolio',
  title: 'MH.',
};

const about = {
  name: 'Maximilian Hagelstam',
  role: 'Fullstack Developer',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at molestias nostrum itaque exercitationem in impedit officiis, voluptatum tenetur natus, cupiditate recusandae suscipit veniam laboriosam odio eaque reprehenderit hic consequatur!',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/maximilian-hagelstam-704840186/',
    github: 'https://github.com/MaximilianHagelstam',
  },
};

const projects = [
  {
    name: 'Translatir',
    description: 'Translation app',
    stack: ['React', 'Material UI', 'Azure Translator'],
    sourceCode: 'https://github.com/MaximilianHagelstam/translatir',
    livePreview: 'https://translatir.netlify.app/',
  },
  {
    name: 'Wordly',
    description: 'Word remembering app',
    stack: ['ASP.NET Core', 'SQL Server', 'React'],
    sourceCode: 'https://github.com/MaximilianHagelstam/Wordly',
    livePreview: 'https://github.com',
  },
  {
    name: 'Ocr Api',
    description: 'API for parsing text in images',
    stack: ['C#', 'ASP.NET Core', 'Tesseract'],
    sourceCode: 'https://github.com/MaximilianHagelstam/OcrApi',
    livePreview: 'https://github.com',
  },
];

const skills = [
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
  email: 'maximilian.hagelstam@mail.com',
};

export { header, about, projects, skills, contact };
