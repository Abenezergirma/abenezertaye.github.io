export const siteConfig = {
  name: "Abenezer Taye - Research Portfolio",
  description: "Post-Doctoral Research Scholar specializing in Advanced Air Mobility, Trajectory Planning, and Autonomous Systems at Vanderbilt University",
  url: "https://abenezertaye.com",
  ogImage: "/images/og-image.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/abenezer-taye/",
    github: "https://github.com/Abenezergirma",
    email: "abenezertaye@gvu.edu"
  },
  contact: {
    phone: "(336) 335-8289",
    office: "1400 18th Ave S, Vanderbilt University, Nashville, TN 37212"
  }
} as const;

export type SiteConfig = typeof siteConfig;