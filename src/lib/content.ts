export const SITE = {
  name: 'G-TEC EDUCATION UK',
  legalName: 'G-TEC EDUCATION UK Limited',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gtec.uk',
  phone: '+44 7311 225222',
  phoneHref: 'tel:+447311225222',
  email: 'ro.uk@gteceducation.com',
  address: {
    street: 'Office 718, Crown House Business Centre, North Circular Road',
    locality: 'London',
    postalCode: 'NW10 7PN',
    country: 'GB',
  },
  registered: { street: '115 London Road', locality: 'Morden, England', postalCode: 'SM4 5HP' },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61592236351449',
    instagram: 'https://www.instagram.com/gtec.uk/',
    linkedin: 'https://www.linkedin.com/company/g-tec-groupofinstitutions',
  },
  ukprn: '10101903',
  hq: { name: 'House of G-TEC', street: 'Indus Avenue', locality: 'Calicut - 673002, India', phones: ['+91 495 408 8333', '+91 95269 93944'], email: 'info@gteceducation.com' },
  me: { name: 'Al Qusais G-TEC EDUCATION Institute', street: 'Villa 19', locality: 'Al Qusais 2, Dubai, United Arab Emirates', phones: ['+971 4 266 5884', '+971 50 398 0768'] },
  global: 'https://www.gteceducation.com',
  privacy: 'https://www.gteceducation.com/privacypolicy',
  verify: 'https://www.gtecadmin.com/validation/index.aspx',
};

export const NAV: [string, string][] = [
  ['/about', 'About'], ['#journey', 'Journey'], ['#courses', 'Courses'], ['#why', 'Why G-TEC'], ['#network', 'Network'], ['#stories', 'Stories'], ['#software', 'Software'], ['#contact', 'Contact'],
];

export type Course = { slug: string; cat: string; title: string; desc: string; duration: string; level: string; img: string };

export const WORDS = ['London.', 'the UK.', 'you.'];
export const TICKER = ['Cohort 04 · AI & ML starts October', 'Open day · Crown House, Park Royal', 'Placement drive · London employers'];
export const STATS: { value: number; format: (v: number) => string; label: string }[] = [
  { value: 23, format: (v) => Math.round(v) + '+', label: 'Countries' },
  { value: 800, format: (v) => Math.round(v) + '+', label: 'Centres worldwide' },
  { value: 4.3, format: (v) => v.toFixed(1) + 'M', label: 'Alumni' },
  { value: 20, format: (v) => Math.round(v) + '+', label: 'Years of skilling' },
];

export const SCENES = [
  { n: '01', kicker: 'Assess', title: 'A proper chat, not a sales pitch.', caption: 'Talk through your goals with a consultant', body: 'First we find out where you are now and where you want to get to. Then one of our consultants helps you pick the right course, start date and way to pay for it.', tags: ['Free consultation', 'Skills assessment', 'Funding guidance'], img: '/media/interview.jpg' },
  { n: '02', kicker: 'Train', title: 'Learn by building, with instructors who work in tech.', caption: 'Live projects, real tools', body: 'Small classes at our Park Royal centre, taught by people who do this for a living. Every module ends with something you can show an employer, like a live app, a working model or a security audit.', tags: ['Live projects', 'Industry tools', 'Small cohorts'], img: '/media/train.jpg' },
  { n: '03', kicker: 'Place', title: 'A certificate that counts in 23+ countries, and help finding the job.', caption: 'Placement support and job fairs', body: 'You finish with a G-TEC certificate employers can check online. Then our placement team, vacancy board and job fairs help you find your first role.', tags: ['Placement desk', 'Job fairs', 'Global registry'], img: '/media/place.jpg' },
];

export const PILLARS = [
  { n: '01', title: 'Industry-aligned curricula', desc: 'We build our courses with employers and update them for every intake, so you learn what companies are hiring for right now.', img: '/media/curric.jpg', navy: false },
  { n: '02', title: 'University collaborations', desc: 'Want to keep studying? Our university partners in the UK and abroad offer routes into further study, and your credits come with you.', img: '/media/uni.jpg', navy: false },
  { n: '03', title: 'Corporate alliances', desc: 'We work with London businesses who help shape what we teach, and who hire our graduates.', img: '/media/london.jpg', navy: false },
  { n: '04', title: 'Placement support', desc: 'A placement team that knows you by name, a board of live vacancies and regular G-TEC job fairs.', img: '/media/assess.jpg', navy: true },
];

