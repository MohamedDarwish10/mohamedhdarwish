export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  screenshots: string[];
  highlights: string[];
  technologies: string[];
  dataSource: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "healthcare-social-media",
    title: "Healthcare Social Media Performance Analysis",
    description: "Analysing the performance of Paid and organic Posts, Stories, and Reels for healthcare sector.",
    shortDescription: "Analysing the performance of Paid and organic Posts, Stories, and Reels",
    screenshots: [
      "/images/projects/nmc-thumb.jpg",
      "/images/projects/nmc-7.svg",
      "/images/projects/nmc-8.svg",
      "/images/projects/nmc-9.svg",
    ],
    highlights: [
      "Social media engagement metrics",
      "Content performance analysis",
      "Paid vs Organic reach",
      "Audience demographics",
    ],
    technologies: ["Power BI", "Google Sheets", "Supermetrics", "Appscript"],
    dataSource: "Social Media APIs",
    category: "Healthcare",
  },
  {
    id: "real-estate-afm",
    title: "Real Estate Lead Generation",
    description: "Multi-channel marketing campaign performance dashboard for AFM real estate projects.",
    shortDescription: "Multi-channel marketing campaign performance dashboard",
    screenshots: [
      "/images/projects/afm-thumb.jpg",
      "/images/projects/afm-1.jpg",
      "/images/projects/afm-2.jpg",
      "/images/projects/afm-3.jpg",
      "/images/projects/afm-4.jpg",
    ],
    highlights: [
      "Multi-channel analysis",
      "Lead source tracking",
      "Cost per lead analysis",
      "ROI tracking",
    ],
    technologies: ["Power BI", "Google Sheets", "Supermetrics", "Appscript"],
    dataSource: "Google Sheets",
    category: "Real Estate",
  },
  {
    id: "salesforce-analysis",
    title: "Salesforce Analysis",
    description: "Multi-channel Salesforce Analysis dashboard converted from landscape to vertical Aspect Ratio based on the client's requirments.",
    shortDescription: "Multi-channel Salesforce Analysis dashboard (Vertical)",
    screenshots: [
      "/images/projects/salesforce-thumb.jpg",
      "/images/projects/salesforce-copy-1.jpg",
      "/images/projects/salesforce-copy-2.jpg",
      "/images/projects/salesforce-copy-3.jpg",
      "/images/projects/salesforce-copy-4.jpg",
      "/images/projects/salesforce-copy-5.jpg",
      "/images/projects/salesforce-1.jpg",
      "/images/projects/salesforce-2.jpg",
      "/images/projects/salesforce-3.jpg",
    ],
    highlights: [
      "Vertical aspect ratio design",
      "Sales pipeline analysis",
      "Lead conversion tracking",
      "Revenue forecasting",
    ],
    technologies: ["Power BI", "Salesforce", "Google Sheets", "Supermetrics", "Appscript"],
    dataSource: "Salesforce",
    category: "CRM Analytics",
  },
  {
    id: "real-estate-jubail",
    title: "Real Estate Lead Generation",
    description: "Multi-channel marketing campaign performance dashboard focused on real estate lead generation for Jubail project.",
    shortDescription: "Multi-channel marketing campaign performance dashboard",
    screenshots: [
      "/images/projects/jubail-thumb.jpg",
      "/images/projects/jubail-1.jpg",
      "/images/projects/jubail-2.jpg",
      "/images/projects/jubail-3.jpg",
      "/images/projects/jubail-4.jpg",
    ],
    highlights: [
      "Lead generation tracking",
      "Campaign performance analysis",
      "Regional performance metrics",
      "Conversion rate optimization",
    ],
    technologies: ["Power BI", "Google Sheets", "Supermetrics", "Appscript"],
    dataSource: "Google Sheets",
    category: "Real Estate",
  },
  {
    id: "education-marketing",
    title: "Education Marketing Analysis",
    description: "Multi-channel marketing campaign performance dashboard",
    shortDescription: "Multi-channel marketing campaign performance dashboard",
    screenshots: [
      "/images/projects/sms-thumb.jpg",
      "/images/projects/sms-1.jpg",
      "/images/projects/sms-2.jpg",
      "/images/projects/sms-3.jpg",
      "/images/projects/sms-4.jpg",
      "/images/projects/sms-5.jpg",
      "/images/projects/sms-6.jpg",
    ],
    highlights: [
      "Multi-channel campaign tracking",
      "Performance by channel",
      "Cost analysis",
      "Lead generation metrics",
    ],
    technologies: ["Power BI", "Google Sheets", "Supermetrics", "Appscript"],
    dataSource: "Google Sheets",
    category: "Marketing",
  },
  {
    id: "space-missions",
    title: "Space Exploration Missions Analysis",
    description: "All space missions from 1957 to August 2022, including details on the location, date, and result of the launch, the company responsible, and the name, price, and status of the rocket used for the mission.",
    shortDescription: "Analysis of space missions from 1957 to 2022",
    screenshots: [
      "/images/projects/space-thumb.jpg",
      "/images/projects/space-off.jpg",
      "/images/projects/space-on.jpg",
    ],
    highlights: [
      "Historical launch trends",
      "Mission success rates",
      "Rocket performance analysis",
      "Geospatial launch data",
    ],
    technologies: ["Power BI", "CSVs"],
    dataSource: "Maven Analytics",
    category: "Science",
  },
];
