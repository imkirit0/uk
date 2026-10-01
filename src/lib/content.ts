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
  ['/about', 'About'], ['#journey', 'Journey'], ['#courses', 'Courses'], ['#why', 'Why G-TEC'], ['#network', 'Network'], ['#stories', 'Stories'], ['#contact', 'Contact'],
];

export type Course = { slug: string; cat: string; title: string; desc: string; duration: string; level: string; img: string };
export const COURSES: Course[] = [
  { slug: 'futurex', cat: 'Emerging Tech', title: 'FutureX', desc: 'An advanced career acceleration program integrating AI, cloud computing, automation, innovation and emerging technologies.', duration: '180 hours', level: 'Career accelerator', img: '/media/ag.jpg' },
  { slug: 'ai-ml', cat: 'AI & Data', title: 'AI & Machine Learning', desc: 'Learn Artificial Intelligence, Machine Learning, Deep Learning and Generative AI using real-world projects and industry tools.', duration: '180 hours', level: 'Intermediate', img: '/media/ai.jpg' },
  { slug: 'cyber', cat: 'Security', title: 'Cyber Security & Ethical Hacking', desc: 'Develop practical skills in cyber defence, penetration testing, ethical hacking and digital forensics.', duration: '180 hours', level: 'Beginner to advanced', img: '/media/cs.jpg' },
  { slug: 'fullstack', cat: 'Development', title: 'Full Stack Development', desc: 'Become a professional web developer by mastering frontend and backend technologies with live projects.', duration: '180 hours', level: 'Job-ready', img: '/media/fs.jpg' },
  { slug: 'data', cat: 'AI & Data', title: 'Data Science, Analytics & Business Intelligence', desc: 'Gain expertise in data analysis, visualisation, predictive modelling and business intelligence platforms.', duration: '180 hours', level: 'Intermediate', img: '/media/ds.jpg' },
];
export const CATS = ['All', 'Emerging Tech', 'AI & Data', 'Security', 'Development'];

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
