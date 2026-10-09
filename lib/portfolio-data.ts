export const profile = {
  name: 'Abdullah Qambari',
  headline: 'Turning Data Into Insights, Insights Into Decisions.',
  roles: [
    'Business Analyst',
    'Data Analyst',
    'Reporting Analyst',
    'Operations Analyst',
    'Monitoring & Evaluation Specialist',
  ],
  location: 'Richmond, Virginia',
  email: 'ab.qambari@gmail.com',
  photo: '/images/abdullah-qambari.jpg',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '11+', label: 'Years of experience' },
  { value: '4', label: 'Organizations served' },
  { value: '10', label: 'Analytics tools' },
]

export const experience = [
  {
    organization: 'U.S. Department of State',
    context: 'Through Cherokee Federal',
    focus: 'Monitoring, Evaluation & Data Analysis',
    points: [
      'Supported program monitoring and performance reporting for U.S. government foreign assistance programs.',
      'Organized and validated program data, tracking indicators and progress in systems such as DevResults.',
      'Prepared clear summaries and reports that helped program staff understand results and next steps.',
    ],
  },
  {
    organization: 'U.S. Embassy Kabul',
    context: 'Program support',
    focus: 'Program Monitoring & Reporting',
    points: [
      'Collected, reviewed, and analyzed program data to monitor performance against defined targets.',
      'Developed KPI reports and dashboards for program and management review.',
      'Worked with implementing partners to strengthen data quality and reporting consistency.',
    ],
  },
  {
    organization: 'Aga Khan Health Service',
    context: 'Health sector',
    focus: 'Monitoring & Evaluation, Performance Measurement',
    points: [
      'Tracked health program indicators and contributed to routine performance assessments.',
      'Built data collection tools and analyzed results to support program planning.',
      'Translated findings into reports for management and donor audiences.',
    ],
  },
  {
    organization: 'First Microfinance Bank',
    context: 'Financial services',
    focus: 'Business Analysis & Process Improvement',
    points: [
      'Analyzed operational and financial data to support business decisions.',
      'Identified process gaps and helped improve workflows and reporting routines.',
      'Produced regular performance reports for branch and management teams.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Data & Analysis',
    description: 'Querying, cleaning, and modeling data to answer real business questions.',
    skills: ['Excel', 'SQL', 'Python', 'R'],
  },
  {
    title: 'Visualization & Reporting',
    description: 'Dashboards and reports that make performance easy to read and act on.',
    skills: ['Power BI', 'Tableau', 'Streamlit'],
  },
  {
    title: 'Statistics & M&E Systems',
    description: 'Statistical analysis and results tracking for programs and operations.',
    skills: ['SAS Viya', 'SPSS', 'DevResults'],
  },
]

export const competencies = [
  'KPI design & reporting',
  'Performance measurement',
  'Business process improvement',
  'Data quality assurance',
  'Monitoring & evaluation frameworks',
  'Stakeholder reporting',
]

export const projects = [
  {
    title: 'Ride Profit Tracker',
    category: 'Python · Streamlit',
    description:
      'An application that helps rideshare drivers analyze earnings, expenses, and net profitability, so they can see what each shift actually pays.',
    tags: ['Python', 'Streamlit', 'Financial analysis'],
    href: 'https://ride-profit-tracker-8st2bg3zaek8s43qeq8rjb.streamlit.app/',
    linkLabel: 'Open live app',
  },
  {
    title: 'Mortgage Progress Analyzer',
    category: 'Interactive financial tool',
    description:
      'An interactive tool for exploring mortgage payments, interest over time, and affordability under different scenarios.',
    tags: ['Python', 'Streamlit', 'Scenario modeling'],
    href: 'https://mortgageprogresstracker-tljszwv85rb4zoemuetoro.streamlit.app/',
    linkLabel: 'Open live app',
  },
  {
    title: 'Mortgage Affordability Research',
    category: 'Graduate capstone',
    description:
      'A capstone research project analyzing the factors that influence home affordability, combining data analysis with clear, decision-oriented findings.',
    tags: ['Research', 'Statistical analysis', 'Housing data'],
    href: null,
    linkLabel: 'Capstone research',
  },
]

export const education = [
  {
    degree: 'M.S. in Business Analytics',
    school: 'Regent University',
    note: 'Coursework completed August 2026',
  },
  {
    degree: 'MBA in Project & General Management',
    school: null,
    note: 'Graduate business degree',
  },
  {
    degree: 'BBA in General Management',
    school: null,
    note: 'Undergraduate business degree',
  },
]