export const COUNTRIES: [string, number, number][] = [
  ['United Kingdom', 54, -2], ['India', 21, 78], ['UAE', 24, 54], ['Saudi Arabia', 24, 45], ['Qatar', 25, 51], ['Oman', 21, 57], ['Bahrain', 26, 50.5], ['Kuwait', 29, 47.5], ['Egypt', 27, 30], ['Iran', 32, 53], ['Malaysia', 4, 102], ['Singapore', 1.3, 103.8], ['Sri Lanka', 7.5, 80.7], ['Philippines', 12, 122], ['Australia', -25, 134], ['USA', 39, -98], ['Mexico', 23, -102], ['Kenya', 0.5, 37.5], ['Tanzania', -6, 35], ['Ghana', 7.9, -1], ['Zambia', -13, 28], ['Malawi', -13.5, 34], ['Zimbabwe', -19, 30],
];
export const NETWORK_TILES = [['23+', 'Countries'], ['800+', 'Centres'], ['4.3M', 'Alumni'], ['20+', 'Years']];

export const TESTIMONIALS = [
  { quote: 'Every interview I had asked about the AI and cloud work I did on FutureX. Three months after finishing I started a solutions role.', name: 'Aisha R.', role: 'FutureX graduate · Cloud Solutions Analyst' },
  { quote: 'My instructor was working in security at the same time as teaching us, and it showed. When I moved countries, my certificate still counted.', name: 'Daniel M.', role: 'Cyber Security & Ethical Hacking' },
  { quote: 'I was working in hospitality and wanted out. Having a clear plan and a placement team behind me made switching to development feel possible.', name: 'Priya S.', role: 'Full Stack Development · Junior Developer' },
  { quote: 'We were working with real data from week one. The dashboards I built on the course are what got me my first analyst job.', name: 'Tomasz K.', role: 'Data Science, Analytics & BI' },
];

