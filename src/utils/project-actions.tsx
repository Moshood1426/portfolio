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
    title: "Quizzal",
    gitPage: "https://github.com/Moshood1426/Quiz-App",
    livePage: "https://quizzal.onrender.com/",
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
      Quizzal is a service that allows tutors quiz their
      students easily, comfortably receive students answers,
      and return results as feedback
    `,
  },
  {
    title: "Lorem Gym",
    livePage: "https://lorem-gym.herokuapp.com/",
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
    livePage: "https://e-commerce-api-ttap.onrender.com",
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
