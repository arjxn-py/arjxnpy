import { Experience } from "@/types";

const experiences: Experience[] = [
  {
    role: "Google Summer of Code Developer",
    organization: "PyBaMM (Python Battery Mathematical Modeling), NumFOCUS",
    startDate: "May 2023",
    endDate: "September 2023",
    location: "Remote",
    responsibilities: [
      "Migrate test suite from Tox to Nox & Simplify PyBaMM’s Installation",
      "Enable Optional Dependencies in PyBaMM, creating PyBaMM-lite",
      "Dockerize PyBaMM, create CI pipeline for automatic update of PyBaMM images",
    ],
  },
  {
    role: "Junior Developer",
    organization: "Development Monitors LLC",
    startDate: "April 2023",
    endDate: "November 2023",
    location: "Remote",
    responsibilities: [
      "Core Developer of a Diagnostic & Decision Support Plugin in QGIS for Water Supply System Utility",
      "Develop Asset Management System for two Pilot Cities Aizawl & Shimla for The World Bank",
    ],
  },
  {
    role: "Software Development Intern",
    organization: "Development Monitors LLC",
    startDate: "November 2022",
    endDate: "April 2023",
    location: "Remote",
    responsibilities: [
      "Core developer of a 3D Mapping Software in ThreeJS & Flask to mitigate various risks",
      "Developed digital twins of 7 cities in Yemen & conducted risk analysis on them for The World Bank",
      "Dockerize & Deploy the Web Application on AWS Elastic Container Service",
    ],
  },
  {
    role: "Web Development Intern",
    organization: "Beyond Exams",
    startDate: "July 2022",
    endDate: "November 2022",
    location: "Remote",
    responsibilities: [
      "Built a Web Application to translate Youtube Videos from one-to-many language",
      "Working with Designing tools like Whimsicle & Figma to build UI/UX of the app.",
      "Using Different Javascript & Python based modules to optimize the process of translation",
    ],
  },
];

export default experiences;
