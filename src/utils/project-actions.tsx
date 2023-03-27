interface Project {
  title: string;
  gitPage: string;
  livePage: string;
  stack: string[];
  spanTwo?: "1 / 3" | "3 / 5";
  details: string;
}

const projects: Project[] = [
  {
    title: "Eventos",
    livePage: "https://eventos-ndos.onrender.com",
    gitPage: "https://github.com/Moshood1426/Lorem-Gym-App",
    stack: [
      "react",
      "redux",
      "SCSS",
      "GSAP",
      "nestJS",
      "postgreSQL",
      "typeorm",
      "jest",
    ],
    spanTwo: "1 / 3",
    details: `
      A fullstack real time event app for selling and buying event ticket. 
      Users can create events and put it out for sale while others can purchase 
      tickets.
    `,
  },
  {
    title: "Quizzal",
    gitPage: "https://github.com/Moshood1426/Quiz-App",
    livePage: "https://quizzal-e5c7.onrender.com/",
    stack: [
      "react",
      "nodejs",
      "express",
      "mongoDB",
      "typescript",
      "sendgrid",
      "docker",
      "AWS ECS",
    ],
    spanTwo: "3 / 5",
    details: `
      Quizzal is a fullstack service that allows tutors set quiz for their
      students, comfortably receive students answers after submission,
      and return results as feedback
    `,
  },
  {
    title: "Lorem Gym",
    livePage: "https://lorem-gym-v76y.onrender.com",
    gitPage: "https://github.com/Moshood1426/Lorem-Gym-App",
    stack: [
      "EJS",
      "SCSS",
      "nodejs",
      "expressJS",
      "MYSQL",
      "sequelize",
      "heroku",
    ],
    spanTwo: "1 / 3",
    details: `
      Lorem gym app provides a comfortable means of managing 
      gym memberships and receiving new clients
    `,
  },
  {
    title: "E-Commerce API",
    gitPage: "https://github.com/Moshood1426/E-COMMERCE-API",
    livePage: "https://e-commerce-api-gules.vercel.app/",
    stack: ["typescript", "nodejs", "express", "mongoDB", "stripeJS", "docgen"],
    spanTwo: "3 / 5",
    details: `
        A backend REST API project for a fully functional 
        E-COMMERCE Website with endpoints documented with docgen`,
  },
  {
    title: "Jobtify",
    gitPage: "https://github.com/Moshood1426/Jobtify",
    livePage: "https://jobtify.onrender.com",
    stack: [
      "react",
      "typescript",
      "GSAP",
      "nodejs",
      "express",
      "mongoDB",
      "cloudinary",
    ],
    details:
      "A fullstack MERN app that allows users effectively keep track of their job application",
  },
  {
    title: "ProjMgt",
    gitPage: "",
    livePage: "",
    stack: [
      "react",
      "redux",
      "typescript",
      "graphQL",
      "nodejs",
      "express",
      "mongoDB",
    ],
    details:
      "The app allows users keep track of their ongoing projects and manage projects activities. It also aids keeping client records.",
  },
];

export { projects };
