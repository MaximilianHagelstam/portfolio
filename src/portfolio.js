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
    description: 'Translation app, powered by Azure Translator.',
    stack: ['React', 'Material UI', 'Azure Translator'],
    sourceCode: 'https://github.com/MaximilianHagelstam/translatir',
    livePreview: 'https://translatir.netlify.app/',
  },
  {
    name: 'Wordly',
    description: 'Word remembering app, for expanding your vocabulary.',
    stack: ['ASP.NET Core', 'SQL Server', 'React'],
    sourceCode: 'https://github.com/MaximilianHagelstam/Wordly',
    livePreview: 'https://wordly.azurewebsites.net/',
  },
  {
    name: 'Ocr Api',
    description: 'An API, that parses the text in images using Tesseract.',
    stack: ['C#', 'ASP.NET Core', 'Tesseract'],
    sourceCode: 'https://github.com/MaximilianHagelstam/OcrApi',
    livePreview: 'https://ocrapi.azurewebsites.net/api/home/',
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
  email: 'maximilian.hagelstam@gmail.com',
};

export { header, about, projects, skills, contact };
