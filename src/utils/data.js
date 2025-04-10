import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";

export const projectExperience = [
  {
    name: "Office Projects",
    projects: 8,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
    link: "/office-projects",
  },
  {
    name: "Practice Projects",
    projects: 9,
    icon: CiMobile1,
    bg: "#EEC048",
    link: "/",
  },
];

export const WhatDoIHelp = [
  "I turn ideas into impactful, user-focused applications using modern technologies and best development practices. From concept to deployment, I build solutions that are intuitive, efficient, and built to scale.",
  "Beyond writing code, I focus on optimizing workflows, improving performance, and ensuring long-term maintainability. My goal is to help your product succeed by delivering clean, scalable, and future-ready solutions.",
];

export const workExp = [
  {
    place: "Docthub Pvt. Ltd.",
    tenure: "Aug 2021 – Sep 2023 (Full-Time), Oct 2023 – Oct 2024 (Consultant)",
    role: "Software Engineer & Consultant",
    detail:
      "Started as a backend developer using ASP.NET Core to design and maintain scalable RESTful APIs. Transitioned into frontend development with React and Next.js to build responsive, SEO-friendly interfaces. Played a key role in migrating legacy systems, optimizing database performance with MySQL, and implementing CI/CD pipelines via Azure DevOps. Collaborated closely with designers and a team of 6+ developers in Agile sprints, ensuring clean code and timely deliveries across multiple healthcare platforms, including jobs, courses, and events portals.",
  },
  {
    place: "Freelance Developer",
    tenure: "Nov 2024 – Present",
    role: "Software Developer",
    detail:
      "Delivered end-to-end solutions for multiple clients in the healthcare and retail space. Built a responsive dental clinic website with Firebase authentication and real-time booking. Developed a full-stack e-commerce platform with React Native and React Web for mobile and admin panels. Focused on clean UI with Tailwind CSS, seamless user experience, and integrating real-time database functionalities. Collaborated directly with clients to gather requirements and deploy high-quality web apps under tight timelines.",
  },
];

export const skills = [
  {
    place: "Front-End Development",
    role: [
      "JAVASCRIPT",
      "REACT JS",
      "NEXT JS",
      "TAILWIND CSS",
      "BOOTSTRAP",
      "SASS",
      "MUI",
      "STORYBOOK",
      "SWR",
      "AXIOS",
      "REDUX TOOL-KIT",
      "REDUX",
    ],
  },
  {
    place: "Back-End Development",
    role: ["ASP .NET CORE", "SWAGGER", "MY-SQL", "ENTITY-FRAMWORK"],
  },
  {
    place: "Database And Deployment",
    role: ["MY-SQL", "FIREBASE", "MONGO-DB", "VERCEL", "GIT", "AZURE DEVOPS"],
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const officeProjects = [
  {
    title: "Docthub",
    description:
      "Contributed to frontend development of a healthcare platform using Next Js. Implemented dynamic routing, reusable components, and API integration for a seamless user experience.",
    image: "/public/docthub_bg.webp",
    link: "https://www.docthub.com/",
  },
  {
    title: "Docthub Jobs",
    description:
      "Developed job listing and filtering features using Next Js. Integrated secure forms and optimized API handling for efficient job searches and applications.",
    image: "/public/JobsGraphic1.webp",
    link: "https://jobs.docthub.com/",
  },
  {
    title: "Docthub Courses",
    description:
      "Created modular UI components and integrated third-party APIs to display healthcare-related courses. Focused on responsive design and SEO optimization.",
    image: "/public/CourseGraphic1.webp",
    link: "https://courses.docthub.com/",
  },
  {
    title: "Docthub Events",
    description:
      "Implemented event listing, calendar view, and RSVP functionalities. Optimized performance with lazy loading and enhanced UX across devices.",
    image: "/public/EventsGraphic1.webp",
    link: "https://events.docthub.com/",
  },
  {
    title: "Docthub Enterprise",
    description:
      "Built enterprise dashboard using React and Redux. Developed analytics widgets and implemented role-based access control for admin-level tools.",
    image: "/public/maxresdefault.jpg",
    link: "https://www.docthub.com/enterprise-solutions",
  },
  {
    title: "Docthub Accounts",
    description:
      "Integrated authentication system using JWT and developed user profile management modules with secure password recovery and session tracking.",
    image: "/public/OIP.jpeg",
    link: "https://accounts.docthub.com/",
  },
  {
    title: "Docthub Console",
    description:
      "Designed internal tools for content and configuration management. Built scalable admin interface focusing on modular code and permission handling.",
    image: "/public/d4009b7b8f98f5c0f7011c4c94ed1db4.jpg",
    link: "https://console.docthub.com/",
  },
  {
    title: "Docthub Membership Management",
    description:
      "Developed membership registration, role assignments, and payment features. Built dashboards to manage member activities and committee roles.",
    image: "/public/easeYourBurdenSection.webp",
    link: "https://www.docthub.com/membership-management",
  },
];

export const practiceProjects = [
  {
    title: "CA App Landing",
    description: "Minimal app landing template for SaaS and mobile showcases.",
    image: "/public/docthub_bg.webp",
    link: "https://example.com",
  },
  {
    title: "Yaseen",
    description: "Photography landing page for professionals and creatives.",
    image: "/public/showCase1.png",
    link: "https://example.com",
  },
  // Add more practice projects
];
