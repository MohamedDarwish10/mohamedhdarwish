export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Language {
  name: string;
  level: number; // 0-100
}

export const personalInfo = {
  name: "Mohamed Darwish",
  title: "Data Analyst & Power BI Specialist",
  bio: "I'm a passionate Data Analyst and Power BI Specialist with over 2 years of experience in transforming raw data into actionable insights. I specialize in creating interactive dashboards, data visualization, and business intelligence solutions using Power BI, Python, SQL, and various analytics tools. With a strong background in engineering and data analysis, I bring a unique perspective to solving complex business problems through data-driven solutions.",
  email: "mohamedhdarwish97@gmail.com",
  phone: "+201017673236",
  location: "5th Settlement, New Cairo, Egypt",
  linkedin: "linkedin.com/in/mohamedhdarwish/",
};

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering, Aerospace Engineering",
    institution: "Zewail City of Science and Technology",
    period: "Graduated",
    description: "Specialized in aerospace engineering with a strong foundation in mathematics, physics, and engineering principles. Applied analytical thinking and problem-solving skills to complex engineering challenges.",
  },
];

export const experience: Experience[] = [
  {
    title: "Data Analyst & Power BI Specialist",
    company: "Heroleads",
    period: "Feb 2024 – Feb 2026",
    description: [
      "Build and maintain Power BI dashboards and reports to track key business metrics",
      "Analyze performance data using Python, Excel, and Google Sheets",
      "Ensure data accuracy through quality checks and collaboration with internal teams",
      "Provide weekly insights, highlighting trends, risks, and opportunities in digital marketing campaigns",
      "Support the development and improvement of data systems and processes",
      "Prioritize and manage data-related projects with client success teams",
      "Stay up to date with Power BI best practices and report to the Head of Performance & Data",
    ],
  },
  {
    title: "Software Engineer, First Lieutenant",
    company: "Egyptian Air Force in Association with US Air Force",
    period: "Oct 2021 – Oct 2023",
    description: [
      "Resolved 95% of database issues on time as a junior software engineer and was later promoted to First Lieutenant, maintaining 100% mainframe uptime and high user satisfaction",
      "Led 4 officers and 20+ soldiers while overseeing the rollout of next-gen mainframe, software, and network hardware for more than 10,000 users",
      "Collaborated with U.S. Air Force engineers to analyze and migrate databases containing 25,000+ tables and used Tableau and Power BI to present insights to commanders",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    name: "Marketing Analytics with Meta",
    issuer: "Meta-Coursera",
    date: "Mar 2024",
  },
  {
    name: "Data Analytics Methods for Marketing",
    issuer: "Meta-Coursera",
    date: "Mar 2024",
  },
  {
    name: "Version Control",
    issuer: "Meta-Coursera",
    date: "Nov 2023",
  },
  {
    name: "Statistics for Marketing",
    issuer: "Meta-Coursera",
    date: "Oct 2023",
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "Meta-Coursera",
    date: "Oct 2023",
  },
  {
    name: "Introduction to Databases",
    issuer: "Meta-Coursera",
    date: "Sep 2023",
  },
  {
    name: "Marketing Analytics Foundation",
    issuer: "Meta-Coursera",
    date: "Sep 2023",
  },
  {
    name: "Google Analytics for Beginners",
    issuer: "Google",
    date: "Sep 2023",
  },
  {
    name: "Data Analysis Advanced Nano Degree",
    issuer: "Udacity",
    date: "Jul 2022",
  },
  {
    name: "Data Analysis Professional Nano Degree",
    issuer: "Udacity",
    date: "Mar 2022",
  },
];

export const softwareSkills: Skill[] = [
  { name: "Power BI", level: 95 },
  { name: "Python", level: 80 },
  { name: "SQL", level: 80 },
  { name: "Tableau", level: 75 },
  { name: "Google Analytics", level: 65 },
  { name: "Excel", level: 95 },
  { name: "Pandas", level: 75 },
  { name: "Matplotlib", level: 70 },
];

export const languages: Language[] = [
  { name: "Arabic", level: 100 },
  { name: "English", level: 95 },
  { name: "German", level: 20 },
  { name: "Spanish", level: 10 },
];

export const personalSkills = [
  "Data Analysis",
  "Problem Solving",
  "Team Collaboration",
  "Project Management",
  "Business Intelligence",
  "Data Visualization",
];

export const services = [
  "Power BI Dashboards",
  "Data Analytics & Reporting",
  "Business Intelligence Solutions",
  "Data Visualization",
  "Performance Tracking",
  "Data Quality Assurance",
];

export const technicalSkills = [
  "Data Modeling & ETL",
  "DAX & M Query",
  "Statistical Analysis",
  "Data Integration",
  "Dashboard Design",
];
