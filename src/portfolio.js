const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Daryl Wattima',
  role: 'Full Stack Engineer | Digital Marketer',
  description:
    'Passionate Software Engineer and Digital Marketing Specialist with a flair for innovation and a strong drive to solve complex challenges. Experienced in HTML, CSS, JavaScript, React, Ruby, and a variety of digital marketing tools and strategies. Skilled in crafting efficient, user-centric web applications, developing successful digital campaigns, and collaborating in diverse teams to create seamless digital experiences. Eager to contribute my diverse skillset and learn from fellow professionals in the dynamic world of technology. Lifelong learner, technology enthusiast, and believer in the power of code and digital marketing to shape the future',
  resume: 'https://docs.google.com/document/d/1b6FyxbPp9Rj0p2MZQoOcotKh2sRLHQNI5fOPsW6xyXY/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/daryl-wattima-b43961243/',
    github: 'https://github.com/Wattima',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SPACER',
    description:
      'A Rails-React app that allows a user to lease or book a space.',
    stack: ['Ruby on Rails', 'React'],
    sourceCode: 'https://github.com/Seansama/Spacer',
    livePreview: 'https://spacer-nine.vercel.app/',
  },
  {
    name: 'movie-finder',
    description:
      'This is the frontend component of a movie management application built with React. The frontend provides a user interface for creating, reading, updating, and deleting movies, and also handles user authentication and session management. The application communicates with the backend API to retrieve and manipulate data.',
    stack: ['React', 'CSS'],
    sourceCode: 'https://github.com/Wattima/movie_finder_frontend',
    livePreview: 'https://movie-library-frontend.vercel.app/',
  },
  {
    name: 'etch-a-sketch',
    description:
      'This interactive web app recreates the childhood joy of the Etch-a-Sketch using just your mouse. Choose colors, draw lines, and clear with a click to bring back memories or explore endless creativity.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/Wattima/etch-a-sketch',
    livePreview: 'https://wattima.github.io/etch-a-sketch/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Ruby on Rails',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'darwattima@gmail.com',
}

export { header, about, projects, skills, contact }
