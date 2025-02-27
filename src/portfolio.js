const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://andyGonzalez.github.io/portfolio',
  title: 'AG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Andy Gonzalez',
  role: 'Test Automation Engineer',
  description: `Hi, I am Andy, a passionate QA Automation Engineer and Indie Game Developer.
  Coding is not just a job but a personal mission that becomes my passion. Whether that is optimally hunting down bugs, automating processes,
  or exploring the underbelly of game development, I strive to improve myself.
  My vision is unique because it is creative and not limited to knowing only my job, because as a developer, I like to understand the developers job too and that always enhance my vision to make better tests, wheter automated or not.`,
  resume: 'https://example.com',
  social: { 
    linkedin: 'https://www.linkedin.com/in/andy-gon/',
    github: 'https://github.com/SydAnderson',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: `Everis
    QA Automation`,
    description:
      'Designed and executed backend test cases, with a focus on Telecom business rules. Proficiently executed tests using Bash scripting, ensuring comprehensive evaluation of system functionalities',
    stack: ['Java', 'Javascript', "Selenium"],
  },
  {
    name: `Everis
    Frontend dev`,
    description:
      'Create the layout using vanilla JavaScript for a near real-time (NRT) page.',
    stack: ['Javascript', 'CSS', 'C#']
  },
  {
    name: `HS Consulting
    QA Automation Engineer`,
    description:
      `Performance API testing, Automation test in Python with BDD/Gherkin, for a insurance company`,
    stack: ['Python', 'Gherkin', 'BDD','JMeter'],
  },
  {
    name: `Navent
    QA Automation Engineer`,
    description:
      `E2E testing for a RealState company with presence in more of 10 countries`,
    stack: ['TypeScript', 'Javascript', 'TestCafe','Postman', 'Jenkins'],
  },
  {
    name: `GlobalLogic
    QA Analyst`,
    description:
      `E2E testing for a bank company and a telecomunication company`,
    stack: ['Java', 'Selenium', 'Appium','Postman', 'Jenkins'],
  },
  {
    name: `CrowdAr
    QA Automation Engineer`,
    description:
      `Enhance and expand Lippia framework (open source framework belonging to the company).`,
    stack: ['Selenium', 'Lippia','BBDD'],
  },
  {
    name: `Bamboo Payment System
    QA Automation Engineer`,
    description:
      `Starting a new framework from scratch to automate all the API system to a payment plataform`,
    stack: ['Postman', 'Javascript','BBDD', 'Azure devops'],
  },
  {
  name: `Globant
  QA Automation Engineer`,
  description: `E2E testing for a sport dedicated company with presence in all the world`,
  stack: ['Java', 'Selenium','Postman', 'Jenkins'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'C#',
  'Selenium',
  'Playwright',
  'TestCafe',
  'Appium',
  'Postman',
  'Jmeter',
  'CI/CD',
  'Jenkins',
  'Azure devops',
  'Gherkin',
  'Lippia',
  'SQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'andres.sggonzalez@gmail.com',
}

export { header, about, projects, skills, contact }
