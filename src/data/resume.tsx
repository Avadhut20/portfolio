import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Avadhut Kulkarni",
  initials: "AK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I amm a full stack developer with a love for crafting elegant solutions that solve real-world problems. ",
  summary:
    "Passionate about crafting innovative solutions at the intersection of technology and user experience, I am a proficient MERN stack developer with a flair for creative problem-solving. With expertise in Node.js, Express.js, React, and MongoDB, I thrive on building robust backend systems and intuitive interfaces.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Figma",
    "Github",
    "Postgres",
    "Docker",
    "Wordpress",
    "Java",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "avadhutkul60@gmail.com",
    tel: "+91-9373209438",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Avadhut20",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/avadhut-kulkarni-684169229/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/avadhutkul60",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Houseclay",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "#",
      start: "April 2024",
      end: "July 2024",
      description:
        "Developed Property Management Dashboard: Created a React and TypeScript dashboard with user management, property registration, and expense tracking features, improving operational efficiency by 40% and reducing administrative workload by 30%.",
    },
    {
      company: "Dhananjay Enterprises",
      badges: [],
      href: "https://www.dhananjayenterprises.com/",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "#",
      start: "January 2021",
      end: "April 2021",
      description:
        "Created a comprehensive website for a fire safety production company, utilizing React and Tailwind CSS for the front end, and Node.js with MongoDB for the back end.• Built robust databases to store client contact information and reviews, ensuring efficient data management and retrieval.• Developed an intuitive and responsive user interface, enhancing user experience and engagement through clean design and seamless navigation.",
    },
    {
      company: "Navkar Gruh Udyog",
      href: "https://navkarfood.in/",
      badges: [],
      location: "Remote",
      title: "Freelance developer",
      logoUrl: "#",
      start: "June 2021",
      end: "July 2021",
      description:
        "Built and deployed a secured e-commerce platform using WordPress with sales upward of 50K.Developed secure checkout via Instamojo, improving transactions with UPI, debit, credit cards and COD.",
    },
    
  ],
  education: [
    {
      school: "Nutan Maharashtra Institute of Engineering and Technology",
      href: "https://www.nmiet.edu.in/",
      degree: "Bachelors Of Engineering",
      logoUrl: "#",
      start: "2021",
      end: "2025",
    },
    
  ],
  projects: [
   
    {
      title: "Interview Insight",
      href: "https://ai-interview-insight.vercel.app/",
      dates: "April 2024 - March 2024",
      active: true,
      description:
        "Developed an AI Mock interview platform using Next JS, React and typescript.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Gemini AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-interview-insight.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
      
      
    },
  ],
  
} as const;
