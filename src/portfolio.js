const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ridhimittal.me',
  title: 'RM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ridhi Mittal',
  role: '',
  description:
    "I'm currently on exchange at University College London, and will be finishing up my BSc in Neuroscience and Computer Science in May 2024. I'm also working part-time as a software developer, and research decision-making models.",
  resume: '',
  social: {
    linkedin: 'https://linkedin.com/in/ridhimittal',
    github: 'https://github.com/ridhimittal3',
  },
  email: 'mittalridhi3@gmail.com',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Software Developer Intern',
    description:
      'I engineered a patient peer support app within the current AngularJS framework of the Opal patient portal.',
    stack: ['AngularJS', 'Django', 'SQL'],
    livePreview: 'https://opalmedapps.com/',
  },
  {
    name: 'Machine Learning Lab Fellow',
    description:
      'Designed and implemented a ML prototype for a virtual meeting tool that detects audio-based interruptions for the AI4Good Lab.',
    stack: ['TensorFlow', 'AWS', 'sci-kit learn', 'pandas'],
    sourceCode: 'https://github.com/AI4GoodProject/speechRecForMeeting',
    livePreview: 'https://www.canva.com/design/DAFD_hi3t0Q/raxVAqYuJYYD3ZWIafcBbQ/edit?utm_content=DAFD_hi3t0Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    name: 'Research Assistant at LNSC',
    description:
      'Implemented the Sample-based Expected Utility model to  assess model performance and implications for decision processes.',
    stack: ['MATLAB', 'pandas', 'Matplotlib', 'seaborn'],
    sourceCode: 'https://github.com/ridhimittal3/NSCI410ResearchProject',
    livePreview: 'https://drive.google.com/file/d/1s_mVFsm4BzKWpWKTOgJqRp0cfW4eJgje/view?usp=sharing',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'health technologies',
  'neurotech startups',
  'becoming a chess master',
  'napping',
  'designing cool logos',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '',
}

export { header, about, projects, skills, contact } 