export type FocusCourse = { slug: string; cat: string; img: string; level: string; kicker: string; title: string; blurb: string; duration: string; intro: string[]; modules: string[]; pdf: string };
export const FOCUS_COURSES: FocusCourse[] = [
  {
    slug: 'generative-ai-applied-tools', cat: 'Beginner', blurb: 'Get fluent with modern AI tools, from prompting LLMs and vision models to building your first AI apps.', img: 'ai', level: 'Level 1', kicker: 'Certificate in', title: 'Generative AI & Applied AI Tools', duration: '120 hours',
    intro: ['Step into the world of AI with our Level 1 Generative AI for Beginners programme. Designed for undergraduates across Engineering, Science, Arts and Commerce, this 120-hour hands-on course lets you explore AI tools, build smart applications and master multimodal AI systems through labs, projects and assessments.'],
    modules: ['Introduction to AI & Digital Fluency', 'Basics of Generative AI', 'Prompt Engineering with LLMs', 'Prompt Engineering with Vision Models', 'AI with Audio & Speech Models', 'Ethical AI & Safety', 'AI Tools (ChatGPT, Gemini, Claude, Cursor)', 'Capstone Project', 'Assessments & Demo'],
    pdf: 'CERTIFICATE IN GENERATIVE AI & APPLIED AI TOOLS.pdf',
  },
  {
    slug: 'generative-ai-pipelines-rag', cat: 'Advanced', blurb: 'Go deeper into ML, embeddings and RAG, and build end-to-end AI pipelines on real data.', img: 'ds', level: 'Level 2', kicker: 'Advanced Certificate in', title: 'Generative AI Pipelines & RAG Systems', duration: '2 months · 120 hours',
    intro: ['The Level 2 Advanced AI programme builds on the foundations of Level 1, taking you deeper into machine learning, deep learning, advanced prompt engineering, vector embeddings and Retrieval-Augmented Generation (RAG).', 'Across 120 hours of theory, hands-on labs, capstone projects and assessments, you move from designing prompts and small AI applications to building end-to-end AI pipelines, integrating APIs and developing domain-specific AI solutions.'],
    modules: ['Deep Dive into Machine Learning Concepts', 'Demystifying Deep Learning', 'Advanced Prompt Engineering & Context Engineering', 'Vector Embeddings & Semantic Search Applications', 'Deep Dive into RAG Systems', 'Implementing RAG Systems', 'Steps to Improve RAG Systems', 'Capstone Project', 'Assessments & Demo'],
    pdf: 'ADVANCED CERTIFICATE IN GENERATIVE AI PIPELINES & RAG SYSTEM.pdf',
  },
  {
    slug: 'ai-agents-automation-deployment', cat: 'Advanced', blurb: 'Design, build and deploy autonomous agents with LangGraph, CrewAI, browser agents and MCP.', img: 'ag', level: 'Level 3', kicker: 'Professional Certificate in', title: 'AI Agents, Automation & Deployment', duration: '120 hours',
    intro: ['This Level 3 programme is designed for advanced undergraduates preparing for AI internships and careers in agentic AI systems. The focus is on AI agents, multi-agent architectures, browser agents and the Model Context Protocol (MCP): the frontier of applied AI today.', 'You gain a strong theoretical foundation along with hands-on experience designing, building and deploying autonomous AI agents that can reason, plan, use tools and work effectively in digital environments.'],
    modules: ['Introduction to AI Agents', 'Building AI Agents with LangGraph & CrewAI', 'Browser Agents', 'MCP, Tool Calling & Function Calling', 'Capstone Project', 'Assessments & Demo'],
    pdf: 'PROFESSIONAL CERTIFICATE IN AI AGENTS, AUTOMATION & DEPLOYMENT.pdf',
  },
  {
    slug: 'aws-generative-ai-practitioner', cat: 'Certification', blurb: 'Build GenAI on AWS and prepare for the AWS AI Practitioner certification.', img: 'fs', level: 'Certification prep', kicker: 'Certification Programme in', title: 'AWS Generative AI & AI Practitioner Readiness', duration: '2 months · 60 hours',
    intro: ['This 2-month, 60-hour programme is designed for working professionals and certification aspirants who want a solid foundation in AI, Machine Learning and Generative AI while preparing for the AWS AI Practitioner Certification.', 'The curriculum aligns with the official AI Practitioner exam framework, with 45 hours of guided sessions and 15 hours of hands-on practice covering AI/ML fundamentals, AWS services, Generative AI, RAG, model customisation, MLOps, Responsible AI, Security and Governance.'],
    modules: ['AI & ML Fundamentals', 'Building AI Applications with AWS', 'Common GenAI Patterns', 'Model Customisation & Evaluation', 'Bringing AI to Production', 'Responsible AI, Security & Governance', 'Exam Preparation & Mock Tests'],
    pdf: 'CERTIFICATION PROGRAM IN AWS GENERATIVE AI & AI PRACTITIONER READINESS.pdf',
  },
  {
    slug: 'generative-ai-foundation-models-fmops', cat: 'Certification', blurb: 'A career-switch programme: foundation models, FMOps and a portfolio of real AI projects.', img: 'cs', level: 'Career programme', kicker: 'Professional Certificate in', title: 'Generative AI, Foundation Models & FMOps', duration: '360 hours',
    intro: ['This programme is designed for graduates and career switchers aiming to enter the AI job market. It balances theory, hands-on labs and capstone projects within a manageable 15-hour-per-week commitment.', 'You build a FutureX-hosted portfolio of AI projects while gaining practical experience in Generative AI, Machine Learning & Deep Learning, AI Agents, Foundation Model Customisation and FMOps. The programme also prepares you for the AWS AI Practitioner Certification.'],
    modules: ['AI & ML Fundamentals', 'Building AI Applications with AWS', 'Common GenAI Patterns', 'Model Customisation & Evaluation', 'Bringing AI to Production', 'Responsible AI, Security & Governance', 'Exam Preparation & Mock Tests'],
    pdf: 'PROFESSIONAL CERTIFICATION IN GENERATIVE AI, FOUNDATION MODELS & FMOPS.pdf',
  },
];


// The professional courses section and enquiry form list the same brochure courses.
export const COURSES: Course[] = FOCUS_COURSES.map((c) => ({ slug: c.slug, cat: c.cat, title: c.title, desc: c.blurb, duration: c.duration, level: c.level, img: `/media/${c.img}.jpg` }));
export const CATS = ['All', 'Beginner', 'Advanced', 'Certification'];
