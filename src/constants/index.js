import project1 from "../assets/projects/bragatourism.jpg";
import project2 from "../assets/projects/mobile.jpg";
import project3 from "../assets/projects/esquilo.jpg";
import project4 from "../assets/projects/walmart.jpg";
import project5 from "../assets/projects/java.jpg";

export const HERO_CONTENT = {
  p1: "I am a final-year Master's student in Information Systems Engineering. Throughout my academic career, I have focused on Data Engineering and Software Development.",

  p2: "I am eager to join a company where I can continue to grow professionally, contribute my skills, and acquire new abilities that will help me advance in my career.",
}

export const ABOUT_TEXT = {
  p1: "I'm a dedicated Information Systems Engineering student with a keen interest in front-end development and business intelligence. Throughout my academic career, I've focused on mastering these areas to create intuitive user interfaces and use data to make informed decisions. Outside of my studies, I maintain an active lifestyle with regular running and gym sessions. I like to watch series and TV Sports. Last but not least, spending time with family and friends is a top priority, giving me relaxation and joy. I look forward to applying my skills and enthusiasm to contribute effectively in a professional environment where innovation and collaboration thrive.",

  p2: "",
  
  p3: "",

  }

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "University of Minho",
    company: "",
    description: `Last year of my Master’s Degree.`,
    
  },
  {
    year: "2020 - 2024",
    role: "University of Minho",
    company: "",
    description: `Bachelor’s Degree in Engineering and Management of Information Systems.`,
    
  },
];

export const PROJECTS = [
  {
    title: "Braga Tourism Website",
    image: project1,
    description:
      "Development of a modern, up-to-date website focused on tourism in the city of Braga.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
  {
    title: "Mobile Price Prediction System",
    image: project2,
    description:
      "Project with the aim of analyzing and organizing the data provided, in order to predict and establish prices for certain cell phones.",
    technologies: ["Python", "PowerBI"],
  },
  {
    title: "Analysis of data on the Quality of Life of Squirrels in New York",
    image: project3,
    description:
      "This project consisted of collecting and processing data that could influence the quality of life of squirrels in New York.",
    technologies: ["Jupyter(PySpark)", "Hadoop(HDFS)", "Tableau"],
  },
  {
    title: "Decision Support System for Walmart",
    image: project4,
    description:
      "Advanced forecasting and optimization techniques to improve Walmart's resource management, specifically in relation to product stock and employee allocation.",
    technologies: ["RStudio"],
  },
  {
    title: "Softwares in Java",
    image: project5,
    description:
      "Creation of an application to manage the university's parking lots. Creation of a client-server chat using the Java Sockets extension.",
    technologies: ["Java", "JavaScript", "JavaSocket"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "",
};
